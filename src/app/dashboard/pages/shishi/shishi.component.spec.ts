import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShishiComponent } from './shishi.component';

describe('ShishiComponent', () => {
  let component: ShishiComponent;
  let fixture: ComponentFixture<ShishiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShishiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShishiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
