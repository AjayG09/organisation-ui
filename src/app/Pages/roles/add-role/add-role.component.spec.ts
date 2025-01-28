import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoleComponent } from './add-role.component';
import { AppModule } from '../../../app.module';

describe('AddRoleComponent', () => {
  let component: AddRoleComponent;
  let fixture: ComponentFixture<AddRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRoleComponent, AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AddRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
