import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCommercialComponent } from './service-commercial.component';

describe('ServiceCommercialComponent', () => {
  let component: ServiceCommercialComponent;
  let fixture: ComponentFixture<ServiceCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCommercialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
