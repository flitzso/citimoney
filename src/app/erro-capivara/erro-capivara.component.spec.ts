import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroCapivaraComponent } from './erro-capivara.component';

describe('ErroCapivaraComponent', () => {
  let component: ErroCapivaraComponent;
  let fixture: ComponentFixture<ErroCapivaraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErroCapivaraComponent]
    });
    fixture = TestBed.createComponent(ErroCapivaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
