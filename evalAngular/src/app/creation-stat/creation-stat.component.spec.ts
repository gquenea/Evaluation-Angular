import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationStatComponent } from './creation-stat.component';

describe('CreationStatComponent', () => {
  let component: CreationStatComponent;
  let fixture: ComponentFixture<CreationStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
