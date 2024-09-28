export interface Pokemon{
    name:string;
    url:string;
}

export interface PokemonResults{
    count:number;
    next:string;
    previuous?:string;
    results:Pokemon[]
}