import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmTntComponent } from './crm-tnt.component';

describe('CrmTntComponent', () => {
  let component: CrmTntComponent;
  let fixture: ComponentFixture<CrmTntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmTntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmTntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
