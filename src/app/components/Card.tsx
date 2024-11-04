"use client";

import React from "react";
import Recipes from "@/app/types/recipes";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface CardProps {
  recipe: Recipes;
}

const Card: React.FC<CardProps> = ({ recipe }) => {
  const { recipeId } = useParams();

  return (
    <div className="w-[90%] m-10 border border-solid border-blue-800 border-3">
      <h1 className="font-bold text-2xl my-10 text-center">{recipe.name}</h1>

      <div className="flex text-sm">
        <div className="w-[45%] p-[2.5%]">
          <h3 className="font-bold">ingredients:</h3>
          <ul className="list-disc pl-5">
            {recipe.ingredients.map((ing, index) => {
              return <li key={index}>{ing}</li>;
            })}
          </ul>

          <h3 className="font-bold">instructions:</h3>
          <ol className="list-decimal pl-5">
            {recipe.instructions.map((ins, index) => {
              return <li key={index}>{ins}</li>;
            })}
          </ol>
        </div>
        <div className="w-[45%] p-[2.5%] flex flex-col justify-between">
          <div className="">
            <h3 className="font-bold">
              preparation time: {recipe.prepTimeMinutes}
            </h3>
            <h3 className="font-bold">
              cooking time: {recipe.cookTimeMinutes}
            </h3>
            <h3 className="font-bold">level: {recipe.difficulty}</h3>
          </div>
          <Image
            className="rounded-xl"
            src={recipe.image}
            width={300}
            height={300}
            alt={recipe.name}
          />
        </div>
      </div>

      {recipeId == null && (
        <Link href={`recipes/${recipe.id}`}>
          <button className="bg-blue-500 m-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            get start!
          </button>
        </Link>
      )}
    </div>
  );
};

export default Card;
