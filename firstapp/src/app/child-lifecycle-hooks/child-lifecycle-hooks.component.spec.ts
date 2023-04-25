import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLifecycleHooksComponent } from './child-lifecycle-hooks.component';

describe('ChildLifecycleHooksComponent', () => {
  let component: ChildLifecycleHooksComponent;
  let fixture: ComponentFixture<ChildLifecycleHooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildLifecycleHooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildLifecycleHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
