import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;
  let span: HTMLSpanElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    span = fixture.nativeElement.querySelector('span')
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be visible while "showLoading" is true', () => {
    component.showLoading = true
    fixture.detectChanges();
    expect(span.textContent).toContain('Loading...');
  });

  it('should not be visible while "showLoading" is false', () => {
    component.showLoading = false
    fixture.detectChanges();
    expect(span).not.toContain('Loading')
  });

});
