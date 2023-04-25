import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLifecycleHooksComponent } from './parent-lifecycle-hooks.component';

describe('ParentLifecycleHooksComponent', () => {
  let component: ParentLifecycleHooksComponent;
  let fixture: ComponentFixture<ParentLifecycleHooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentLifecycleHooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentLifecycleHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
