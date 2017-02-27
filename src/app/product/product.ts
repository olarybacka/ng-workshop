export interface Category {
    id: number;
    name: string;
}


export class Product {

    constructor(
        public id: number,
        public name: string,
        public category: Category,
        public description?: string
    ) {}
}
