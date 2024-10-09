import { HttpInterceptorFn } from '@angular/common/http';

export const jWtInterceptor: HttpInterceptorFn = (req, next) => {
  const jwtToken = 'test-token';

  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${jwtToken}`
    }
  });
  return next(clonedRequest);
};
