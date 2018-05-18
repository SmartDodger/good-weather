import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsCalendarComponent } from './tabs-calendar.component';

describe('TabsCalendarComponent', () => {
  let component: TabsCalendarComponent;
  let fixture: ComponentFixture<TabsCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
