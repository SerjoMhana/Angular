import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDasboerdComponent } from './admin-dasboerd.component';

describe('AdminDasboerdComponent', () => {
  let component: AdminDasboerdComponent;
  let fixture: ComponentFixture<AdminDasboerdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDasboerdComponent]
    });
    fixture = TestBed.createComponent(AdminDasboerdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
