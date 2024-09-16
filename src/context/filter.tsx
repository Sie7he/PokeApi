import { createContext, useState, ReactNode  } from "react";

type FilterState = {
    types: string;
    name: string;
    generation: number | null;
};

type FilterProviderProps = {
    children: ReactNode;
}

type FilterContextType = {
    filters: FilterState;
    setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
};  

export const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({children}: FilterProviderProps) => {
    const [filters, setFilters] = useState<FilterState>({
        types: 'all',
        name: '',
        generation: null
    });

return (
    <FilterContext.Provider value={{
        filters,
        setFilters
    }}>
        {children}
    </FilterContext.Provider>
)
    
}