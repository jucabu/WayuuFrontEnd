import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridOportunitiesComponent } from './grid-oportunities.component';

describe('GridOportunitiesComponent', () => {
  let component: GridOportunitiesComponent;
  let fixture: ComponentFixture<GridOportunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridOportunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridOportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
