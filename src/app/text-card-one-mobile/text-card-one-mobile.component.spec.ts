import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCardOneMobileComponent } from './text-card-one-mobile.component';

describe('TextCardOneMobileComponent', () => {
  let component: TextCardOneMobileComponent;
  let fixture: ComponentFixture<TextCardOneMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextCardOneMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextCardOneMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
