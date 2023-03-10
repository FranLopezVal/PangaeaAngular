import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStructComponent } from './data-struct.component';

describe('DataStructComponent', () => {
  let component: DataStructComponent;
  let fixture: ComponentFixture<DataStructComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataStructComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataStructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
