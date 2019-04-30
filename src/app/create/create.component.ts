import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Tutorial } from '../models/tutorial.model';
import * as TutorialActions from '../actions/tutorial.action';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  // @ViewChild('name') name: HTMLInputElement;
  // @ViewChild('url') url: HTMLInputElement;

  constructor(private store: Store<Tutorial[]>) {}

  ngOnInit() {}

  addTutorial(name: string, url: string) {
    this.store.dispatch(
      new TutorialActions.AddTutorial({ name: name, url: url })
    );
  }
}
