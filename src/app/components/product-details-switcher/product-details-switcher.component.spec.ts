import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsSwitcherComponent } from './product-details-switcher.component';

describe('ProductDetailsSwitcherComponent', () => {
  let component: ProductDetailsSwitcherComponent;
  let fixture: ComponentFixture<ProductDetailsSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsSwitcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
