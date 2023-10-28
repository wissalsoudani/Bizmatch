import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BesoinCommercialComponent } from './besoin-commercial.component';

describe('BesoinCommercialComponent', () => {
  let component: BesoinCommercialComponent;
  let fixture: ComponentFixture<BesoinCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BesoinCommercialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BesoinCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
