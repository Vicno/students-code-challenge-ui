import { NgModule } from '@angular/core';
import {
  ActionReducerMap,
  createFeatureSelector,
  StoreModule,
} from '@ngrx/store';
import { studentReducer, StudentState } from '../reducers/student.reducer';
import { classReducer, ClassState } from '../reducers/class.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffects } from '../effects/student.effect';
import { ClassEffects } from '../effects/class.effect';

export interface AppState {
  students: StudentState;
  classes: ClassState;
}

export const reducers: ActionReducerMap<AppState> = {
  students: studentReducer,
  classes: classReducer,
};

@NgModule({
  imports: [
    StoreModule.forFeature('store', reducers),
    EffectsModule.forFeature([StudentEffects, ClassEffects]),
  ],
})
export class AppStateModule {}

export const selectSharedAppState = createFeatureSelector<AppState>('store');
