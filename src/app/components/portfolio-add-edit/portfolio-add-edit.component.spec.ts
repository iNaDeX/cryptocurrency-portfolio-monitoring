import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioAddEditComponent } from './portfolio-add-edit.component';

describe('PortfolioAddEditComponent', () => {
  let component: PortfolioAddEditComponent;
  let fixture: ComponentFixture<PortfolioAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
