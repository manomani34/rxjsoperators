import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import 'rxjs/Rx';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {


  title = 'rxjsoperators';
  subscription: Subscription;

  ngOnInit(): void {
    // const source = Observable.from([1, 2, 3, 4, 5, 6, 12, 8])
    //   .map((x) => {
    //       return x * 2;
    //   });

    // const source = Observable.from([1, 2, 3, 4, 5, 6, 12, 8])
    // .filter((x) => {
    //     return x % 2 == 0;
    // });

    // const source = Observable.interval(2000)
    // .map( (x) => {
    //     return (x * 2) + 'ddd'       
    //   }
    // )
    // const source = Observable.fromEvent(document , 'click')
    const source = Observable.of('mammad', 'baheri')
      .do(x => console.log('befor map', x))
      .map(x => x.toUpperCase())
      .map(x => console.log('afer map', x));

    this.subscription = source.subscribe(
      // (x) => {
      //   console.log(x);
      // }
    )
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
