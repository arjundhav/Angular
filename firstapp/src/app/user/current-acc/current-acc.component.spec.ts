import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAccComponent } from './current-acc.component';

describe('CurrentAccComponent', () => {
  let component: CurrentAccComponent;
  let fixture: ComponentFixture<CurrentAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentAccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
