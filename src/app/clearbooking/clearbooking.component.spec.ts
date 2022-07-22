import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearbookingComponent } from './clearbooking.component';

describe('ClearbookingComponent', () => {
  let component: ClearbookingComponent;
  let fixture: ComponentFixture<ClearbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearbookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
