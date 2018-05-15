
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDashComponent } from './new-dash.component';

describe('NewDashComponent', () => {
  let component: NewDashComponent;
  let fixture: ComponentFixture<NewDashComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
