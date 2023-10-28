import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BesoinoffreEditComponent } from './besoinoffre-edit.component';

describe('BesoinoffreEditComponent', () => {
  let component: BesoinoffreEditComponent;
  let fixture: ComponentFixture<BesoinoffreEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BesoinoffreEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BesoinoffreEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
