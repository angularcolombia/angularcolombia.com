import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);
const defaultFirestore = admin.firestore();

function handleErr(err) {
  console.log('error', err);
}

function setRoles(uid, rolesArr) {
    const rolesObj = rolesArr.reduce((acc, role) =>  {
      return {...acc, [role]: true};
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
    if(querySnapshot.size) {
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
