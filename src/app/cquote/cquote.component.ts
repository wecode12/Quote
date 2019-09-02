import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
import { Bquote } from '../bquote';

@Component({
  selector: 'app-cquote',
  templateUrl: './cquote.component.html',
  styleUrls: ['./cquote.component.css']
})
export class CquoteComponent implements OnInit {
@Input() quote:Bquote
@Output() isComplete = new EventEmitter<boolean>();
quoteDelete(complete:boolean){
  this.isComplete.emit(complete);
}

  constructor() { }

  ngOnInit() {
  }

}
