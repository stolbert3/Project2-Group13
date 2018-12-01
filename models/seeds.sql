INSERT INTO recipes (recipe_name, chef_name, restaurant_name)
	VALUES ("test recipe", "sydney", "georgia tech"),
		("test recipe 2", "Mike", "georgia tech");
        
INSERT INTO allergen_info (recipe_id, allergen_name, has_allergen)
	VALUES (1, "gluten", true),
		(1, "dairy", false),
        (1, "nuts", true),
        (2, "gluten", false),
        (2, "dairy", false),
        (2, "nuts", true);