import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxButtonModule, DxDataGridModule} from 'devextreme-angular';
import { EmployeeStatusComponent } from './employee-status/employee-status.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { GraphQLModule } from './graphql.module';
import { AuthInterceptor } from './auth.interceptor';
import { DxiButtonModule, DxiColumnModule } from 'devextreme-angular/ui/nested';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    GraphQLModule,
    DxButtonModule,
    DxiColumnModule,
    DxiButtonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
export class HttpClientModule { }
