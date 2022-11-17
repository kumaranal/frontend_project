import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveProjectComponent } from './live-project.component';

describe('LiveProjectComponent', () => {
  let component: LiveProjectComponent;
  let fixture: ComponentFixture<LiveProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
