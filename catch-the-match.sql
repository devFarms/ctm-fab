DROP DATABASE IF EXISTS catch_the_match_db;
CREATE DATABASE catch_the_match_db;

USE catch_the_match_db;

CREATE TABLE user_tbls(
		user_id INT NOT NULL AUTO_INCREMENT
	,	user_last_name VARCHAR(100) NOT NULL
	,	user_first_name VARCHAR(100) NOT NULL
	,	user_email VARCHAR(100) NOT NULL
	,	PRIMARY KEY (user_id)
	);

CREATE TABLE my_sports_tbls(
		my_sports_id INT NOT NULL AUTO_INCREMENT
	,	my_sports_api_id VARCHAR(100)
	,	my_sports_user_id INT
	,	my_sports_type VARCHAR(100)
	,	PRIMARY KEY (my_sports_id)
	,	FOREIGN KEY (my_sports_user_id) REFERENCES user_tbls(user_id)
);

/* Create User: Irfan Ahmed */
INSERT INTO user_tbls (
		user_last_name
	,	user_first_name
	,	user_email
	) 
VALUES (
		"Ahmed"
	,	"Irfan"
	,	"irfan@ahmed.com"
);

/* Create User: Sean Hagan */
INSERT INTO user_tbls (
		user_last_name
	,	user_first_name
	,	user_email
	)
VALUES (
		"Hagan"
	,	"Sean"
	,	"sean@hagan.com"
);

/* Create User: Jatin Makhijani */
INSERT INTO user_tbls (
		user_last_name
	,	user_first_name
	,	user_email
	)
VALUES (
		"Makhijani"
	,	"Jatin"
	,	"jatin@makhijani.com"
);

/* Create User: Alex Green */
INSERT INTO user_tbls (
		user_last_name
	,	user_first_name
	,	user_email
	)
VALUES (
		"Green"
	,	"Alex"
	,	"alex@devfarms.com"
);


/* Irfan's Teams */
/* Wizards */
INSERT INTO my_sports_tbls (
		my_sports_api_id
	, 	my_sports_user_id
	, 	my_sports_type
	)
VALUES (
		"583ec8d4-fb46-11e1-82cb-f4ce4684ea4c"
	, 	1
	,	"NBA"
);

/* Hornets */
INSERT INTO my_sports_tbls (
		my_sports_api_id
	, 	my_sports_user_id
	, 	my_sports_type
	)
VALUES (
		"583ec97e-fb46-11e1-82cb-f4ce4684ea4c"
	, 	1
	,	"NBA"
);

/* Hawks */
INSERT INTO my_sports_tbls (
		my_sports_api_id
	, 	my_sports_user_id
	, 	my_sports_type
	)
VALUES (
		"583ecb8f-fb46-11e1-82cb-f4ce4684ea4c"
	, 	1
	,	"NBA"
);

/* Heat */
INSERT INTO my_sports_tbls (
		my_sports_api_id
	, 	my_sports_user_id
	, 	my_sports_type
	)
VALUES (
		"583ecea6-fb46-11e1-82cb-f4ce4684ea4c"
	, 	1
	,	"NBA"
);

/* Magic */
INSERT INTO my_sports_tbls (
		my_sports_api_id
	, 	my_sports_user_id
	, 	my_sports_type
	)
VALUES (
		"583ed157-fb46-11e1-82cb-f4ce4684ea4c"
	, 	1
	,	"NBA"
);

/* Sean's Teams */
/* Knicks */
INSERT INTO my_sports_tbls (
		my_sports_api_id
	, 	my_sports_user_id
	, 	my_sports_type
	)
VALUES (
		"583ec70e-fb46-11e1-82cb-f4ce4684ea4c"
	, 	2
	,	"NBA"
);

/* 76ers */ 
INSERT INTO my_sports_tbls (
		my_sports_api_id
	, 	my_sports_user_id
	, 	my_sports_type
	)
VALUES (
		"583ec87d-fb46-11e1-82cb-f4ce4684ea4c"
	, 	2
	,	"NBA"
);

