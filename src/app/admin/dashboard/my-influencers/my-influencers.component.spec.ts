import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInfluencersComponent } from './my-influencers.component';

describe('MyInfluencersComponent', () => {
  let component: MyInfluencersComponent;
  let fixture: ComponentFixture<MyInfluencersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInfluencersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInfluencersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
