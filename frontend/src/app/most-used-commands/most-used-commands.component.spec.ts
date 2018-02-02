import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostUsedCommandsComponent } from './most-used-commands.component';

describe('MostUsedCommandsComponent', () => {
  let component: MostUsedCommandsComponent;
  let fixture: ComponentFixture<MostUsedCommandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostUsedCommandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostUsedCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
