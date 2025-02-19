import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const customerId = '_re8ubarqajowjn7bkkztqtpqac';
    const signature = 'HX1dmb7S4XYEofacJP2NiGJ5pmrHRAcSrpirgQLZf/8=';
    const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzSVNIcmNJdTlqTjFXWWRfUEV2RVQxcGVFeWFSY3Z2REYtbE1PSkM0U0pNIn0.eyJleHAiOjE3NDAwNDAzOTQsImlhdCI6MTczOTk1Mzk5NCwianRpIjoiOGU2OWY0MmUtOTViYy00Yzc2LTk0ODEtZmExZjZhOTVhYWMwIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5kZXYuYW5kYWxzb2Z0d2FyZS5jb20vYXV0aC9yZWFsbXMvQUlNIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImZmZmMxMTUxLWE4YjEtNDU1Ni04NWVkLTczZjU2Y2VlZWQ2MyIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFpbWFwcHMiLCJzZXNzaW9uX3N0YXRlIjoiYWMxNjcxN2UtMDNlNi00Yjc3LWJkMDktNmNjODhkMjJiMTQ5IiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiYWRtaW4gdGlrYSBzYWlzIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiMjg5ZGJlMGYtNTNlNy00MjQzLTk3MDktNDRlNWFkNjQ1ZmIzIiwiZ2l2ZW5fbmFtZSI6ImFkbWluIHRpa2Egc2FpcyIsImVtYWlsIjoidGlrYXNhaXNAbWFpbGluYXRvci5jb20ifQ.HlVGYtX-LT4quZORLCA_SMIetkYo1sHNQNSfSov_ep0oz2uR7FIGGg-_lSJ53ALfNP4zT_YPMVJZpYTOZ1g29lB8n8RovU-mVphZc21ZVli8bpzVAZbVlZObztfWn-f52L7q1npa7HnfytQ7EhoCOEcqUuiJfoI7G6i4LlM4LsV9YbD6_V8lYDNwNzuloiNdi3z7OvcBQADHi0MsP_x_5-ACu60j_vTV4FZVjK97Y4UOBD0zwqAe3zqMDy5MNptUwEHA6Oj_NC4V3Ucu1Fy2j-sves6uzBhpLkrV5GWVD0OQGlptbWD1bC6azPBsyEOkqTh7qdGZLzONwh4KVBwv9g';

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
