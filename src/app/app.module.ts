import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { CquoteComponent } from './cquote/cquote.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { VoteComponent } from './vote/vote.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    CquoteComponent,
    QuoteFormComponent,
    VoteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
