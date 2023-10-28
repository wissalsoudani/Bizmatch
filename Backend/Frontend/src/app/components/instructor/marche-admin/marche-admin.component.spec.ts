import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcheAdminComponent } from './marche-admin.component';

describe('MarcheAdminComponent', () => {
  let component: MarcheAdminComponent;
  let fixture: ComponentFixture<MarcheAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcheAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcheAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
