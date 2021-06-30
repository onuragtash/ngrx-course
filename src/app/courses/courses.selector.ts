import { createFeatureSelector, createSelector } from '@ngrx/store';
import { courseAdapter, CourseState } from './course.reducer';

export const selectCoursesState = createFeatureSelector<CourseState>('courses');

export const { selectAll } = courseAdapter.getSelectors();

export const selectAllCourses = createSelector(selectCoursesState, selectAll);

export const selectBeginnerCourses = createSelector(
  selectAllCourses,
  courses => courses.filter(course => course.category === 'BEGINNER')
);

export const selectAdvancedCourses = createSelector(
  selectAllCourses,
  courses => courses.filter(course => course.category === 'ADVANCED')
);

export const selectPromoTotal = createSelector(
  selectAllCourses,
  courses => courses.filter(course => course.promo).length
);
