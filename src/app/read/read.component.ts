import { Tutorial } from './../models/tutorial.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import * as TutorialActions from '../actions/tutorial.action';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  // We need to create a property of type Observale which will be returned by the store
  tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) {
    // We are going to bind a property name tutorial which we have defined in app.module.ts like that:
    // StoreModule.forRoot({
//      tutorial: tutorialReducer
    // })
    this.tutorials = store.select('tutorial');
  }

  ngOnInit() {}

  deleteTutorial(index: number) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }
}
