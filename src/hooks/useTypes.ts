import { useEffect, useState } from "react"
import { Types } from "../types/pokemon"
import { getTypes } from "../services/request";

export const useTypes = () => {
    const [types, setTypes] = useState<Types[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);    

    useEffect(() => {
      async function fetchPokemonsTypes () {
        try {
            const types = await getTypes();
            setTypes(types);
        } catch (error) {
            setError((error as Error).message)
        } finally {
            setIsLoading(false);
        }

      }
    fetchPokemonsTypes()
     
    }, [])

    return {types, isLoading, error}
    
}