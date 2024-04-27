import "./App.css";
import "./font/LINESeedJP_OTF_Rg.woff";
import "./font/LINESeedJP_OTF_Bd.woff";
import "./font/LINESeedJP_OTF_Th.woff";
import CardList from "./components/CardList";
import { UIProvider } from "@yamada-ui/react";
import { useState } from "react";
import useLGTMFetch from "./hooks/useLGTMFetch";
import Sidebar from "./components/Sidebar";

function App() {
  const [uploaded, setUploaded] = useState(false);
  const [activePage] = useState(1);
  const { LGTMUrls } = useLGTMFetch(activePage, uploaded, setUploaded);

  const styles = {
    container: "grid grid-cols-7 h-screen w-screen",
    content:
      "col-span-5 flex text-center justify-center max-h-full overflow-auto",
  };

  return (
    <UIProvider>
      <div className={styles.container} style={{ fontFamily: "regular" }}>
        <Sidebar
          className="col-span-2"
          uploaded={uploaded}
          setUploaded={setUploaded}
        />
        <div className={styles.content}>
          <CardList {...LGTMUrls} />
        </div>
      </div>
    </UIProvider>
  );
}

export default App;
