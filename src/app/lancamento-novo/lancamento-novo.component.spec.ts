import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoNovoComponent } from './lancamento-novo.component';

describe('LancamentoNovoComponent', () => {
  let component: LancamentoNovoComponent;
  let fixture: ComponentFixture<LancamentoNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancamentoNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
