import { useContext } from "react"
import { FilterContext } from "../context/filter"

export const useFilterContext = () => {
    const context = useContext(FilterContext);

    if(context == undefined) {
        throw new Error('UseFilterContext must be in a FilterProvider')
    }

    return context
}