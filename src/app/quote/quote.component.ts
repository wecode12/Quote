import { Component, OnInit } from '@angular/core';
import { Bquote } from '../bquote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Bquote[] = [
    new Bquote(0, 'Paulo Coelho','jane','Tears are words that need to be written',new Date(2011,1,1)),
    new Bquote(0, 'Saul Bellow','jane','You never have to change anything you got up in the middle of the night to write.',new Date(2011,1,1)),
    // new Quote((2,'Buy Cookies','I have to buy cookies for the parrot'),
    // new Quote((3,'Get new Phone Case','Diana has her birthday coming up soon'),
    // new Quote((4,'Get Dog Food','Pupper likes expensive snacks'),
    // new Quote((5,'Solve math homework','Damn Math'),
    // new Quote((6,'Plot my world domination plan','Cause I am an evil overlord'),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;

  }
  deleteQuote(isComplete, index){
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete the quote`)

    if (toDelete){
      this.quotes.splice(index,1)
    }
  }
}
addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)
}
like= 0;
dislike=0;
// x:string = "-1"

likes(){
  this.like = this.like+1;
}
dislikes(){
  this.dislike = this.dislike+1;
}

  constructor() { }

  ngOnInit() {
  }

}
