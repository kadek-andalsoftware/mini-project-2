import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const customerId = '_re8ubarqajowjn7bkkztqtpqac';
    const signature = 'HX1dmb7S4XYEofacJP2NiGJ5pmrHRAcSrpirgQLZf/8=';
    const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzSVNIcmNJdTlqTjFXWWRfUEV2RVQxcGVFeWFSY3Z2REYtbE1PSkM0U0pNIn0.eyJleHAiOjE3NDAzNzg2NjYsImlhdCI6MTc0MDI5MjI2NiwianRpIjoiMzljOWE0MzUtMGE2OS00ZmJlLWI1YjUtOTJlZWRkY2JmMzA0IiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5kZXYuYW5kYWxzb2Z0d2FyZS5jb20vYXV0aC9yZWFsbXMvQUlNIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImZmZmMxMTUxLWE4YjEtNDU1Ni04NWVkLTczZjU2Y2VlZWQ2MyIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFpbWFwcHMiLCJzZXNzaW9uX3N0YXRlIjoiNmJhODMwMzQtM2IyNS00NTcyLThhZmEtODA4Y2EyYzFiYzBhIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiYWRtaW4gdGlrYSBzYWlzIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiMjg5ZGJlMGYtNTNlNy00MjQzLTk3MDktNDRlNWFkNjQ1ZmIzIiwiZ2l2ZW5fbmFtZSI6ImFkbWluIHRpa2Egc2FpcyIsImVtYWlsIjoidGlrYXNhaXNAbWFpbGluYXRvci5jb20ifQ.jDkZPFfT1rWyd3nooKLl8_CB1bsy3jbk2SJkKbAmIfrtCKQoLcG0kWfkpHD5w03OcBQ-RlWquF2ZcXy7lfqe2f1GUQs8CJl0xJUgjouymUBtZ6uqxoRqBNHLNMzm0xZFsrHdXtPw5KKRNC2OUW1E3DJI7kZVsjtip4TYbv73O-u_wMpBXYvMyI6oJmOAZ_w2AT06AYrFsPjfQsqihqGxsOn2Ev5DHecDU8Xjr2WIeJx7eAyrTVaIiE5sV5FbPuusY-BGumlRG7OvzPRM3xUXEdpJB5ZnIuBkTeaVuUdkPRyVQOIsNxpeJEz12p-mt0E6SJ4INiGDJ0fyp1CfDD-Jfg';

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
