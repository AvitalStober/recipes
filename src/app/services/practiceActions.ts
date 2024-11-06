import axios from "axios";
import practice from "../types/practice";


export const getRandomInfo = async (): Promise<practice[]> => {
    const res = axios
      .get("http://localhost:3000/api/firstTry/getDetails")
      .then((response) => response.data)
      .catch((error) => console.error(error));
  
    return res;
  };