import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzSharedComponent } from './mz-shared.component';

describe('MzSharedComponent', () => {
  let component: MzSharedComponent;
  let fixture: ComponentFixture<MzSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MzSharedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MzSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
