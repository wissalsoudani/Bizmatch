import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObJectifListComponent } from './objectif-list.component';

describe('ObJectifListComponent', () => {
  let component: ObJectifListComponent;
  let fixture: ComponentFixture<ObJectifListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObJectifListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObJectifListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
