import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserItemComponent } from './browser-item.component';

describe('BrowserItemComponent', () => {
  let component: BrowserItemComponent;
  let fixture: ComponentFixture<BrowserItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
