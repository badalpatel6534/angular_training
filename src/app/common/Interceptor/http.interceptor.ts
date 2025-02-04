import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, finalize, throwError } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Loading started...');

  const hasAuthorization = req.headers.has('Authorization');

  const modifiedReq = hasAuthorization
    ? req
    : req.clone({
        setHeaders: {
          Authorization: `Bearer dummy-token`,
        },
      });

  return next(modifiedReq).pipe(
    catchError((error) => {
      console.error('HTTP Error:', error);
      return throwError(() => error);
    }),
    finalize(() => {
      console.log('Loading finished...');
    })
  );
};
