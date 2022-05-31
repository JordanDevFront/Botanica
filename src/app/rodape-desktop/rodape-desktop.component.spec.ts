import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodapeDesktopComponent } from './rodape-desktop.component';

describe('RodapeDesktopComponent', () => {
  let component: RodapeDesktopComponent;
  let fixture: ComponentFixture<RodapeDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodapeDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RodapeDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
