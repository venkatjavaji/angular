import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerSideEventComponent } from './server-side-event.component';

describe('ServerSideEventComponent', () => {
  let component: ServerSideEventComponent;
  let fixture: ComponentFixture<ServerSideEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerSideEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerSideEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
