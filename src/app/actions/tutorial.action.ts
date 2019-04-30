import { Tutorial } from '../models/tutorial.model';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

//! In this file, we are defining our application actions

// Let's define types
export const ADD_TUTORIAL = '[Tutorial] Add';
export const REMOVE_TUTORIAL = '[Tutorial] remove';

// Let's define AddTutorial action class
export class AddTutorial implements Action {
  readonly type = ADD_TUTORIAL;

  // The constructor is used to passe the dispatched data
  constructor(public payload: Tutorial) {}
}

// Let's define RemoveTutorial action class
export class RemoveTutorial implements Action {
  readonly type = REMOVE_TUTORIAL;

  // The constructor is used to passe the dispatched data
  constructor(public payload: number) {}
}

// Now we will export a type named Actions which will allow us to access either the AddTutorial Class or RemoveTutorial
export type Actions = AddTutorial | RemoveTutorial;
