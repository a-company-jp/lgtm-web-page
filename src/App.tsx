import Header from './components/Header';
import './App.css';
import CardList from './components/CardList';
import CardData from './sample/card-data.json';
import SendImageButton from './components/SendImageButton';
import { UIProvider } from "@yamada-ui/react"
import { Pagination } from './components/Pagination/indext';


function App() {

  const fetchMaxPageNum = () => {
    // TODO: fetch data from the server
    return 30;
  }

  const fetchLGTMsBy = (numPage: number) => {
    const maxPageNum = fetchMaxPageNum();
    if (0 <= numPage && numPage < maxPageNum) {
      // TODO: fetch data from the server
    } else {
      throw new Error('Invalid page number');
    }
  }

  return (
    <UIProvider>
      <div className="App">
        <Header />
        <SendImageButton />
        <CardList {...CardData} />
        <Pagination fetchLGTMsBy={fetchLGTMsBy} />
      </div>
    </UIProvider>
  );
}

export default App;
