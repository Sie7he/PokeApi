import { Link } from "react-router-dom";
import { PokemonData } from "../types/pokemon";

const PokemonCard = ({ id, name, types, sprites }: PokemonData) => {
  return (
      <Link
        to={'/'+id}
        className="max-w-xs rounded overflow-hidden shadow-lg bg-white hover:bg-gray-100 transition duration-300">
          <img className="w-full" src={sprites.front_default} alt={name} />
          <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 capitalize">{name}</div>
              <p className="text-gray-700 text-base">Pokedex: {id}</p>
              <div className="mt-2">
                  {types.map((typeObj, index) => (
                      <span
                          key={index}
                          className={`inline-block bg-${typeObj.type.name}-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 capitalize`}
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
