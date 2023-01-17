import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturesDetailViewComponent } from './pictures-detail-view.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
describe('PicturesDetailViewComponent', () => {
  let component: PicturesDetailViewComponent;
  let fixture: ComponentFixture<PicturesDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
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
