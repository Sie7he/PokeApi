import { Link } from "react-router-dom";
import { PokemonData } from "../types/pokemon";
import { typeColors } from "../utils/color";

const PokemonCard = ({ id, name, types, sprites }: PokemonData) => {
    
    const primaryType = types[0].type.name;
    const backgroundColor = typeColors[primaryType] || 'bg-gray-700';
  return (
      <Link
        to={'/'+id}
        className={`max-w-xs rounded overflow-hidden shadow-lg transition duration-300 `}>
          <img className="w-full" src={sprites.front_default} alt={name} />
          <div className={`px-4 py-2 ${backgroundColor} text-gray-200`}>
              <div className="font-bold text-xl mb-2 capitalize">{name}</div>
              <p className="  text-base">Pokedex: {id}</p>
              <div className="mt-2">
                  {types.map((typeObj, index) => (
                      <span
                          key={index}
                          className={`inline-block bg-${typeObj.type.name}-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 capitalize`}
                      >
                          {typeObj.type.name}
                      </span>
                  ))}
              </div>
          </div>
      </Link>
  );
};

export default PokemonCard;
