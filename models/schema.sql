USE otj3fb44o1mpkoat;

CREATE TABLE recipes (
	id INT NOT NULL AUTO_INCREMENT,
    recipe_name VARCHAR(500),
    chef_name VARCHAR(200),
    restaurant_name VARCHAR(500),
    cuisine_type VARCHAR(500),
    course_type VARCHAR(500),
	cooking_instructions VARCHAR(3000),
    PRIMARY KEY (id)
);

CREATE TABLE allergen_info (
	recipe_id INT NOT NULL,
	allergen_name VARCHAR(100),
    has_allergen BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (recipe_id)
);

CREATE TABLE allergen_list (
	recipes_id INT NOT NULL,
    allergen_name VARCHAR(1000),
    PRIMARY KEY (recipes_id, allergen_name)
);

CREATE TABLE ingredient_info (
	recipe_id INT NOT NULL,
	ingredient_name VARCHAR(100),
    ingredient_quantity VARCHAR(100),
    PRIMARY KEY (recipe_id)
);

CREATE TABLE ingredient_list (
	recipes_id INT NOT NULL,
    ingredient_name VARCHAR(2000),
    PRIMARY KEY (recipes_id, ingredient_name)
);