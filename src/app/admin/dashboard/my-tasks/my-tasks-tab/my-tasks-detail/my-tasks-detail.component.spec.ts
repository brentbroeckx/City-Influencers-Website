import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTasksDetailComponent } from './my-tasks-detail.component';

describe('MyTasksDetailComponent', () => {
  let component: MyTasksDetailComponent;
  let fixture: ComponentFixture<MyTasksDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTasksDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTasksDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
