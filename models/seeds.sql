INSERT INTO recipes (recipe_name, chef_name, restaurant_name, cuisine_type, course_type, cooking_instructions, privacy)
	VALUES("Larb", "Chef A", "Restaurant A", "Thai", "Main", "Dressing: Stir all ingredients in a small bowl to blend; set dressing aside. Chicken: Combine first 8 ingredients in a food processor. Drizzle 1 Tbsp. oil over and pulse until chicken is very finely chopped. Heat remaining 2 Tbsp. oil in a large heavy nonstick skillet over medium–high heat. Add chicken mixture and sauté, breaking up into small pieces with the back of a spoon, until chicken is starting to turn golden brown and is cooked through, about 6 minutes.
               Place 2 lettuce leaves on each plate. Top leaves with chicken mixture, dividing evenly. Garnish with cilantro and spoon reserved dressing over.", false),
	     
	     ("Thai Green Mango Salad", "Chef A", "Restaurant A", "Thai", "Appetizer", "Mix mangoes, red onion, bell pepper, mint, cilantro, and chile pepper together in a bowl. Mix fish sauce and sugar together in a bowl until dissolved. Pour dressing over salad. Refrigerate at least 2 hours.Top with peanuts and lime juice just before serving.", false),

	     ("Carbonara", "Chef B", "Restaurant B", "Italian", "Main", "In a large pot of salted boiling water, cook spaghetti according to package directions until al dente. Drain, reserving 1 cup pasta water.
	     In a medium bowl, whisk eggs and Parmesan until combined. 
	     Meanwhile, in a large skillet over medium heat, cook bacon until crispy, about 8 minutes. Reserve fat in skillet and transfer slices to a paper towel-lined plate to drain. 
	     To the same skillet, add garlic and cook until fragrant, about 1 minutes. Add cooked spaghetti and toss until fully coated in bacon fat. Remove from heat. Pour over egg and cheese mixture and stir vigorously until creamy (be careful not to scramble eggs). Add pasta water a couple tablespoons a time to loosen sauce if necessary. 
	     Season generously with salt and pepper and stir in cooked bacon.
	     Drizzle with olive oil and garnish with flaky sea salt, Parmesan, and parsley before serving.", false),

	      ("Chocolate Mousse", "Chef C", "Restaurant C", "French", "Dessert", "Simply pour water into a saucepan (which will be improved from the gastronomic point of view if it is flavored with orange juice, for example, or cassis puree). Then, over medium-low heat, whisk in the chocolate. The result is a homogenous sauce. Put the saucepan in a bowl partly filled with ice cubes (or pour into another bowl over the ice -- it will chill faster), then whisk the chocolate sauce, either manually with a whisk or with an electric mixer (if using an electric mixer, watch closely -- it will thicken faster). Whisking creates large air bubbles in the sauce, which steadily thickens. After a while strands of chocolate form inside the loops of the whisk. Pour or spoon immediately into ramekins, small bowls or jars and let set.", false);

INSERT INTO allergens (gluten, shellfish, peanuts, nuts_other, dairy, eggs)
	VALUES(false, true, true, false, false, false),
		(true, false, false, false, true, true),
		(false, false, false, false, true, false);

INSERT INTO ingredient_list (recipe_id, ingredient_name, ingredient_quantity, ingredient_measure)
	VALUES(1, "lime", "1/3", "cup"),
				(1, "fish sauce", "2", "tablespoons"),
			    (1, "white sugar", "2", "tablespoons"),
			    (1, "boneless chicken breasts", "1 1/2", "pounds"),
			    (1, "shallots, chopped", "1/2", "cup"),
			    (1, "lemongrass, thinly sliced", "2", "tablespoons"),
			    (1, "thai chili, thinly sliced", "2", "tablespoons"),
			    (1, "garlic clove", "2", "tablespoons"),
 			    (1, "kosher salt", "1", "teaspoon"),
 			    (1, "canola oil", "3", "tablespoons"),
			    (1, "iceberg lettuce", "1/2", "cup"),
 			    (1, "cilantro, chopped", "1/4", "cup"),

			    (2, "green mangoes, peeled, chopped", "2", "cups"),
			    (2, "red onion, sliced", "1/4", "cup"),
			    (2, "red pepper, sliced", "1/4", "cup"),
			    (2, "mint, chopped", "1/4", "cup"),
			    (2, "cilantro, chopped", "1/4", "cup"),
			    (2, "garlic clove", "2", "tablespoons"),
 			    (2, "kosher salt", "1", "teaspoon"),
 			    (2, "bird's eye chili, sliced", "2", "tablespoons"),
			    (2, "fish sauce", "2", "tablespoons"),
 			    (2, "dry roasted peanuts", "1/2", "cup"),
			    (2, "lime juice", "2", "tablespoons"),

			    (3, "eggs", "3", "each"),
			    (3, "parmesan", "1", "cup"),
			    (3, "red pepper, sliced", "1/4", "cup"),
			    (3, "bacon", "8", "each"),
			    (3, "garlic, minced", "2", "tablespoons"),
			    (3, "black pepper", "2", "tablespoons"),
 			    (3, "olive oil", "1", "teaspoon"),
 			    (3, "parsley, chopped", "1/2", "cup")
			   