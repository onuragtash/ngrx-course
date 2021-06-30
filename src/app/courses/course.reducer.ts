import { compareCourses, Course } from './model/course';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { CourseAction } from './course.action';

export interface CourseState extends EntityState<Course> {
}

export const courseAdapter = createEntityAdapter<Course>({
                                                           sortComparer: compareCourses
                                                         });

export const initialCoursesState = courseAdapter.getInitialState();

export const coursesReducer = createReducer(
  initialCoursesState,
  on(CourseAction.allCoursesLoaded,
     (state, action) =>
       courseAdapter.addAll(action.courses, state)
  )
);
