export type Recipe = {
    image: string,
    name: string,
    description: string,
    ingredients: {
        name: string,
        quantity: number,
        unit: string
    }[]
}