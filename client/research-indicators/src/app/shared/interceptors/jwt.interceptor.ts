import { HttpInterceptorFn } from '@angular/common/http';

export const jWtInterceptor: HttpInterceptorFn = (req, next) => {
  const jwtToken = 'test-token';

  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${jwtToken}`
    }
  });
  console.log('Request with JWT token', clonedRequest);
  return next(clonedRequest);
};
