import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CquoteComponent } from './cquote.component';

describe('CquoteComponent', () => {
  let component: CquoteComponent;
  let fixture: ComponentFixture<CquoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CquoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
