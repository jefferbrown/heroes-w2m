import { v4 as uuidv4 } from 'uuid';
import { HeroModel, TYPE_UNIVERSE } from "../../hero/domain/models/hero.model";

export const INITIAL_DATA: HeroModel[] = [
    { 
        id: uuidv4(),
        name: "ironman",
        description: "Universo Marvel está fuertemente basado en el mundo real. La Tierra en el Universo Marvel tiene todas las características de la real: mismos países, mismas personalidades (políticos, estrellas de cine, etc.), mismos acontecimientos históricos (como la Segunda Guerra Mundial)",
        power:"Volar, fuerza",
        age: 22,
        universe_img: TYPE_UNIVERSE.MARVEL
    }, 
    { 
        id: uuidv4(),
        name: "Superman",
        description: "Durante su historia, ha habido gran cantidad de personajes, desde los que ahora son los más conocidos (Superman, Batman, Mujer Maravilla, Flash y Robin) hasta los que nunca tuvieron lugar en la actualidad, pero que de todas formas fueron de grandes sagas (Deadman, Metamorfo, Stalker).",
        power:"Volar, fuerza",
        age: 22,
        universe_img: TYPE_UNIVERSE.DC
    }, 
    { 
        id: uuidv4(),
        name: "capitán america",
        description: "Universo Marvel está fuertemente basado en el mundo real. La Tierra en el Universo Marvel tiene todas las características de la real: mismos países, mismas personalidades (políticos, estrellas de cine, etc.), mismos acontecimientos históricos (como la Segunda Guerra Mundial)",
        power:"Volar, fuerza",
        age: 22,
        universe_img: TYPE_UNIVERSE.MARVEL
    }, 
    { 
        id: uuidv4(),
        name: "ojo de halcon",
        description: "Universo Marvel está fuertemente basado en el mundo real. La Tierra en el Universo Marvel tiene todas las características de la real: mismos países, mismas personalidades (políticos, estrellas de cine, etc.), mismos acontecimientos históricos (como la Segunda Guerra Mundial)",
        power:"Volar, fuerza",
        age: 22,
        universe_img: TYPE_UNIVERSE.MARVEL
    }, 
    { 
        id: uuidv4(),
        name: "Batman",
        description: "Durante su historia, ha habido gran cantidad de personajes, desde los que ahora son los más conocidos (Superman, Batman, Mujer Maravilla, Flash y Robin) hasta los que nunca tuvieron lugar en la actualidad, pero que de todas formas fueron de grandes sagas (Deadman, Metamorfo, Stalker).",
        power:"Volar, fuerza",
        age: 22,
        universe_img: TYPE_UNIVERSE.DC
    }, 
    { 
        id: uuidv4(),
        name: "Flash",
        description: "Durante su historia, ha habido gran cantidad de personajes, desde los que ahora son los más conocidos (Superman, Batman, Mujer Maravilla, Flash y Robin) hasta los que nunca tuvieron lugar en la actualidad, pero que de todas formas fueron de grandes sagas (Deadman, Metamorfo, Stalker).",
        power:"Volar, fuerza",
        age: 22,
        universe_img: TYPE_UNIVERSE.DC
    }, 
]