// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCX6m7kZLQ4-iaRccOltsZuzZz8t0tk6qQ",
    authDomain: "community-template-3a3e7.firebaseapp.com",
    databaseURL: "https://community-template-3a3e7.firebaseio.com",
    projectId: "community-template-3a3e7",
    storageBucket: "community-template-3a3e7.appspot.com",
    messagingSenderId: "841676598050"
  },
  settings: {
    community: {
      name: "Angular Colombia"
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
