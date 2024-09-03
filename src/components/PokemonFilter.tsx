import React from 'react';
import { useFilterContext } from '../hooks/useFilterContext';
import { useTypes } from '../hooks/useTypes';

const PokemonFilter: React.FC = () => {
    const { filters, setFilters } = useFilterContext();
    const {types} = useTypes();

    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            types: e.target.value,
        }));
    };

    return (
        <div className="mb-4">
            <label htmlFor="typeFilter" className="mr-2">Filtrar por tipo:</label>
            <select
                id="typeFilter"
                value={filters.types}
                onChange={handleTypeChange}
                className="p-2 border rounded"
            >
               <option value={'all'}>Todos</option>
                {types.map((type) => (
                    <option value={type.name} key={type.name}> {type.name}</option>
                ))}
                
            </select>
        </div>
    );
};

export default PokemonFilter;
