import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeAreOneComponent } from './we-are-one.component';

describe('WeAreOneComponent', () => {
  let component: WeAreOneComponent;
  let fixture: ComponentFixture<WeAreOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeAreOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeAreOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
