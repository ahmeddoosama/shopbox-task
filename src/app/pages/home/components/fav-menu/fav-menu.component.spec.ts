import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavMenuComponent } from './fav-menu.component';

describe('FavMenuComponent', () => {
  let component: FavMenuComponent;
  let fixture: ComponentFixture<FavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
