import { produce } from "immer";

const book = {name: "Harry Potter"};

let publish = (book) => {

  return produce(book, draftBook => {

    draftBook.isPublished = true;
    
  })
  
}

let updated = publish(book);


console.log("book", book);
console.log("updated", updated);

