import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LacamentoResumoComponent } from './lacamento-resumo.component';

describe('LacamentoResumoComponent', () => {
  let component: LacamentoResumoComponent;
  let fixture: ComponentFixture<LacamentoResumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LacamentoResumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LacamentoResumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
