USE otj3fb44o1mpkoat;

CREATE TABLE recipes (
	id INT NOT NULL AUTO_INCREMENT,
    recipe_name VARCHAR(500),
    chef_name VARCHAR(200),
    restaurant_name VARCHAR(300),
    cuisine_type VARCHAR(100),
    course_type VARCHAR(100),
	cooking_instructions VARCHAR(3000),
    PRIMARY KEY (id)
);

CREATE TABLE allergens (
	recipe_id INT NOT NULL,
	gluten BOOLEAN NOT NULL DEFAULT 0,
    shellfish BOOLEAN NOT NULL DEFAULT 0,
    peanuts BOOLEAN NOT NULL DEFAULT 0,
    nuts_other BOOLEAN NOT NULL DEFAULT 0,
    dairy BOOLEAN NOT NULL DEFAULT 0,
    eggs BOOLEAN NOT NULL DEFAULT 0
);

CREATE TABLE ingredient_info (
	recipe_id INT NOT NULL,
	ingredient_name VARCHAR(100),
    ingredient_quantity VARCHAR(50)
);

CREATE TABLE ingredient_list (
	recipes_id INT NOT NULL,
    ingredient_name VARCHAR(100)
);

SELECT r.*, ai.*
FROM recipes r
INNER JOIN allergen_list al
ON al.recipes_id = r.id
INNER JOIN allergen_info ai
ON ai.recipe_id = al.recipes_id