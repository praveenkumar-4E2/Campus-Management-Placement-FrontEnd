import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchPlacementsComponent } from './branch-placements.component';

describe('BranchPlacementsComponent', () => {
  let component: BranchPlacementsComponent;
  let fixture: ComponentFixture<BranchPlacementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchPlacementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchPlacementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
