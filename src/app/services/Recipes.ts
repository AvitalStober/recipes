import axios from "axios";
import Recipes from "../types/recipes";

export const getRecipes = async (): Promise<Recipes[]> => {
  const res = axios
    .get("https://dummyjson.com/recipes")
    .then((response) => response.data.recipes)
    .catch((error) => console.error(error));

  return res;
};

export const getRecipe = async (recipeId: string): Promise<Recipes> => {
  
  const res = axios
    .get(`https://dummyjson.com/recipes/${recipeId}`)
    .then((response) => response.data)
    .catch((error) => console.error(error));

  return res;
};
