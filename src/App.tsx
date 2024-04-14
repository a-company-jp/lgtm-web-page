import Header from './components/Header';
import './App.css';
import CardList from './components/CardList';
import SendImageButton from './components/SendImageButton';
import { UIProvider } from "@yamada-ui/react"
import { Pagination } from './components/Pagination';
import { useState } from 'react';
import useLGTMFetch from './hooks/useLGTMFetch';

function App() {

  const [activePage, setActivePage] = useState(1);
  const { LGTMUrls, loading, error } = useLGTMFetch(activePage);

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
        <CardList {...LGTMUrls} />
        <Pagination activePage={activePage} setActivePage={setActivePage} />
      </div>
    </UIProvider>
  );
}

export default App;
