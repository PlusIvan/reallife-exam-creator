import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamCreatorTemplateComponent } from './exam-creator-template.component';

describe('ExamCreatorTemplateComponent', () => {
  let component: ExamCreatorTemplateComponent;
  let fixture: ComponentFixture<ExamCreatorTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamCreatorTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamCreatorTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
