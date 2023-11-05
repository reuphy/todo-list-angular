import { catchError, startWith } from 'rxjs/operators';
import { Observable, map, of } from "rxjs";

export function withRequestState<T>(source: Observable<T>): Observable<{ isLoading: boolean, value?: T, error?: any }> {
    return source.pipe(
      map((value) => ({ isLoading: false, value })),
      catchError(error => of({ isLoading: false, error })),
      startWith({ isLoading: true })
    );
  }