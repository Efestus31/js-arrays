const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse(); 
console.log(reversedTeachers); //luca, Luca, Lewis, Carlo, Phil, Fabio, Nathan

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = teachers.filter(teacher => teacher.length >= 5);
console.log(longNames); // [ 'Nathan', 'Ed', 'Fabio', 'Phil', 'Carlo', 'Lewis', 'Luca' ]

// 3. Rimuovi 'Ed' dall'array teachers
const filtered_teachers = teachers.filter(teacher => teacher !== 'Ed');
console.log(filtered_teachers); // [ 'Nathan', 'Fabio', 'Phil', 'Carlo', 'Lewis', 'Luca' ]