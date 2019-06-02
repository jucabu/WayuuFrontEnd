import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWayuuComponent } from './info-wayuu.component';

describe('InfoWayuuComponent', () => {
  let component: InfoWayuuComponent;
  let fixture: ComponentFixture<InfoWayuuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoWayuuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoWayuuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
