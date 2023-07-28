import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDataByApiComponent } from './get-data-by-api.component';

describe('GetDataByApiComponent', () => {
  let component: GetDataByApiComponent;
  let fixture: ComponentFixture<GetDataByApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetDataByApiComponent]
    });
    fixture = TestBed.createComponent(GetDataByApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
