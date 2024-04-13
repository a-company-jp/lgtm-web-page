import Header from './components/Header';
import './App.css';
import CardList from './components/CardList';
import CardData from './sample/card-data.json';
import Pages from './sample/pages.json';
import SendImageButton from './components/SendImageButton';
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
    <div className="App">
      <Header />
      <SendImageButton />
      <CardList {...CardData} />
      <Pagination fetchLGTMsBy={fetchLGTMsBy} />
    </div>
  );
}

export default App;
