class Media {
  constructor(title, isCheckedOut, ratings){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  /* getters*/
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(checkOut) {
    this._isCheckedOut = checkOut;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut =! this._isCheckedOut;
    }

  getAverageRating() {
    const average = (accumulator, currentValue) => accumulator + currentValue;
    return (this._ratings.reduce(average) / this._ratings.length).toFixed(1);
  }

  addRating(newRating) {
    this._ratings.push(newRating);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
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

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(artist, title, songs) {
    super(title)
    this._artist = artist;
    this._songs = [];
  }

  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
}
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());
console.log(historyOfEverything);

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
console.log(speed);

const fixYourself = new CD('The Wombats', 'Fix Yourself Not The World', ['Flip Me Upside Down', 'This Car Drives All By Itself', 'If You Ever Leave, Im Coming With You']);
fixYourself.toggleCheckOutStatus();
console.log(fixYourself.isCheckedOut);
fixYourself.addRating(4);
fixYourself.addRating(5);
fixYourself.addRating(5);
console.log(fixYourself.getAverageRating())
console.log(fixYourself);
