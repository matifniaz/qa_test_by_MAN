import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturesDetailViewComponent } from './pictures-detail-view.component';

describe('PicturesDetailViewComponent', () => {
  let component: PicturesDetailViewComponent;
  let fixture: ComponentFixture<PicturesDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicturesDetailViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicturesDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
