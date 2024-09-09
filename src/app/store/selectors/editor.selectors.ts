import { createSelector } from '@ngrx/store';
import { EditorState } from '../reducers/editor.reducer';
import { AppState } from '../state.interface';

export const editorSelector = (state: AppState) => state.editor;

export const selectGeneratedMarkdown = createSelector(
  editorSelector,
  (state: EditorState) => state.generatedMarkdown
);

export const selectGeneratingMarkdown = createSelector(
  editorSelector,
  (state: EditorState) => state.generateMarkdown
);
