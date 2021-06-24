import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { finalize, first, tap } from 'rxjs/operators';
import { CourseAction } from './course.action';
import { Injectable } from '@angular/core';

@Injectable()
export class CoursesResolver implements Resolve<any> {

  loading = false;

  constructor(private store: Store<AppState>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return this.store
               .pipe(
                 tap(() => {
                   if (!this.loading) {
                     this.loading = true;
                     this.store.dispatch(CourseAction.loadAllCourses());
                   }
                 }),
                 first(),
                 finalize(() => this.loading = false)
               );

  }

}
