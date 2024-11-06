import axios from "axios";
import reactQuery from "../types/reactQuery";


export const getQueryServer = async (): Promise<reactQuery[]> => {
  try {
    const response = await axios.get("http://localhost:3000/api/reactQuery/get");
    return response.data; // מחזירים את הנתונים שהתקבלו
  } catch (error) {
    console.error(error); // אם יש שגיאה, נדפיס אותה
    throw new Error("Failed to fetch data"); // נזרוק שגיאה כדי להתמודד עם זה בקוד שמבצע את הקריאה
  }
};