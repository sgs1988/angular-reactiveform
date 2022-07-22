import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxchatComponent } from './taxchat.component';

describe('TaxchatComponent', () => {
  let component: TaxchatComponent;
  let fixture: ComponentFixture<TaxchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
