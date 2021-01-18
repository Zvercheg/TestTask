import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {

  allBooks: bookArray; 
  options:string[][];
  
  constructor() { }

  ngOnInit() {
    this.options = [
      ["111-000-111","Captain's daughter",'Pushkin A.S.','San Diego','1982'],
      ["111-000-222","Kapitanning qizi",'Pushkin A.S.','Tashkent','1945'],
      ["111-000-333","Капитанская дочка",'Пушкин А.С.','Москва','1835']];
  
  }

  DeleteThisbook(books){
    //let description = document.getElementById("List");
    //description.parentNode.removeChild(description);
    for (let i =0; i < this.options.length; i++){
      if(this.options[i]==books){
        this.options.splice(i,1);
        break;
      }
    }
  }

  addBook(ISBN,bookName,authorName,publisherName,yearEdit){
    let newBook = [ISBN,bookName,authorName,publisherName,yearEdit];
    this.options.unshift(newBook);
    

    
  }

}

interface bookArray {
  ISBN: string,
  bookName: string,
  authorName: string,
  publisherName: string,
  yearEdit: string
}
