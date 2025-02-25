import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const customerId = '_re8ubarqajowjn7bkkztqtpqac';
    const signature = 'HX1dmb7S4XYEofacJP2NiGJ5pmrHRAcSrpirgQLZf/8=';
    const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzSVNIcmNJdTlqTjFXWWRfUEV2RVQxcGVFeWFSY3Z2REYtbE1PSkM0U0pNIn0.eyJleHAiOjE3NDA1MzM0MTAsImlhdCI6MTc0MDQ0NzAxMCwianRpIjoiZDhhMTQ5YWItNWYyNS00NWExLWI2M2YtMzExODI0NmUyNjk5IiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5kZXYuYW5kYWxzb2Z0d2FyZS5jb20vYXV0aC9yZWFsbXMvQUlNIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImZmZmMxMTUxLWE4YjEtNDU1Ni04NWVkLTczZjU2Y2VlZWQ2MyIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFpbWFwcHMiLCJzZXNzaW9uX3N0YXRlIjoiNjQ3NzJjODItNWU5MC00MWE0LTg4ZGYtYWU2ODM3NTA2ZmRhIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiYWRtaW4gdGlrYSBzYWlzIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiMjg5ZGJlMGYtNTNlNy00MjQzLTk3MDktNDRlNWFkNjQ1ZmIzIiwiZ2l2ZW5fbmFtZSI6ImFkbWluIHRpa2Egc2FpcyIsImVtYWlsIjoidGlrYXNhaXNAbWFpbGluYXRvci5jb20ifQ.dmFTqsKVncvVyJT0i6-Gdz1d0j62Cogbs6wgOmRiaaDKYhmKTzUa52hA4kdLSujG-ve9Rv1xC8k3Tl8u92PbNSU04FqeGn1Kbw4DlfEgMON1T6p23HyTdVqke5SfFnkenwEkl7BLfo9lqsszvFQ4tUeH2FbUKCWqr2blwWaNCzeHpv95wWM5gV14nIYfKOcDlB36O05hr5At2oxngyFdclAZAP8EsIbtR5VrYpknvm6PoD64Xd5cBwdZxQ9gE2Y4rJUOexv6N_zXfWH1n1IkzYQFZHtp18q3v-Wus8riUJrsTP8oyq0eb1UmpGaogDyYo6fv1B7Yp531olnMOdV0ug';

    const cloned = req.clone({
      setHeaders: {
        CustomerId: customerId,
        Signature: signature,
        Authorization: `bearer ${token}`,
      },
    });

    return next.handle(cloned);
  }
}
