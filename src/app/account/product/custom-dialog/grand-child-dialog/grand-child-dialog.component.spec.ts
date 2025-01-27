import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandChildDialogComponent } from './grand-child-dialog.component';

describe('GrandChildDialogComponent', () => {
  let component: GrandChildDialogComponent;
  let fixture: ComponentFixture<GrandChildDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrandChildDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrandChildDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
