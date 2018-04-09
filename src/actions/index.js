export function selectBook(book){
  //selectBook is an ActionCreater, it needs to return an action,
  //an object with the type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}