import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnApiDataComponent } from './own-api-data.component';

describe('OwnApiDataComponent', () => {
  let component: OwnApiDataComponent;
  let fixture: ComponentFixture<OwnApiDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnApiDataComponent]
    });
    fixture = TestBed.createComponent(OwnApiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
