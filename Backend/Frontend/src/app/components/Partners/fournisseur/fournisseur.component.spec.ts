import { ComponentFixture, TestBed } from '@angular/core/testing';
//import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';



describe('FournisseurComponent', () => {
  let component: FournisseurComponent;
  let fixture: ComponentFixture<FournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
