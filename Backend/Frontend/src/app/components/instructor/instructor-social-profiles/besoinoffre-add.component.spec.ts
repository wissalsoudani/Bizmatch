import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BesoinoffreAddComponent } from './besoinoffre-add.component';

describe('BesoinoffreAddComponent', () => {
  let component: BesoinoffreAddComponent;
  let fixture: ComponentFixture<BesoinoffreAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BesoinoffreAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BesoinoffreAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
