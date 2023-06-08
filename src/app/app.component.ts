import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { FirestoreService } from './services/firestore.service';
import { Manga } from './model/manga';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'firebase-test-app';

  mangas: Manga[] = []

  constructor(private fireServ: FirestoreService, public authServ: AuthService) {

    this.fireServ.getManga("jmA2gFZsIddFed51mNVx")
    .then(manga => {
      console.log(manga)
    })

    // this.fireServ.getMangas().then(mangas => {
    //   for (let i = 0; i < mangas.length; i++) {
    //     const element = mangas[i]
    //     console.log('collection: ', element)
    //   }
    // })

    this.fireServ.getMangas().then(mangas => {
      this.mangas = mangas
    })


  }


}
