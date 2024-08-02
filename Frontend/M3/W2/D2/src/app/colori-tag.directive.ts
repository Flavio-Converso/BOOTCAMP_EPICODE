import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColoriTag]',
})
export class ColoriTagDirective {
  constructor(private ref: ElementRef) {}
  setRandomTagColor() {
    this.ref.nativeElement.style.backgroundColor = this.getRandomColor();
  }
  getRandomColor(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  ngOnInit() {
    this.setRandomTagColor();
  }
}
