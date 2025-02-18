import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const customerId = '_re8ubarqajowjn7bkkztqtpqac';  
    const signature = 'HX1dmb7S4XYEofacJP2NiGJ5pmrHRAcSrpirgQLZf/8=';  
    const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzSVNIcmNJdTlqTjFXWWRfUEV2RVQxcGVFeWFSY3Z2REYtbE1PSkM0U0pNIn0.eyJleHAiOjE3Mzk5NjExNDgsImlhdCI6MTczOTg3NDc0OCwianRpIjoiZWRkNzg5NjItZmY3ZC00NjI2LWIyZmItYzJiODFlMjVmYmZlIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5kZXYuYW5kYWxzb2Z0d2FyZS5jb20vYXV0aC9yZWFsbXMvQUlNIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImZmZmMxMTUxLWE4YjEtNDU1Ni04NWVkLTczZjU2Y2VlZWQ2MyIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFpbWFwcHMiLCJzZXNzaW9uX3N0YXRlIjoiMTA3ZDE0OTctOTM1NS00OGVlLTg3ZDktZjQ5YzllYzMwMjgwIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiYWRtaW4gdGlrYSBzYWlzIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiMjg5ZGJlMGYtNTNlNy00MjQzLTk3MDktNDRlNWFkNjQ1ZmIzIiwiZ2l2ZW5fbmFtZSI6ImFkbWluIHRpa2Egc2FpcyIsImVtYWlsIjoidGlrYXNhaXNAbWFpbGluYXRvci5jb20ifQ.I9RsNCLB1ajXOEH4MWE2Rz90DsKdpEiMmsIp0qgLApMXI6OmZJ8Sj_UiwHX2c-fo5xZYcnwLjRQSd2tAsG9SDrdaIb_l5HxADQo0kF3i0ApGD5khtgymWguPLHPHn06CnrOEuU552cciWcl4xZtsdOYfZ32utRh_6LwaqhZSzXg_jiJJ_eKr2MWZeRc4ydZ-S-3SHRfl9LN0txIGXgCYKx7DGey8Fkhs_hqta4hGs_Pf_RbfOWvB1jrWRyIVbLeBVAvjn9TCYnpnhU8p-6bg9hHKZ5vY36rwQm693ktavZrnxymkxmmWBLjQXNwU5ZSq1d1F_1skb1tLCay4QbItfw';

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
