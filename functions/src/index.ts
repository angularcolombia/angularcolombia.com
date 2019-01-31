import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);
const defaultFirestore = admin.firestore();

function handleErr(err) {
  console.log('error', err);
}

function setRoles(uid, rolesArr) {
  const rolesObj = rolesArr.reduce((acc, role) => {
    return { ...acc, [role]: true };
  }, {});
  admin.auth().setCustomUserClaims(uid, rolesObj).then(() => {
    console.log(`Custom claims ${JSON.stringify(rolesArr)} successfully applied to user ${uid}`)
  }, handleErr);
}

export const onUserSignup = functions.auth.user().onCreate((change, context) => {
  console.info(`A user with the email ${change.email} just signed up.`, context)
  const usersRef = defaultFirestore.doc(`users/${change.uid}`);
  const whitelistedUsersCollection = defaultFirestore.collection(`whitelistedUsers`);

  const userMatch = whitelistedUsersCollection.where('email', '==', change.email);
  userMatch.get().then((querySnapshot: admin.firestore.QuerySnapshot) => {
    if (querySnapshot.size) {
      querySnapshot.docs.forEach(documentSnapshot => {
        const userRolesArr = documentSnapshot.data().roles;
        setRoles(change.uid, userRolesArr);
      });
    }
  }, handleErr);

  return usersRef.set({ uid: change.uid, email: change.email }).then((user) => {
    console.log(`User with email ${change.email} has been created. User: ${JSON.stringify(user)}`);
  }).catch(err => {
    console.error('error creating user data:', err);
  });

});

export const eventRegistration = functions.https.onCall((data, context) => {
  const uid = context.auth.uid;
  const eventRef = defaultFirestore.doc(`events/${data.eventId}`);

  return eventRef.get().then((snapshot) => {
    if (snapshot.exists) {
      if (snapshot.data().registrationOpen) {
        const userTicket = snapshot.ref.collection('attendees').doc(uid);
        return userTicket.get().then(ticketData => {
          let userConfirmations = 0;
          if (ticketData.exists) {
            userConfirmations = ticketData.data().confirmations;
          } else {
            return userTicket
              .set({
                uid: uid,
                confirmations: userConfirmations
              }).then(updateResult => updateResult, err => err);
          }
        });
      } else {
        return 'registration_closed';
      }
    }
    return 'unknown_event';
  }, err => err);
});

