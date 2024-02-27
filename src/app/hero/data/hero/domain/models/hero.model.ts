export interface HeroModel {
    id          : string;
    name        : string;
    description : string;
    power       : string;
    age         : number;
    universe_img: TYPE_UNIVERSE;
}

export  enum TYPE_UNIVERSE {
    MARVEL = 'marvel',
    DC     = 'dc'
} 