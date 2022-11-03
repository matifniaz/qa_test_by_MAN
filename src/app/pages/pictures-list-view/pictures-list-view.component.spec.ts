import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturesListViewComponent } from './pictures-list-view.component';

describe('PicturesListViewComponent', () => {
  let component: PicturesListViewComponent;
  let fixture: ComponentFixture<PicturesListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicturesListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicturesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
