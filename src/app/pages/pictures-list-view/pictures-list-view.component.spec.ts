import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturesListViewComponent } from './pictures-list-view.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('PicturesListViewComponent', () => {
  let component: PicturesListViewComponent;
  let fixture: ComponentFixture<PicturesListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,],
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
