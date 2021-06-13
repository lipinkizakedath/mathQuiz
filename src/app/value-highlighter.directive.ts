import { Directive, ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appValueHighlighter]',
})
export class ValueHighlighterDirective implements OnInit {
  constructor(private el: ElementRef, private controlName: NgControl) {}

  ngOnInit() {
    this.controlName.control.parent.valueChanges
      .pipe(
        map(({ a, b, answer }) => {
          return Math.abs((a + b - answer) / (a + b));
        })
      )
      .subscribe((value) => {
        if (value < 0.2 && value !== 0) {
          this.el.nativeElement.classList.add('hightlight');
        } else if (value === 0) {
          this.el.nativeElement.classList.add('right-answer');
        } else {
          this.el.nativeElement.classList.remove('hightlight');
          this.el.nativeElement.classList.remove('right-answer');
        }
      });
  }
}
