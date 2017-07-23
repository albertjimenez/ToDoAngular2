import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here
import {Routes, RouterModule} from '@angular/router';


import {AppComponent} from './app.component';
import {TodoComponent} from './todo/todo.component';

const routes: Routes = [
  {path: ':status', component: TodoComponent},
  {path: '**', redirectTo: '/all'},
]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    RouterModule.forRoot(routes)

  ],
  declarations: [
    AppComponent,
    TodoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
