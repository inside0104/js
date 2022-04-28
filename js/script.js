"use script";
const numberOfFilms = +prompt('Сколько фильмов вы посмотрели ?','');
const personalMovieDB = {
    coint:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false

};

const a =prompt('Один из последних просмотренных фильмов ?',''),
      b =prompt('На сколько о цените его  ?',''),
      c =prompt('Один из последних просмотренных фильмов ?',''),
      d =prompt('На сколько о цените его  ?','');

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;
console.log(personalMovieDB);