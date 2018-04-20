import { Component, HostListener ,ElementRef, ChangeDetectionStrategy,  AfterViewChecked, Inject } from '@angular/core';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  changeDetection : ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  MarkedElement ;
  value = 0;
  len ;
  SearchText : String;
  elementRef: ElementRef;

  constructor(@Inject(ElementRef) elementRef: ElementRef) {
    this.elementRef = elementRef;
 }

 
ngAfterViewChecked(): void {
  console.log(this.elementRef.nativeElement.querySelectorAll('mark'));
  this.MarkedElement = this.elementRef.nativeElement.querySelectorAll('mark');
  console.log(this.MarkedElement);
}
@HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);
    
    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.increment();
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.decrement();
    }
  }
  
  increment() {
    this.value++;
    console.log(this.MarkedElement[this.value]);
    this.MarkedElement[this.value-1].style.backgroundColor = "yellow";
    this.MarkedElement[this.value].style.backgroundColor = "red";
  }
  
  decrement() {
    this.value--;
    console.log(this.MarkedElement[this.value]);
    this.MarkedElement[this.value+1].style.backgroundColor = "yellow";
    this.MarkedElement[this.value].style.backgroundColor = "red";
  }
 ngAfterViewInit() {
  
}
}
