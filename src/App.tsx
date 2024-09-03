import './App.css'
import { FilterProvider } from './context/filter'
import AppRouter from './router/AppRouter'

function App() {

  return (
    <FilterProvider>
      <AppRouter />
    </FilterProvider>
  )
}

export default App
