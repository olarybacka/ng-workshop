export class Product {
    // id: number;
    // name: string;
    // category: string;
    // description?: string;

    // constructor(id, name, category, description) {
    //     this.id = id;
    //     this.name = name;
    // }

    constructor(
        public id: number,
        public name: string,
        public category: string,
        public description?: string
    ) {}
}
