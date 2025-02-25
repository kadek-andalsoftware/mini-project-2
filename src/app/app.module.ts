import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxButtonModule, DxDataGridModule, DxFormModule, DxPopupModule} from 'devextreme-angular';

import { EmployeeStatusComponent } from './employee-status/employee-status.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { GraphQLModule } from './graphql.module';
import { AuthInterceptor } from './auth.interceptor';
import { DxiButtonModule, DxiColumnModule, DxiToolbarItemModule} from 'devextreme-angular/ui/nested';
import { EmployeeStatusService } from './employee-status/employee-status.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    GraphQLModule,
    DxButtonModule,
    DxiColumnModule,
    DxiButtonModule,
    DxiToolbarItemModule,
    DxPopupModule,
    DxFormModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    provideHttpClient(withInterceptorsFromDi()),
    EmployeeStatusService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
export class HttpClientModule { }
