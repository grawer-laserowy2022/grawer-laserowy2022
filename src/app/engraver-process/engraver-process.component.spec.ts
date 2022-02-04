import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngraverProcessComponent } from './engraver-process.component';

describe('EngraverProcessComponent', () => {
  let component: EngraverProcessComponent;
  let fixture: ComponentFixture<EngraverProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngraverProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngraverProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
