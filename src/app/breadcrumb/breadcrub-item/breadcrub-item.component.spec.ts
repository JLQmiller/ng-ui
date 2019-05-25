import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrubItemComponent } from './breadcrub-item.component';

describe('BreadcrubItemComponent', () => {
  let component: BreadcrubItemComponent;
  let fixture: ComponentFixture<BreadcrubItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrubItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrubItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
