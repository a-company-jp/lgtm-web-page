import Header from './components/Header';
import './App.css';
import CardList from './components/CardList';
import CardData from './sample/card-data.json';
import SendImageButton from './components/SendImageButton';
import { UIProvider } from "@yamada-ui/react"


function App() {
  const styles = {
    buttonContainer: "flex justify-end mt-4 mr-36",
  }

  return (
    <UIProvider>
      <div className="App">
        <Header />
        <SendImageButton />
        <CardList {...CardData} />
      </div>
    </UIProvider>
  );
}

export default App;
