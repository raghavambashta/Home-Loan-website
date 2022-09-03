import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocFormComponent } from './doc-form.component';

describe('DocFormComponent', () => {
  let component: DocFormComponent;
  let fixture: ComponentFixture<DocFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
