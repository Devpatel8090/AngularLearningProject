import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTaskDialogueComponent } from './update-task-dialogue.component';

describe('UpdateTaskDialogueComponent', () => {
  let component: UpdateTaskDialogueComponent;
  let fixture: ComponentFixture<UpdateTaskDialogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTaskDialogueComponent]
    });
    fixture = TestBed.createComponent(UpdateTaskDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
