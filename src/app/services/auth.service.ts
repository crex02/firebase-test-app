import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { Auth, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth: Auth;

  provider: GoogleAuthProvider;

  userSubject: Subject<any> = new Subject()

  constructor(private firebaseServ: FirebaseService) {
     this.auth = getAuth(this.firebaseServ.app)
     this.provider = new GoogleAuthProvider();

     onAuthStateChanged(this.auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
        console.log('auth state: ', user)

        this.userSubject.next(user)
      } else {
        // User is signed out
        // ...
        console.log('user signed out')
        this.userSubject.next(null)
      }
    });

   }

   signIn() {
    signInWithPopup(this.auth, this.provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential!.accessToken;
    // The signed-in user info.
    const user = result.user;
  console.log(user)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
console.log(errorMessage)
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
   }

   signOut(){
    signOut(this.auth)
   }


}
