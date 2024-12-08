export interface NavList{
    name:string,
    link:string
};
export interface ContextType{
    navTogg:boolean,
    onHandleNav:() => void;
}