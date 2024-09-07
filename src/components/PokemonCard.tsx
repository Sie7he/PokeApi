import { Link } from "react-router-dom";
import { PokemonData } from "../types/pokemon";
import { typeColors } from "../utils/color";

const PokemonCard = ({ id, name, types, sprites }: PokemonData) => {
    

  return (
    <Link
      to={"/" + id}
      className={`max-w-xs rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:scale-105 bg-white`}
    >
      <div className="relative">
        <img
          className="w-full h-48 object-contain p-4"
          src={sprites.other["official-artwork"].front_default}
          alt={name}
        />
        <div
          className={`absolute inset-x-0 top-0 h-2 `}
        ></div>
      </div>
      <div className="p-4">
        <h2 className="font-bold text-2xl capitalize mb-1 text-gray-800">
          {name}
        </h2>
        <p className="text-gray-500 mb-4">Pokedex: {id}</p>
        <div className="flex flex-wrap justify-start gap-2">
          {types.map((t, index) => (
            <span
              key={index}
              className={`inline-block rounded-full text-sm font-semibold text-white px-3 py-1 ${typeColors[t.type.name]} capitalize`}
            >
              {t.type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
