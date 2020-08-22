drop database if exists petmatch_db;
create database petmatch_db;
use petmatch_db;

create table account(
	id int auto_increment primary key,
    user_name varchar(30) not null,
    password varchar(30) not null
);

create table species(
	id int auto_increment primary key,
    name varchar(20) not null
);

INSERT INTO species (name)
VALUES ("dog"),("cat"),("reptile"),("bug"),("bird"),("aquatic"),("small mammal"),("large mammal");

create table profile(
	id int auto_increment primary key,
	sex varchar(6) not null,
    seeking varchar(20) not null,
    species_id int not null,
    constraint `fk_species_id`
    foreign key(species_id)
    references species(id) on update cascade on delete restrict,
    account_id int not null,
    constraint `fk_account_id`
    foreign key (account_id)
    references account(id) on update cascade on delete restrict
);