import AllItems from "./components/AllItems";
import SelectedItems from "./components/SelectedItems";
import APIContextProvider from "./components/APIContextProvider";
function App() {
  return (
    <div className="container">
      <header>
        <APIContextProvider>
          <AllItems/>
          <SelectedItems/>
        </APIContextProvider>
      </header>
    </div>
  );
}

export default App;
