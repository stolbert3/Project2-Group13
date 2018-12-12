USE otj3fb44o1mpkoat;

CREATE TABLE recipes (
	recipe_id INT NOT NULL AUTO_INCREMENT,
    recipe_name VARCHAR(500),
    chef_name VARCHAR(200),
    restaurant_name VARCHAR(300),
    cuisine_type VARCHAR(100),
    course_type VARCHAR(100),
	cooking_instructions VARCHAR(3000),
    privacy BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (recipe_id)
);

CREATE TABLE allergens (
	recipe_id INT NOT NULL AUTO_INCREMENT,
	gluten BOOLEAN NOT NULL DEFAULT 0,
    shellfish BOOLEAN NOT NULL DEFAULT 0,
    peanuts BOOLEAN NOT NULL DEFAULT 0,
    nuts_other BOOLEAN NOT NULL DEFAULT 0,
    dairy BOOLEAN NOT NULL DEFAULT 0,
    eggs BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (recipe_id)
);

CREATE TABLE ingredient_list (
	recipe_id INT NOT NULL,
    ingredient_name VARCHAR(100),
    ingredient_quantity VARCHAR(50),
    ingredient_measure VARCHAR(50)
);

CREATE TABLE users (
	username VARCHAR(100),
    password VARCHAR(100),
    name VARCHAR(100),
    restaurant VARCHAR(100)
);