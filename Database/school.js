// STUDENTS

Use students

db.students.insert(

  {
    name: "Véronique",

    city: "Paris"
  }

)

db.students.insert(

  {
    name: "Steeven",

    city: "Lyon"
  }

)

db.students.insert(

  {

    name: "Marc",

    city: "Marseille"
  }

)



db.students.insert(

  {

    name: "Nour",

    city: "Lyon"
  }

)



db.students.insert(

  {

    name: "Romain",

    city: "Paris"
  }

)



db.students.insert(

  {

    name: "Sophie",

    city: "Paris"
  }

)

db.students.find()




// LANGUAGES

use languages

db.languages.insert(
  { Language: "French" }
)
db.languages.insert(
  { Language: "English" }
)
db.languages.insert(
  { Language: "German" }
)
db.languages.insert(
  { Language: "Spanish" }
)
db.languages.insert(
  { Language: "Mandarin" }
)

db.languages.find()



// FAVORITES

use favorites

db.favorites.insert(
  {
    class: "Maths",
    sport: "Cricket",
    student_id: 4
  }
)
db.favorites.insert(
  {
    class: "Music",
    sport: "Hip-Hop",
    student_id: 2
  }
)
db.favorites.insert(
  {
    class: "Arts",
    sport: "Boxing",
    student_id: 6
  }
)
db.favorites.insert(
  {
    class: "Litterature",
    sport: "Tennis",
    student_id: 1
  }
)
db.favorites.insert(
  {
    class: "Computer science",
    sport: "Tennis",
    student_id: 3
  }
)
db.favorites.insert(
  {
    class: "Arts",
    sport: "Baseball",
    student_id: 5
  }
)

db.favorites.find()