/* Nets */
INSERT INTO my_sports_tbls (
		my_sports_api_id
	, 	my_sports_user_id
	, 	my_sports_type
	)
VALUES (
		"583ec9d6-fb46-11e1-82cb-f4ce4684ea4c"
	, 	2
	,	"NBA"
);

/* Celtics */
INSERT INTO my_sports_tbls (
		my_sports_api_id
	, 	my_sports_user_id
	, 	my_sports_type
	)
VALUES (
		"583eccfa-fb46-11e1-82cb-f4ce4684ea4c"
	, 	2
	,	"NBA"
);

/* Raptors */
INSERT INTO my_sports_tbls (
		my_sports_api_id
	, 	my_sports_user_id
	, 	my_sports_type
	)
VALUES (
		"583ecda6-fb46-11e1-82cb-f4ce4684ea4c"
	, 	2
	,	"NBA"
);

/* Jaitan's Teams */
/* Grizzlies */
INSERT INTO my_sports_tbls (
		my_sports_api_id
	, 	my_sports_user_id
	, 	my_sports_type
	)
VALUES (
		"583eca88-fb46-11e1-82cb-f4ce4684ea4c"
	, 	3
	,	"NBA"
);

/* Rockets */
INSERT INTO my_sports_tbls (
		my_sports_api_id
	, 	my_sports_user_id
	, 	my_sports_type
	)
VALUES (
		"583ecb3a-fb46-11e1-82cb-f4ce4684ea4c"
	, 	3
	,	"NBA"
);

/* Pelicans */
INSERT INTO my_sports_tbls (
		my_sports_api_id
	, 	my_sports_user_id
	, 	my_sports_type
	)
VALUES (
		"583ecc9a-fb46-11e1-82cb-f4ce4684ea4c"
	, 	3
	,	"NBA"
);

/* Spurs */
INSERT INTO my_sports_tbls (
		my_sports_api_id
	, 	my_sports_user_id
	, 	my_sports_type
	)
VALUES (
		"583ecd4f-fb46-11e1-82cb-f4ce4684ea4c"
	, 	3
	,	"NBA"
);

/* Mavericks */
INSERT INTO my_sports_tbls (
		my_sports_api_id
	, 	my_sports_user_id
	, 	my_sports_type
	)
VALUES (
		"583ecf50-fb46-11e1-82cb-f4ce4684ea4c"
	, 	3
	,	"NBA"
);

/* Alex's Teams */
/* Warriors */
INSERT INTO my_sports_tbls (
		my_sports_api_id
	, 	my_sports_user_id
	, 	my_sports_type
	)
VALUES (
		"583ec825-fb46-11e1-82cb-f4ce4684ea4c"
	, 	4
	,	"NBA"
);

/* Lakers */
INSERT INTO my_sports_tbls (
		my_sports_api_id
	, 	my_sports_user_id
	, 	my_sports_type
	)
VALUES (
		"583ecae2-fb46-11e1-82cb-f4ce4684ea4c"
	, 	4
	,	"NBA"
);

/* Clippers */
INSERT INTO my_sports_tbls (
		my_sports_api_id
	, 	my_sports_user_id
	, 	my_sports_type
	)
VALUES (
		"583ecdfb-fb46-11e1-82cb-f4ce4684ea4c"
	, 	4
	,	"NBA"
);

/* Suns */
INSERT INTO my_sports_tbls (
		my_sports_api_id
	, 	my_sports_user_id
	, 	my_sports_type
	)
VALUES (
		"583ecfa8-fb46-11e1-82cb-f4ce4684ea4c"
	, 	4
	,	"NBA"
);

/* Kings */
INSERT INTO my_sports_tbls (
		my_sports_api_id
	, 	my_sports_user_id
	, 	my_sports_type
	)
VALUES (
		"583ed0ac-fb46-11e1-82cb-f4ce4684ea4c"
	, 	4
	,	"NBA"
);