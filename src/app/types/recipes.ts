
export default interface Recipes {
    id: number,
    name:string,
    ingredients:Array<string>,
    instructions:Array<string>,
    prepTimeMinutes:number,
    cookTimeMinutes:number,
    difficulty:string,
    image:string
}