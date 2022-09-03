import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropFormComponent } from './prop-form.component';

describe('PropFormComponent', () => {
  let component: PropFormComponent;
  let fixture: ComponentFixture<PropFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
