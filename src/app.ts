import { findHeroById } from './services/hero.service';



const hero = findHeroById( 2 );


console.log( hero?.name ?? 'No hero found'  ); // hero = undefined.name