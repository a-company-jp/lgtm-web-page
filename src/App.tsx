import "./App.css";
import "./font/LINESeedJP_OTF_Rg.woff";
import "./font/LINESeedJP_OTF_Bd.woff";
import "./font/LINESeedJP_OTF_Th.woff";
import CardList from "./components/features/CardList";
import { Loading, UIProvider } from "@yamada-ui/react";
import { useEffect } from "react";
import Sidebar from "./components/features/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getLgtms } from "./store/lgtmListSlice";
import { AppDispatch, RootState } from "./store";

function App() {
  const { lgtms, loading } = useSelector((state: RootState) => state.lgtms);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getLgtms());
  }, [dispatch]);

  const styles = {
    container: "grid grid-cols-7 h-screen w-screen",
    content:
      "col-span-5 flex text-center justify-center max-h-full overflow-auto",
  };

  return (
    <UIProvider>
      <div className={styles.container} style={{ fontFamily: "regular" }}>
        <Sidebar className="col-span-2" />
        <div className={styles.content}>
          {loading ? (
            <div className="h-full flex justify-center items-center">
              <Loading size="3xl" />
            </div>
          ) : (
            <CardList lgtms={lgtms} />
          )}
        </div>
      </div>
    </UIProvider>
  );
}

export default App;
