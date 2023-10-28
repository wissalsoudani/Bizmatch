import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BesoinoffreListComponent } from './BesoinoffreListComponent';

describe('BesoinoffreListComponent', () => {
  let component: BesoinoffreListComponent;
  let fixture: ComponentFixture<BesoinoffreListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BesoinoffreListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BesoinoffreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
