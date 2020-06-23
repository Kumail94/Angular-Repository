import { Ingrediant } from './ingredient';

export class Reciepe {
    public name : string;
    public description : string;
    public imagePath : string;
    public ingrediant : Ingrediant[];

constructor(name : string , imgPath :string , descrpt : string ,  ingrediant : Ingrediant[] ){
    this.name = name;
    this.imagePath = imgPath;
    this.description = descrpt;
    this.ingrediant = ingrediant;
     }
}