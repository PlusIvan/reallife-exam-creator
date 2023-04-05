import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  list: Array<{ label: string; link: string; id?: string; }> = [];
  constructor(private _fireStore: AngularFirestore){}
  ngOnInit(): void {
    this._fireStore.collection('/subjects').get().subscribe({
      next: (snapshot) => {
        this.list = snapshot.docs.map((doc) => { 
          const data = doc.data() as { name: string; image: string; };
          return { label: data.name, link: `/${doc.id}`, id: doc.id };
        });
      }
    })
  }
}
