import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectTemplateComponent } from './subject-template.component';

describe('SubjectTemplateComponent', () => {
  let component: SubjectTemplateComponent;
  let fixture: ComponentFixture<SubjectTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
