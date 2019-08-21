import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmHandlerComponent } from './rm-handler.component';

describe('RmHandlerComponent', () => {
  let component: RmHandlerComponent;
  let fixture: ComponentFixture<RmHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
