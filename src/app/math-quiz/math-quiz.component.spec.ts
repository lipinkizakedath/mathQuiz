import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathQuizComponent } from './math-quiz.component';

describe('MathQuizComponent', () => {
  let component: MathQuizComponent;
  let fixture: ComponentFixture<MathQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
