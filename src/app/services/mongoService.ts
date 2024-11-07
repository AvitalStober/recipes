import axios from "axios";
import IUser from "../types/IUser";


export const getRandomInfo = async (): Promise<IUser[]> => {
    const res = axios
      .get("http://localhost:3000/api/mongo/get")
      .then((response) => response.data)
      .catch((error) => console.error(error));
  
    return res;
  };

  export const post = async () => {
    const res = axios
      .post("http://localhost:3000/api/mongo/post")
      .then((response) => response.data)
      .catch((error) => console.error(error));
  
    return res;
  };