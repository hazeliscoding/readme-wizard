import { ActionReducerMap } from '@ngrx/store';
import { editorReducer } from './editor.reducer';
import { AppState } from '../state.interface';

export const reducers: ActionReducerMap<AppState> = {
  editor: editorReducer,
};
