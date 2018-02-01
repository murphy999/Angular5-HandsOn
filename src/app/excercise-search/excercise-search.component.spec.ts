import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcerciseSearchComponent } from './excercise-search.component';

describe('ExcerciseSearchComponent', () => {
  let component: ExcerciseSearchComponent;
  let fixture: ComponentFixture<ExcerciseSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcerciseSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcerciseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
