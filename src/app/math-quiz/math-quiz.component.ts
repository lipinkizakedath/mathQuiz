import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MathValidator } from '../math-validator';
import { delay, filter, scan } from 'rxjs/operators';

@Component({
  selector: 'app-math-quiz',
  templateUrl: './math-quiz.component.html',
  styleUrls: ['./math-quiz.component.css'],
})
export class MathQuizComponent implements OnInit {
  secondsPerSolution: number = 0;
  avarageTimeTaken = [];
  averageTime: number;

  mathForm = new FormGroup(
    {
      a: new FormControl(this.randomNumber()),
      b: new FormControl(this.randomNumber()),
      answer: new FormControl(''),
    },
    [MathValidator.Addtion('answer', 'a', 'b')]
  );

  constructor() {}

  ngOnInit(): void {
    this.mathForm.statusChanges
      .pipe(
        filter((value) => value === 'VALID'),
        delay(100),
        scan(
          (acc, value) => {
            return {
              numberSolved: acc.numberSolved + 1,
              startTime: acc.startTime,
            };
          },
          { numberSolved: 0, startTime: new Date() }
        )
      )
      .subscribe(({ numberSolved, startTime }) => {
        this.secondsPerSolution =
          (new Date().getTime() - startTime.getTime()) / numberSolved / 1000;
        this.avarageTimeTaken.push(this.secondsPerSolution);

        this.avgCalculator();
        this.setNewRandomValues();
      });
  }

  private avgCalculator() {
    this.averageTime =
      this.avarageTimeTaken.reduce((a, b) => a + b) /
      this.avarageTimeTaken.length;
  }

  private setNewRandomValues() {
    setTimeout(() => {
      this.mathForm.setValue({
        a: this.randomNumber(),
        b: this.randomNumber(),
        answer: '',
      });
    }, 500);
  }

  get a() {
    return this.mathForm.value.a;
  }

  get b() {
    return this.mathForm.value.b;
  }

  randomNumber() {
    return Math.floor(Math.random() * 10);
  }
}
