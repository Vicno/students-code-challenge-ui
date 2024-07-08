import { NgModule } from '@angular/core';
import {
  ActionReducerMap,
  createFeatureSelector,
  StoreModule,
} from '@ngrx/store';
import { studentReducer, StudentState } from '../reducers/student.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffects } from '../effects/student.effect';

export interface AppState {
  students: StudentState;
}

export const reducers: ActionReducerMap<any> = {
  students: studentReducer,
};

@NgModule({
  imports: [
    StoreModule.forFeature('store', reducers),
    EffectsModule.forFeature([StudentEffects]),
  ],
})
export class AppStateModule {}

export const selectSharedAppState = createFeatureSelector<AppState>('store');
