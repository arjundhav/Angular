import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingAccComponent } from './saving-acc.component';

describe('SavingAccComponent', () => {
  let component: SavingAccComponent;
  let fixture: ComponentFixture<SavingAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingAccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
