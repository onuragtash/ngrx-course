import { createAction, props } from '@ngrx/store';
import { Course } from './model/course';

export class CourseAction {
  public static  loadAllCourses = createAction(
    '[Courses Resolver] Load All Courses'
  );

  public static allCoursesLoaded = createAction(
    '[Load Courses Effect] All Courses Loaded',
    props<{courses: Course[]}>()
  );
}

