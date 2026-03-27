import RenderizarPersonages from "./components/RenderizarPersonages"
import { personagens } from "./data/data.js"

function App() {
  return (
    <div>
      <RenderizarPersonages personagens={personagens} />
    </div>
  )
}

export default App
