import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPopupFoyerComponent } from './edit-popup-foyer.component';

describe('EditPopupFoyerComponent', () => {
  let component: EditPopupFoyerComponent;
  let fixture: ComponentFixture<EditPopupFoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPopupFoyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPopupFoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
