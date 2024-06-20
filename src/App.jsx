import { useRoutes } from "react-router-dom";
import { myRoutes } from "./myRoutes";

function App() {
  return useRoutes(myRoutes);
}

export default App;
