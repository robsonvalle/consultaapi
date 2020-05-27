import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LacamentoEditarComponent } from './lacamento-editar.component';

describe('LacamentoEditarComponent', () => {
  let component: LacamentoEditarComponent;
  let fixture: ComponentFixture<LacamentoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LacamentoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LacamentoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
