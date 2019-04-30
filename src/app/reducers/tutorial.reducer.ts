import { Action } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import * as TutorialActions from '../actions/tutorial.action';

// To get some data at the beginning, we need to initialize the state with some initial data
const initialData: Tutorial = {
  name: 'Javascript & Angular',
  url: 'http://www.javascript-angular.com'
};

// The reducer (tutorial reducer in this case)
// Reducer is what takes the incoming action and decide what to do with it. It takes the Payload
// First argument is state of type Tutorial array which takes the array of our initialData
// Second argument is action of type TutorialAction.Actions which we have exported and may be of type AddTutorial or RemoveTutorial
export function tutorialReducer(state: Tutorial[] = [initialData], action: TutorialActions.Actions) {
  // To check the type of the export actions from TutorialActions, we need a switch statement
  switch (action.type) {
    //? In case of ADD_TUTORIAL constant which is introduced as a readonly type in the AddTutorial class
    //? as a returned value, we will put our state and add the action.payload which we passed as an argument for AddTutorial class
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];
    //? In case of REMOVE_TUTORIAL constant which is introduced as a readonly type in the RemoveTutorial class
    //? as a returned value, we will put our state and remoev the action.payload index which we passed as an argument for AddTutorial class
    case TutorialActions.REMOVE_TUTORIAL:
      state.splice(action.payload, 1);
      return state;
    //? In case of not having any speicifed constant type
    default:
      return state;
  }
}
