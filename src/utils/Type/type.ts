export interface NavList{
    name:string,
    link:string
};
export interface ContextType{
    navTogg:boolean,
    onHandleNav:() => void;
};
export interface ClothList{
    id:number;
    name:string;
    img:string;
    category:string;
    oldPrice:string;
    newPrice:string;
    color:string[]
}
export interface RatingList{
    ratingName:string;
    ratingCount:string;
}
export interface AboutTeam{
    img:string;
    userName:string;
    profession:string;
};
export interface ContactList{
    id:number;
    img:string;
    email:string;
    mailTwo:string;
    suport:string;
    btnSuport:string;
};
export interface PriceList{
    id:number;
    package:string;
    price:string;
    sym:string;
    duration:string;
    quality:string;
    para:string;
};
export interface FaqList{
    id:number;
    head:string;
    para:string;
}