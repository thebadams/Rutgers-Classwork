-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

-- Use programming db for the following statements --
use programming_db;

CREATE TABLE programming_languages(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id integer auto increment default 1,
  -- Create a string column called "language" --
  language varchar(30),
  -- Create an integer column called "rating" --
  rating integer,
  -- Create a boolean column called "mastered" which will automatically fill --
  -- with true when a new row is made and the value isn't otherwise defined. --
  mastered boolean default false,

  -- Set the id as this table's primary key
  primary key(id);
);

-- Create new example rows
insert into programming_languages(language, rating, mastered)
values('JavaScript', 10, false)

insert into programming_languages(language, rating, mastered)
values('Python', 8, false)
