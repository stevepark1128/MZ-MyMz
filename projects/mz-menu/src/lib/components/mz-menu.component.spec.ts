import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzMenuComponent } from './mz-menu.component';

describe('MzMenuComponent', () => {
  let component: MzMenuComponent;
  let fixture: ComponentFixture<MzMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MzMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MzMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
