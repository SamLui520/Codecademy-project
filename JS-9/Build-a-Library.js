class Media{
    constructor(title){
       this._title = title;
       this._ratings = [3, 3, 3];
       this._isCheckedOut = false;
    }
     get title(){
      return this._title;
    }
     get ratings(){
      return this._ratings;
    }
     get isCheckedOut(){
      return this._isCheckedOut;
    }
     set isCheckedOut(setisCheckedOut){
      return this._isCheckedOut = setisCheckedOut;
     }
     toggleCheckOutStatus(){
       this._isCheckedOut = !this._isCheckedOut;
     }
     getAverageRating(){
       let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
       return ratingsSum;
     }
     addRating(inputValue) {
       if(inputValue < 1 || inputValue > 5){
         console.log('please input value between 1 and 5')
       }else{
         this._ratings.push(inputValue);
       }
     }
   }
   
   class Book extends Media{
     constructor(author, title, pages){
       super();
       this._author = author;
       this._pages = pages;
    }
     get author() {
       return this._author;
    }
     get pages() {
       return this._pages;
    }
   }
   
   class Movie extends Media{
     constructor(director, title , runtime, movieCast){
       super();
       this._director = director;
       this._movieCast = movieCast;
       this._runtime = runtime;
    }
     get director() {
       return this._director;
    }
      get runtime() {
       return this._runtime;
    }
      get movieCast() {
       return this._movieCast;
    }
   }
   
   class CD extends Media{
     constructor(author, title , runtime){
       super();
       this._author = author;
       this._runtime = runtime;
       this._songTitles = ["a", "b" ,"c"];
    }
     get author() {
       return this._author;
    }
     get songTitles() {
       return this._songTitles;
    }
     addsongTitles(inputValue) {
       this._songTitles.push(inputValue);
     }
     shuffle(){
       let count = Math.floor(Math.random()* this._songTitles.length);
       return this._songTitles[count];  
     }
     get runtime() {
       return this._runtime;
    }
   }
   
   const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything',544);
   historyOfEverything.toggleCheckOutStatus();
   console.log(historyOfEverything.isCheckedOut);
   historyOfEverything.addRating(4);
   historyOfEverything.addRating(5);
   historyOfEverything.addRating(5);
   console.log(historyOfEverything.getAverageRating());
   const speed = new Movie('Jan de Bont','Speed',116,9800000);
   speed.toggleCheckOutStatus();
   console.log(speed.isCheckedOut);
   console.log(speed.getAverageRating());
   console.log(historyOfEverything.pages + " pages");
   console.log(speed.runtime + " mins");
   console.log('$' + speed.movieCast);
   const goodCD = new CD('Sam','SamCD', 544);
   console.log(goodCD.shuffle());
   