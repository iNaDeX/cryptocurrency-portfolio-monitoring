import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDeleteComponent } from './portfolio-delete.component';

describe('PortfolioDeleteComponent', () => {
  let component: PortfolioDeleteComponent;
  let fixture: ComponentFixture<PortfolioDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
