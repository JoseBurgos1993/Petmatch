use llrixdzsjqu2hlp1;

create table species(
	id int auto_increment primary key,
    name varchar(20) not null
);

INSERT INTO species (name)
VALUES ("dog"),("cat"),("reptile"),("bug"),("bird"),("aquatic"),("small mammal"),("large mammal");

create table profile(
	id int auto_increment primary key,
    name varchar(40) not null,
    age int not null,
	sex varchar(6) not null,
    species_id int not null,
    constraint `fk_species_id`
    foreign key(species_id)
    references species(id) on update cascade on delete restrict,
    users_id int not null,
    constraint `fk_users_id`
    foreign key (users_id)
    references Users(id) on update cascade on delete restrict
);

create table messages(
    id int auto_increment primary key,
    message varchar(255),
    sender_id int not null,
    constraint `fk_sender_id`
    foreign key (sender_id)
    references Users(id) on update cascade on delete restrict,
    receiver_id int not null,
    constraint `fk_sender_id`
    foreign key (receiver_id)
    references Users(id) on update cascade on delete restrict,
);