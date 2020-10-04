import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import 'rxjs/Rx';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {


  title = 'rxjsoperators';
  subscription: Subscription;
  searchTern = new Subject<string>();

  ngOnInit(): void {
    // **map
    // const source = Observable.from([1, 2, 3, 4, 5, 6, 12, 8])
    //   .map((x) => {
    //       return x * 2;
    //   });

    // **filter
    // const source = Observable.from([1, 2, 3, 4, 5, 6, 12, 8])
    // .filter((x) => {
    //     return x % 2 == 0;
    // });

    // **interval
    // const source = Observable.interval(2000)
    // .map( (x) => {
    //     return (x * 2) + 'ddd'       
    //   }
    // )

    // **fromEvent
    // const source = Observable.fromEvent(document , 'click')

    // **do
    // const source = Observable.of('mammad', 'baheri')
    //   .do(x => console.log('befor map', x))
    //   .map(x => x.toUpperCase())
    //   .map(x => console.log('afer map', x));

    // this.subscription = source.subscribe(
    // (x) => {
    //   console.log(x);
    // }
    // )

    // **debounceTime
    //this.searchTern.debounceTime(2000).subscribe(
    //   this.searchTern.throttleTime(2000).subscribe(
    //   (x) => {
    //     console.log (x);
    //   }
    // );

    // **forkJoin
    //  const obs1 = Observable.of('ddd' , 'uuu' , 'yyy')
    //  let obs2 = Observable.of('123' , '456' , '789')
    //  const summery = Observable.forkJoin(obs1 , obs2)
    //  obs2 = obs2.delay(5000);
    //  summery.subscribe((x) => {console.log(x)})

    // **distinctUntilChanged
    const myArry = Observable.from([5, 5, 1, 1, 5, 2, 2, 8, 8, 8, 8, 9, 9, 8, 8, 7, 7]);
    const distinct = myArry.distinctUntilChanged().subscribe(x => console.log(x));
  }

  txt() {

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
