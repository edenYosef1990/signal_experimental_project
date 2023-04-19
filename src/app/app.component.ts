import { AfterViewInit, Component, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { toSignal ,toObservable } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor() {
    effect(() => alert(`${this.countA()} changed!`));
  }
  ngAfterViewInit(): void {
  }
  title = 'Angular16Project';

  countA: WritableSignal<number> = signal(0);
  countB: WritableSignal<number> = signal(0);

  anotherCount: Signal<number> = computed(() => this.countA() + this.countB());

  foo() {
    this.countA.update(x => x + 1);
  }

  foo2() {
    this.countB.update(x => x + 1);
  }
}
