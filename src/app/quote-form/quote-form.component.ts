import { Component, OnInit, Output, EventEmitter ,} from '@angular/core';
import { Bquote } from '../bquote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Bquote(0,"","","",new Date());
@Output() addQuote = new EventEmitter<Bquote>();

  submitQuote(){
this.addQuote.emit(this.newQuote);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
