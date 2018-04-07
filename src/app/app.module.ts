import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// imported the angularfire2 module
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyDVQ5RsaXgMzmoYnh_EfIzXSt9w2Xn48pI',
  authDomain: 'aman-fa207.firebaseapp.com',
  databaseURL: 'https://aman-fa207.firebaseio.com',
  storageBucket: '',
  projectId: "aman-fa207",
  messagingSenderId: '607987289045'
};

//Auth guard
import { AuthGuard } from './auth.service';

//route for the controller
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }



