import Card from "@/app/components/Card";
import { getRecipe } from "@/app/services/Recipes";
import RecipeView from "@/app/types/RecipeView";
import React from "react";

const myRecipe = async (props: RecipeView) => {
  const recipeId = props.params.recipeId;
  const recipe = await getRecipe(recipeId);
  return <div><Card recipe={recipe}/></div>;
};

export default myRecipe;
