import { Course } from './model/course';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { CourseAction } from './course.action';

export interface CourseState extends EntityState<Course> {
}

export const adapter = createEntityAdapter<Course>();

export const initialCoursesState = adapter.getInitialState();

export const coursesReducer = createReducer(
  initialCoursesState,
  on(CourseAction.allCoursesLoaded,
     (state, action) =>
       adapter.addAll(action.courses, state)
  )
);
