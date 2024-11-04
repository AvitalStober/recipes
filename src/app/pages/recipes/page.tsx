import Card from "@/app/components/Card";
import { getRecipes } from "@/app/services/Recipes";
import Recipes from "@/app/types/recipes";
import React from "react";

const RecipesList: React.FC<{ recipes: Array<Recipes> }> = async () => {
  const recipes: Array<Recipes> = await getRecipes();
  return (
    <div>
      {recipes.map((rec) => (
        <Card recipe={rec} key={rec.id} />
      ))}
    </div>
  );
};

export default RecipesList;



// const RecipesList = async () => {
//     let recipes: Array<Recipes> = [];
  
//     try {
//       recipes = await getRecipes();
//       // Ensure recipes is an array
//       if (!Array.isArray(recipes)) {
//         console.error("Fetched recipes is not an array:", recipes);
//         recipes = [];
//       }
//     } catch (error) {
//       console.error("Error fetching recipes:", error);
//       recipes = [];
//     }
  
//     return (
//       <div>
//         {recipes.map((rec) => (
//           <Card recipe={rec} key={rec.id} />
//         ))}
//       </div>
//     );
//   };
  
//   export default RecipesList;