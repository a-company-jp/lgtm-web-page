import PrevButton from "../../atoms/PrevButton";
import NextButton from "../../atoms/NextButton";
import useDisplayPageNums from "../../../hooks/useDisplayPage";

type PaginationProps = {
  activePage: number;
  setActivePage: (page: number) => void;
};

export const Pagination = ({ activePage, setActivePage }: PaginationProps) => {
  // TODO: set the maximum number of pages from the server
  const MAX_PAGE = parseInt(process.env.REACT_APP_MAX_PAGE || "20");

  const { pageNums } = useDisplayPageNums({ activePage, setActivePage });

  const styles = {
    container: "flex justify-center gap-1 text-xl font-medium h-14 mt-4",
    item: "block size-12 rounded border border-gray-200 bg-white text-center leading-10 text-gray-900 hover:bg-gray-200",
    itemBox: "flex items-center",
    active:
      "block size-12 rounded border-blue-600 bg-blue-600 text-center leading-10 text-white",
  };

  const clickHandler = (page: number) => {
    if (page < 1) {
      setActivePage(1);
      return;
    } else if (page > MAX_PAGE) {
      setActivePage(MAX_PAGE);
      return;
    } else {
      setActivePage(page);
    }
  };

  return (
    <ol className={styles.container}>
      <li className={styles.itemBox}>
        <PrevButton clickHandler={() => clickHandler(activePage - 1)} />
      </li>
      {pageNums.map((pageNum) => {
        return activePage === pageNum ? (
          <li className={styles.itemBox}>
            <button
              onClick={() => clickHandler(pageNum)}
              className={styles.active}
            >
              {pageNum}
            </button>
          </li>
        ) : (
          <li className={styles.itemBox}>
            <button
              onClick={() => clickHandler(pageNum)}
              className={styles.item}
            >
              {pageNum}
            </button>
          </li>
        );
      })}
      <li className={styles.itemBox}>
        <NextButton clickHandler={() => clickHandler(activePage + 1)} />
      </li>
    </ol>
  );
};
