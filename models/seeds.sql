INSERT INTO recipes (recipe_name, chef_name, restaurant_name)
	VALUES ("test recipe", "sydney", "georgia tech"),
		("test recipe 2", "Mike", "georgia tech");
        
INSERT INTO allergens (recipe_id, gluten, shellfish, peanuts, nuts_other, dairy, eggs)
	VALUES (1, true, true, false, false, true, true),
        (2, false, false, true, true, false, false);