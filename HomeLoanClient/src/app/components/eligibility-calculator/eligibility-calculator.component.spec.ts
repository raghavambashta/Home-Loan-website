import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilityCalculatorComponent } from './eligibility-calculator.component';

describe('EligibilityCalculatorComponent', () => {
  let component: EligibilityCalculatorComponent;
  let fixture: ComponentFixture<EligibilityCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibilityCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EligibilityCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
