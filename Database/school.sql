CREATE TABLE IF NOT EXISTS students (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(30),
  city VARCHAR(30)
);




INSERT INTO students(name, city)
VALUES
("Veronique", "Paris"),
("Steven", "Lyon"),
("Marc", "Marseille"),
("Nour", "Lyon"),
("Romain", "Paris"),
("Sophie", "Paris")




CREATE TABLE IF NOT EXISTS languages(
  id INT unsigned PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(30)
)




INSERT INTO languages(name)
values
("French"),
("English"),
("German"),
("Spanish"),
("Mandarin")




CREATE TABLE IF NOT EXISTS favorites(
	id INT NOT NULL UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  	class VARCHAR(30),
  	sport VARCHAR(30),
  	student_id VARCHAR(8)
)




INSERT INTO favorites(class, sport, student_i)
VALUES
("Maths", "Criquet"),
("Music", "Hip-hop"),
("Arts", "Boxing"),
("Littérature", "Tennis"),
("Computer science", "Tennis"),
("Art", "Baseball")