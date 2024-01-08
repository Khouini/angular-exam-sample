import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandonneComponent } from './randonne.component';

describe('RandonneComponent', () => {
  let component: RandonneComponent;
  let fixture: ComponentFixture<RandonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandonneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
