import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firebaseConfig = {
    apiKey: "AIzaSyAG6nl2ifc9t0lzeP9IhoqF6iFQ8Zsy_ao",
    authDomain: "fir-test-project-18870.firebaseapp.com",
    projectId: "fir-test-project-18870",
    storageBucket: "fir-test-project-18870.appspot.com",
    messagingSenderId: "890615214242",
    appId: "1:890615214242:web:097332fea3489c8846a7fb"
  };

  app = initializeApp(this.firebaseConfig);

  constructor() { }
}
