import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskPageComponent } from './pages/task-page/task-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TableTaskComponent } from './components/table-task.component';

@NgModule({
  imports: [BrowserModule, FormsModule,
    ReactiveFormsModule, AppRoutingModule],
  declarations: [AppComponent, TaskPageComponent, HomePageComponent, LoginPageComponent, TableTaskComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
