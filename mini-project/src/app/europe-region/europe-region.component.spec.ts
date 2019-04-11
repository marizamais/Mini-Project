import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropeRegionComponent } from './europe-region.component';

describe('EuropeRegionComponent', () => {
  let component: EuropeRegionComponent;
  let fixture: ComponentFixture<EuropeRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuropeRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropeRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
