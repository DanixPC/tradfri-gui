import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBoxHelperComponent } from './message-box-helper.component';

describe('MessageBoxHelperComponent', () => {
  let component: MessageBoxHelperComponent;
  let fixture: ComponentFixture<MessageBoxHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageBoxHelperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBoxHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
