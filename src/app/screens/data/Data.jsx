import recipeImage_1 from "../../images/chefRecipe/chop.jpg";
import recipeImage_2 from "../../images/chefRecipe/france.jpg";
import recipeImage_3 from "../../images/chefRecipe/italy.jpg";
import recipeImage_4 from "../../images/chefRecipe/oman.jpg";

import profile1 from "../../images/profile/avatar5.png";
import profile2 from "../../images/profile/avatar2.png";
import profile3 from "../../images/profile/avatar3.jpg";
import profile4 from "../../images/profile/avatar4.png";

export const chefProfileData = [
  {
    id: 1,
    recipeImage: recipeImage_1,
    profileImage: profile1,
    name: "Albert DePompeis",
    cuisine: "New American",
    about:
      "Chef Albee, has been working in New York and across the United States and internationally for over twenty years. Spending time at Benoit, in New York, working seasonally in Nantucket, Spain, and Miami, and Detroit, participating in New York food & wine festival and cooking at the James Beard house. Chef Albee specializes in New American, Vegan, and Mediterranean cuisine.",
    menu_90: {
      appetizer: "Massaged kale salad, Scallop Crudo",
      salad:
        "Heirloom tomatoes, cucumber, basil red onion, garden herbs, peppadews",
      entree: "Pan-seared turkey and chorizo burgers",
    },
    menu_140: {
      appetizer: "Buttermilk cornbread",
      salad:
        "Cantaloupe fresh basil, toasted prosciutto, cold-pressed olive oil, Aleppo",
      entree: "Pappardelle with lamb ragu",
    },
  },
  {
    id: 2,
    recipeImage: recipeImage_2,
    profileImage: profile2,
    name: "Jamie Vankoeverden",
    cuisine: "New American",
    about:
      "Cooking has been my passion from the time I could walk. Growing up, I’d spend countless days in Brooklyn, picking herbs, snapping green beans and jarring tomatoes with my grandmother— experiences that shaped who I am. From there, my culinary point of view and palate has expanded and grown with inspiration from my diverse family and friends, as well as the wonderful chefs I’ve met throughout my career. I attended culinary school in 2009, received my degree in pastry arts, and have been working in culinary fields since. I favor bold flavor combinations and fresh seasonal cooking, and I would be honored to share my passion with you and your guests.",
    menu_90: {
      appetizer: "Massaged kale salad, Scallop Crudo",
      salad: "Duck Breast or Salmon Fillet (please advise us in advance)",
      dessert: "Coconut Cake",
    },
  },
  {
    id: 3,
    recipeImage: recipeImage_3,
    profileImage: profile3,
    name: "Jacqueline Beaubien",
    cuisine: "New American",
    menu_90: {
      appetizer:
        "Brie on a Crispy Baguette Caprese Salad with a Balsamic Glaze",
      salad: "Heirloom tomatoes, cucumber, peppadews",
      dessert: "Nutella Mousse with Whipped Cream & Fresh Raspberries",
    },
    about:
      "I started out as a fashion designer in Shanghai, but as I grew older and helped a couple friends there open restaurants over the years I realized my passion for cooking. Working as a sous chef and a menu consultant was a fun side gig for me there and when I moved to New York I knew cooking was the only thing I wanted to be doing with my time. I enjoy pushing myself and teaching myself new techniques as well as honing new skills. Just like the brand I ran in Shanghai I like mixing new elements with old traditions.",
  },
  {
    id: 4,
    recipeImage: recipeImage_4,
    profileImage: profile4,
    name: "Mark Mata",
    cuisine: "New American",
    menu_90: {
      appetizer: "Chilled Corn Soup, Fresh Lemon Linguini",
      main: "Roasted Atlantic Salmon or Charred Skirt Steak",
      dessert: "Peach Cobbler",
    },
    menu_140: {
      appetizer: "Market Lettuce Caesar, Charred Portuguese Octopus",
      main: "Smoked Arctic Char, Marrow Crusted ShortRibs of Beef",
      dessert: "White Chocolate Mousse",
    },
    about:
      "Mark is a 2004 graduate of the Culinary Institute of America. He began his New York City Career at Danny Meyer’s Union Square Cafe. He has previously been Executive Chef at The Mermaid Inn, August and The Writing Room.",
  },
];
