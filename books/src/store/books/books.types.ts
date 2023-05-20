export interface Books {
            "title": string,
            "subtitle": string,
            "isbn13": string,
            "price": string,
            "image": string,
            "url": string,
           'showmore':boolean
            "page": number
       
  }
  export interface Book{
    "error": string
    "title": string
    "subtitle": string
    "authors": string
    "publisher": string
    "isbn10": string
    "isbn13": string
    "pages": string
    "year": string
    "rating":string
    "desc": string
    "price": string 
    "image": string
    "url": string
    'count':number
    'pdf':PDF
    "totalPrice":string

    
  }
  export interface PDF{
              "Chapter 2": string,
              "Chapter 5": string
         
  }
  export interface BooksAll{
    "total": string,
     "page": number
    "books":Books[],
  }
  export interface State {
    cardOne:Book| null;
    card: Books[];
    searchValue: string;
    basket:Book[]
    myfavorites:Book[]
   page:number
  }