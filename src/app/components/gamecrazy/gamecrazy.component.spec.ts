import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamecrazyComponent } from './gamecrazy.component';

describe('GamecrazyComponent', () => {
  let component: GamecrazyComponent;
  let fixture: ComponentFixture<GamecrazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamecrazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamecrazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
