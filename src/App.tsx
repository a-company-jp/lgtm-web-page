import Header from './components/Header';
import './App.css';
import CardList from './components/CardList';
import SendImageButton from './components/SendImageButton';
import { UIProvider } from "@yamada-ui/react"
import { Pagination } from './components/Pagination/indext';
import { useState } from 'react';
import useLGTMFetch from './hooks/useLGTMFetch';

function App() {

  const [activePage, setActivePage] = useState(1);
  const [uploaded, setUploaded] = useState(false);
  const { LGTMUrls, loading, error } = useLGTMFetch(activePage, uploaded, setUploaded);

  return (
    <UIProvider>
      <div className="App">
        <Header />
        <SendImageButton setUploaded={setUploaded} />
        <CardList {...LGTMUrls} />
        <Pagination activePage={activePage} setActivePage={setActivePage} />
      </div>
    </UIProvider>
  );
}

export default App;
