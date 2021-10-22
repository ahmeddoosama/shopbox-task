import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGroubComponent } from './card-groub.component';

describe('CardGroubComponent', () => {
  let component: CardGroubComponent;
  let fixture: ComponentFixture<CardGroubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGroubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGroubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
