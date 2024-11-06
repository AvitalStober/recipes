
"use client";
import { getQueryServer } from "@/app/services/reactQueryServer";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const ReactQuery = () => {

  const { data, isLoading, error} = useQuery({ 
    queryKey: ["todos"], 
    queryFn: getQueryServer 
});

if(isLoading) return <div>Loading...</div>;
if(error) return <div>Error</div>

  return (
    <div>
      <ul className='flex flex-wrap'>
        {data?.map((todo) => (
          <li className='w-60 h-30 m-5 p-5 bg-blue-200' key={todo.id}>{todo.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReactQuery;
