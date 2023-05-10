import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzCommonComponent } from './mz-common.component';

describe('MzCommonComponent', () => {
  let component: MzCommonComponent;
  let fixture: ComponentFixture<MzCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MzCommonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MzCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
