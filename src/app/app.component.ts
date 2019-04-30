import { Component, OnInit } from '@angular/core';
import {
  Subject,
  Subscription,
  Observer,
  BehaviorSubject,
  ReplaySubject,
  AsyncSubject,
  Observable,
  merge
} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RxJs';
  displayData: string = '';
  sentCounter: number = 0;
  // subject: Subject<any> = new Subject();
  // subejct: BehaviorSubject<any> = new BehaviorSubject('First data __initial__');
  // subject: ReplaySubject<any> = new ReplaySubject(8, 200); // new created observer will receive the last to emitted data
  subject: AsyncSubject<any> = new AsyncSubject();

  //! ========== There are 3 types of subjects ==========  //! ========== There are 3 types of subjects ==========
  //? Subject: This is the normal type
  //? BehaviorSubject: This type of subjects dispatch the last data to the new created observer
  //? REplaySubject: This on dispatch a specified number of data to the new created ones
  //? subject: this on dispatch the last value after complete method call

  // subejct: Subject<any> = new Subject()
  // behaviorSubject: BehaviorSubject<any> = new BehaviorSubject('First Initial Data');
  // replaySubject: ReplaySubject<any> = new ReplaySubject(2); Number of replayed data to new created observers

  //? Operators are method which only return modified data and not the observable itself
  //? 2 types of operators => static operators, instance operators

  ngOnInit() {
    // Creating first observer
    // let observer1: Subscription = this.subject.subscribe(
    //   data => this.addItem('Observer 1:' + data),
    //   error => this.addItem(error),
    //   () => {
    //     this.addItem('Observer completed');
    //   }
    // );

    // let i=1;
    // setInterval(() => this.subject.next(i++), 100);

    // // Emitting data from the subject property
    // this.subject.next('The first thing has been sent');
    // this.subject.next('An other thing has been sent');
    // this.subject.next('Other thing has been sent');

    // // Emitting data to display the last emitted data with the new created observer laster
    // this.subject.next(
    //   '....................Observer 2 is about being created....................'
    // );

    // // Creating second observer
    // let observer2: Subscription;
    // setTimeout(() => {
    //   observer2 = this.subject.subscribe(data =>
    //     this.addItem('Observer 2: ' + data)
    //   );
    //   // After calling complete, all observers will receive only the last emitted value
    //   this.subject.complete();
    // }, 500);

    // // Emitting data from the subject property
    // this.subject.next('The second thing has been sent');
    // this.subject.next('The third thing has been sent');

    // // Unsubscribe the second observer
    // observer2.unsubscribe();

    // // EMitting data from the subject property
    // this.subject.next('The fourth thing has been sent');

    // const observable1: Observable<any> = Observable.create(
    //   (observer: Observer<any>) => {
    //     observer.next('Hello guys!');
    //   }
    // );

    // const observable2: Observable<any> = Observable.create(
    //   (observer: Observer<any>) => {
    //     observer.next('How is it going !');
    //   }
    // );

    // //? Merge operator allow us to combine two or more operators in one call(in this case two operators will be called at one time)
    // const newObs = merge(observable1, observable2);
    // newObs.subscribe((value: any) => {
    //   this.addItem(value);
    // });
    Observable.create((observer: Observer<any>) => {
      observer.next('Hello guys');
    }).pipe(
      map((value: any) => value.toUpperCase())
    ).subscribe(
      (x: any) => {
        this.addItem(x);
      }
    );
  }

  addItem(val: any) {
    this.displayData += '<li>' + val + '</li>';
  }
}
