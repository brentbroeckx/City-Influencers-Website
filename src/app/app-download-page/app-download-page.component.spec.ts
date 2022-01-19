import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDownloadPageComponent } from './app-download-page.component';

describe('AppDownloadPageComponent', () => {
  let component: AppDownloadPageComponent;
  let fixture: ComponentFixture<AppDownloadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDownloadPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDownloadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
