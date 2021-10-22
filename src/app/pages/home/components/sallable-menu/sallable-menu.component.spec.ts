import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SallableMenuComponent } from './sallable-menu.component';

describe('SallableMenuComponent', () => {
  let component: SallableMenuComponent;
  let fixture: ComponentFixture<SallableMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SallableMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SallableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
