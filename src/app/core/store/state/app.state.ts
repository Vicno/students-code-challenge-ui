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

export interface AppState {
  students: StudentState;
  classes: ClassState;
}

export const reducers: ActionReducerMap<any> = {
  students: studentReducer,
  classes: classReducer,
};

@NgModule({
  imports: [
    StoreModule.forFeature('store', reducers),
    EffectsModule.forFeature([StudentEffects]),
  ],
})
export class AppStateModule {}

export const selectSharedAppState = createFeatureSelector<AppState>('store');
