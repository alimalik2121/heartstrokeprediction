export const Colors = {
  COLOR_PRIMARY: "#f96163",
  COLOR_LIGHT: "#fff",
  COLOR_DARK: "#000",
  COLOR_DARK_ALT: "#262626",
};

// Data for food categories

export const Categories = [
    {
        id: "01",
        category: "Breakfast"
    },
    {
        id: "02",
        category: "Lunch"
    },
    {
        id: "03",
        category: "Dinner"
    },
];

export const Foods = [
    {
        id: "01",
        name: "Oatmeal",
        category: "Breakfast",
        image: require("../assets/images/oatmeal.jpg"),
        rating: "4.8",
        ingredients: ["Rolled oats", "Low-fat milk", "Mixed barries", "Nuts"],
        description: ["A hearty bowl of oatmeal topped with fresh berries and crunchy nuts for a nutritious start."],
        recipe: ["In a pot, bring water or milk to a boil.",
                 "Add oats, reduce heat, and simmer for 5-7 minutes, stirring occasionally.",
                 "Top with mixed berries and nuts.",
                 "Drizzle with honey or maple syrup if desired."],
        time: "15 mins",
        difficulty: "Easy",
        calories: "300 cal"
    },
    {
        id: "02",
        name: "Avocado Toast",
        category: "Breakfast",
        image: require("../assets/images/avocadotoast.jpg"),
        rating: "4.7",
        ingredients: ["Avocado", "Whole-grain bread", "Tomato", "Salt", "Pepper", "Lemon juice"],
        description: ["Creamy avocado spread on whole-grain toast with fresh tomato slices and a sprinkle of lemon juice."],
        recipe: ["Toast the whole-grain bread.",
                 "Mash the avocado and spread it on the toast.",
                 "Top with tomato slices.",
                 "Season with salt, pepper, and a squeeze of lemon juice.",
                 "Garnish with basil leaves if desired."
        ],
        time: "5 mins",
        difficulty: "Easy",
        calories: "250 cal"
    },
    {
        id: "03",
        name: "Greek Yogurt",
        category: "Breakfast",
        image: require("../assets/images/greekyogurt.jpg"),
        rating: "4.6",
        ingredients: ["Greek yogurt", "Honey", "Stawberries", "Berries", "Almonds"],
        description: ["A simple and satisfying bowl of Greek yogurt sweetened with honey and topped with crunchy nuts."],
        recipe: ["Spoon the Greek yogurt into a bowl.",
                 "Drizzle with honey.",
                 "Sprinkle with chopped nuts.",
                 "Garnish with fresh mint leaves if desired."
        ],
        time: "5 mins",
        difficulty: "Easy",
        calories: "220 cal"
    },
    {
        id: "04",
        name: "Vegetable Omelette",
        category: "Breakfast",
        image: require("../assets/images/vegetableomelette.jpg"),
        rating: "4.5",
        ingredients: ["2 Eggs", "Spinach", "Bell peppers", "Tomatoes", "Olive oil", "Salt", "Pepper"],
        description: ["A fluffy omelette packed with colorful vegetables for a protein-rich breakfast."],
        recipe: ["In a bowl, whisk the eggs with a pinch of salt and pepper.",
                 "Heat olive oil in a non-stick pan over medium heat.",
                 "Add the chopped vegetables and sauté for 2-3 minutes.",
                 "Pour the eggs over the vegetables and cook until set.",
                 "Fold the omelette in half and serve."
        ],
        time: "10 mins",
        difficulty: "Medium",
        calories: "200 cal"
    },
    {
        id: "05",
        name: "Smoothie Bowl",
        category: "Breakfast",
        image: require("../assets/images/smoothiebowl.jpg"),
        rating: "4.7",
        ingredients: ["Banana", "Berries", "Spinach", "Almond milk", "Chia seeds"],
        description: ["A vibrant smoothie bowl blended with fruits and topped with granola and fresh fruit slices."],
        recipe: ["Blend the banana, frozen berries, spinach, and almond milk until smooth.",
                 "Pour into a bowl.",
                 "Top with sliced fruit, granola, and shredded coconut."
        ],
        time: "5 mins",
        difficulty: "Easy",
        calories: "350 cal"
    },
    {
        id: "06",
        name: "Whole-Grain Pancakes",
        category: "Breakfast",
        image: require("../assets/images/pancakes.jpg"),
        rating: "4.6",
        ingredients: ["Whole-grain flour", "Baking powder", "Honey", "Low-fat milk", "Egg", "Olive oil", "Fruits"],
        description: ["Light and fluffy pancakes made with whole-grain flour, perfect for a healthy breakfast treat."],
        recipe: ["In a bowl, mix the flour and baking powder.",
                "In another bowl, whisk together the milk, egg, honey, and olive oil.",
                "Combine the wet and dry ingredients.",
                "Heat a non-stick pan and pour small amounts of batter to form pancakes.",
                "Cook until bubbles form, then flip and cook the other side.",
                "Serve with fresh fruit or yogurt."
        ],
        time: "20 mins",
        difficulty: "Medium",
        calories: "350 cal"
    },
    {
        id: "07",
        name: "Chia Seed Pudding",
        category: "Breakfast",
        image: require("../assets/images/chiaseedpudding.jpg"),
        rating: "4.7",
        ingredients: ["Chia seeds", "Almond milk", "Honey", "Vanilla extract", "Fruits"],
        description: ["A creamy and nutritious chia seed pudding that sets overnight, topped with fresh fruits."],
        recipe: ["In a bowl, mix the chia seeds, almond milk, honey, and vanilla extract.",
                 "Stir well to combine.",
                 "Cover and refrigerate for at least 2 hours, or overnight, until it reaches a pudding-like consistency.",
                 "Stir again before serving and top with fresh fruit."
        ],
        time: "10 mins",
        difficulty: "Easy",
        calories: "200 cal"
    },
    {
        id: "08",
        name: "Quinoa Breakfast Bowl",
        category: "Breakfast",
        image: require("../assets/images/quinoabreakfastbowl.jpg"),
        rating: "4.6",
        ingredients: ["Cooked quinoa", "Almond milk", "Honey", "Cinnamon", "Fresh barries", "Nuts"],
        description: ["A warm bowl of quinoa sweetened with honey and cinnamon, garnished with berries and nuts."],
        recipe: ["In a small saucepan, heat the cooked quinoa and almond milk over medium heat.",
                 "Stir in the honey and cinnamon.",
                 "Cook until heated through, about 3-5 minutes.",
                 "Transfer to a bowl and top with fresh berries and chopped nuts."
        ],
        time: "10 mins",
        difficulty: "Medium",
        calories: "350 cal"
    },
    {
        id: "09",
        name: "Grilled Chicken Salad",
        category: "Lunch",
        image: require("../assets/images/grilledchickensalad.jpg"),
        rating: 4.8,
        ingredients: ["Chicken breast", "Mixed greens", "Cherry tomatoes", "Cucumber", "Olive oil", "Lemon juice", "Salt", "Pepper"],
        description: ["A nutritious salad with grilled chicken, fresh greens, and a light vinaigrette."],
        recipe: ["Season chicken with salt and pepper, then grill until fully cooked.",
                 "In a bowl, mix greens, cherry tomatoes, and cucumber.",
                 "Slice grilled chicken and add to the salad.",
                 "Drizzle with olive oil and lemon juice."
        ],
        time: "20 mins",
        difficulty: "Easy",
        calories: "350 cal"    
    },
    {
        id: "10",
        name: "Quinoa and Black Bean Salad",
        category: "Lunch",
        image: require("../assets/images/quinoablackbeansalad.jpg"),
        rating: 4.7,
        ingredients: ["Quinoa", "Black beans", "Bell peppers", "Corn", "Cilantro", "Lime juice", "Olive oil", "Salt", "Pepper"],
        description: "A protein-packed salad with quinoa, black beans, and colorful veggies.",
        recipe: [
          "Cook quinoa according to package instructions.",
          "In a large bowl, mix cooked quinoa, black beans, diced bell peppers, and corn.",
          "Add chopped cilantro, lime juice, olive oil, salt, and pepper to taste."
        ],
        time: "25 mins",
        difficulty: "Easy",
        calories: "400 cal"
      },
      {
        id: "11",
        name: "Lentil Soup",
        category: "Lunch",
        image: require("../assets/images/lentilsoup.jpg"),
        rating: 4.6,
        ingredients: ["Lentils", "Carrots", "Celery", "Onion", "Garlic", "Vegetable broth", "Olive oil", "Salt", "Pepper", "Thyme"],
        description: "A hearty and warming lentil soup with vegetables.",
        recipe: [
          "Sauté chopped onions, carrots, celery, and garlic in olive oil.",
          "Add lentils, vegetable broth, salt, pepper, and thyme.",
          "Simmer until lentils are tender."
        ],
        time: "40 mins",
        difficulty: "Medium",
        calories: "300 cal"
      },
      {
        id: "12",
        name: "Turkey and Avocado Wrap",
        category: "Lunch",
        image: require("../assets/images/turkeyavocadowrap.jpg"),
        rating: 4.8,
        ingredients: ["Whole-grain tortilla", "Turkey slices", "Avocado", "Lettuce", "Tomato", "Mustard"],
        description: "A light and refreshing wrap with turkey, avocado, and veggies.",
        recipe: [
          "Spread mustard on the tortilla.",
          "Layer with turkey slices, avocado, lettuce, and tomato.",
          "Roll up and slice in half."
        ],
        time: "10 mins",
        difficulty: "Easy",
        calories: "350 cal"
      },
      {
        id: "13",
        name: "Salad Sandwich",
        category: "Lunch",
        image: require("../assets/images/chickpeasaladsandwich.jpg"),
        rating: 4.7,
        ingredients: ["Chickpeas", "Greek yogurt", "Lemon juice", "Celery", "Green onion", "Whole-grain bread", "Salt", "Pepper"],
        description: "A vegetarian sandwich with mashed chickpeas and fresh veggies.",
        recipe: [
          "Mash chickpeas with Greek yogurt and lemon juice.",
          "Mix in chopped celery and green onion.",
          "Season with salt and pepper.",
          "Spread on whole-grain bread."
        ],
        time: "15 mins",
        difficulty: "Easy",
        calories: "300 cal"
      },
      {
        id: "14",
        name: "Baked Salmon with Asparagus",
        category: "Lunch",
        image: require("../assets/images/bakedsalmonasparagus.jpg"),
        rating: 4.9,
        ingredients: ["Salmon fillet", "Asparagus", "Olive oil", "Lemon", "Garlic", "Salt", "Pepper"],
        description: "A heart-healthy dish with baked salmon and asparagus.",
        recipe: [
          "Preheat oven to 375°F (190°C).",
          "Place salmon and asparagus on a baking sheet.",
          "Drizzle with olive oil, lemon juice, and minced garlic.",
          "Season with salt and pepper.",
          "Bake for 20 minutes."
        ],
        time: "30 mins",
        difficulty: "Medium",
        calories: "400 cal"
      },
      {
        id: "15",
        name: "Veggie Stir-Fry",
        category: "Lunch",
        image: require("../assets/images/veggiestirfrybrownrice.jpg"),
        rating: 4.6,
        ingredients: ["Brown rice", "Broccoli", "Bell peppers", "Carrots", "Snap peas", "Soy sauce", "Ginger", "Garlic", "Olive oil"],
        description: "A colorful stir-fry with assorted vegetables and brown rice.",
        recipe: [
          "Cook brown rice according to package instructions.",
          "In a pan, sauté garlic and ginger in olive oil.",
          "Add vegetables and stir-fry until tender.",
          "Add soy sauce and serve over brown rice."
        ],
        time: "30 mins",
        difficulty: "Medium",
        calories: "350 cal"
      },
      {
        id: "16",
        name: "Spinach and Feta Stuffed Peppers",
        category: "Lunch",
        image: require("../assets/images/spinachfetastuffedpeppers.jpg"),
        rating: 4.7,
        ingredients: ["Bell peppers", "Spinach", "Feta cheese", "Quinoa", "Olive oil", "Garlic", "Salt", "Pepper"],
        description: "Bell peppers stuffed with a savory mixture of spinach and feta.",
        recipe: [
          "Preheat oven to 375°F (190°C).",
          "Sauté garlic and spinach in olive oil.",
          "Mix cooked quinoa and feta cheese with the spinach.",
          "Stuff the mixture into halved bell peppers.",
          "Bake for 25 minutes."
        ],
        time: "35 mins",
        difficulty: "Medium",
        calories: "300 cal"
      },
      {
        id: "17",
        name: "Grilled Salmon with Quinoa",
        category: "Dinner",
        image: require("../assets/images/grilledsalmonquinoa.jpg"),
        rating: 4.9,
        ingredients: ["Salmon fillet", "Quinoa", "Olive oil", "Lemon", "Garlic", "Salt", "Pepper", "Parsley"],
        description: "A heart-healthy dinner featuring grilled salmon and quinoa.",
        recipe: [
          "Season salmon with olive oil, lemon juice, garlic, salt, and pepper.",
          "Grill salmon until fully cooked.",
          "Cook quinoa according to package instructions.",
          "Serve grilled salmon over quinoa, garnished with chopped parsley."
        ],
        time: "30 mins",
        difficulty: "Medium",
        calories: "450 cal"
      },
      {
        id: "18",
        name: "Vegetable Stir-Fry with Tofu",
        category: "Dinner",
        image: require("../assets/images/vegetablestirfrytofu.jpg"),
        rating: 4.7,
        ingredients: ["Tofu", "Broccoli", "Carrots", "Bell peppers", "Snap peas", "Soy sauce", "Ginger", "Garlic", "Olive oil"],
        description: "A flavorful stir-fry with tofu and a mix of vegetables.",
        recipe: [
          "Press tofu to remove excess water, then cut into cubes.",
          "Sauté tofu in olive oil until golden brown.",
          "Add garlic and ginger, then stir-fry vegetables until tender.",
          "Add soy sauce and cook for a few more minutes."
        ],
        time: "25 mins",
        difficulty: "Easy",
        calories: "400 cal"
      },
      {
        id: "19",
        name: "Baked Cod with Veggies",
        category: "Dinner",
        image: require("../assets/images/bakedcodveggies.jpg"),
        rating: 4.8,
        ingredients: ["Cod fillet", "Cherry tomatoes", "Zucchini", "Olive oil", "Lemon", "Garlic", "Salt", "Pepper"],
        description: "A simple and nutritious meal with baked cod and vegetables.",
        recipe: [
          "Preheat oven to 375°F (190°C).",
          "Place cod fillets, cherry tomatoes, and sliced zucchini on a baking sheet.",
          "Drizzle with olive oil, lemon juice, and minced garlic.",
          "Season with salt and pepper, then bake for 20 minutes."
        ],
        time: "30 mins",
        difficulty: "Easy",
        calories: "350 cal"
      },
      {
        id: "20",
        name: "Chicken and Vegetable Skewers",
        category: "Dinner",
        image: require("../assets/images/chickenvegskewers.jpg"),
        rating: 4.8,
        ingredients: ["Chicken breast", "Bell peppers", "Zucchini", "Red onion", "Olive oil", "Lemon juice", "Salt", "Pepper"],
        description: "Colorful skewers with marinated chicken and fresh vegetables.",
        recipe: [
          "Cut chicken and vegetables into bite-sized pieces.",
          "Marinate chicken in olive oil, lemon juice, salt, and pepper.",
          "Thread chicken and vegetables onto skewers.",
          "Grill until chicken is cooked through and vegetables are tender."
        ],
        time: "25 mins",
        difficulty: "Medium",
        calories: "400 cal"
      },
      {
        id: "21",
        name: "Stuffed Bell Peppers",
        category: "Dinner",
        image: require("../assets/images/stuffedbellpeppers.jpg"),
        rating: 4.7,
        ingredients: ["Bell peppers", "Ground turkey", "Brown rice", "Tomato sauce", "Onion", "Garlic", "Salt", "Pepper"],
        description: "Bell peppers stuffed with a flavorful mixture of turkey and rice.",
        recipe: [
          "Preheat oven to 375°F (190°C).",
          "Sauté chopped onion and garlic, then add ground turkey and cook until browned.",
          "Mix in cooked brown rice and tomato sauce, season with salt and pepper.",
          "Stuff the mixture into halved bell peppers.",
          "Bake for 25 minutes."
        ],
        time: "40 mins",
        difficulty: "Medium",
        calories: "450 cal"
      },
      {
        id: "22",
        name: "Lentil and Vegetable Stew",
        category: "Dinner",
        image: require("../assets/images/lentilveggiestew.jpg"),
        rating: 4.6,
        ingredients: ["Lentils", "Carrots", "Celery", "Onion", "Garlic", "Tomato paste", "Vegetable broth", "Olive oil", "Salt", "Pepper", "Thyme"],
        description: "A hearty and comforting stew with lentils and vegetables.",
        recipe: [
          "Sauté chopped onions, carrots, celery, and garlic in olive oil.",
          "Add lentils, vegetable broth, tomato paste, salt, pepper, and thyme.",
          "Simmer until lentils and vegetables are tender."
        ],
        time: "45 mins",
        difficulty: "Medium",
        calories: "400 cal"
      },
      {
        id: "23",
        name: "Shrimp and Asparagus Stir-Fry",
        category: "Dinner",
        image: require("../assets/images/shrimpasparagusstirfry.jpg"),
        rating: 4.8,
        ingredients: ["Shrimp", "Asparagus", "Garlic", "Ginger", "Olive oil", "Soy sauce", "Lemon juice", "Salt", "Pepper"],
        description: "A quick and easy stir-fry with shrimp and asparagus.",
        recipe: [
          "Sauté garlic and ginger in olive oil.",
          "Add shrimp and cook until pink.",
          "Add asparagus and stir-fry until tender.",
          "Season with soy sauce, lemon juice, salt, and pepper."
        ],
        time: "20 mins",
        difficulty: "Easy",
        calories: "350 cal"
      },
      {
        id: "24",
        name: "Quinoa Stuffed Eggplant",
        category: "Dinner",
        image: require("../assets/images/quinoastuffedeggplant.jpg"),
        rating: 4.7,
        ingredients: ["Eggplant", "Quinoa", "Tomato", "Spinach", "Garlic", "Olive oil", "Feta cheese", "Salt", "Pepper"],
        description: "Eggplant halves stuffed with a savory quinoa and vegetable mix.",
        recipe: [
          "Preheat oven to 375°F (190°C).",
          "Halve and hollow out eggplants.",
          "Sauté garlic and spinach in olive oil.",
          "Mix cooked quinoa, diced tomato, and sautéed spinach.",
          "Stuff the mixture into eggplant halves, top with feta cheese.",
          "Bake for 25 minutes."
        ],
        time: "40 mins",
        difficulty: "Medium",
        calories: "350 cal"
      }
];