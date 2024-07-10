import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddClassDialogComponent } from './add-class-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { FormsModule } from '@angular/forms';
import {
  addClass,
  getClasses,
} from '../../../../core/store/actions/class.action';
import { ClassState } from '../../../../core/store/reducers/class.reducer';
import { State } from '@ngrx/store';

describe('AddClassDialogComponent', () => {
  let component: AddClassDialogComponent;
  let fixture: ComponentFixture<AddClassDialogComponent>;
  let mockDialogRef: MatDialogRef<AddClassDialogComponent>;
  let store: MockStore<State<ClassState>>;

  beforeEach(async () => {
    mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      declarations: [AddClassDialogComponent],
      imports: [FormsModule],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        provideMockStore(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddClassDialogComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close the dialog on onClose', () => {
    component.onClose();
    expect(mockDialogRef.close).toHaveBeenCalled();
  });

  it('should validate fields correctly', () => {
    component.title = 'Test Title';
    component.description = 'Test Description';
    expect(component.validateFields()).toBeTrue();

    component.title = '';
    expect(component.validateFields()).toBeFalse();

    component.title = 'Test Title';
    component.description = '';
    expect(component.validateFields()).toBeFalse();
  });

  it('should not dispatch addClass and getClasses actions on invalid onCreate', () => {
    spyOn(store, 'dispatch');
    component.title = '';
    component.description = '';

    component.onCreate();

    expect(store.dispatch).not.toHaveBeenCalled();
    expect(mockDialogRef.close).not.toHaveBeenCalled();
  });
});
