import PrevButton from "../atoms/PrevButton"
import NextButton from "../atoms/NextButton"
import usePagination from "../../hooks/usePagination"
import { useEffect } from "react";
import { set } from "react-hook-form";

type PaginationProps = {
    fetchLGTMsBy: (page: number) => void;
}

export const Pagination = ({ fetchLGTMsBy }: PaginationProps) => {

    // TODO: set the maximum number of pages from the server
    const MAX_PAGE = 30;

    const { activePage, pageNums, setActivePage } = usePagination(MAX_PAGE);

    const styles = {
        container: 'flex justify-center gap-1 text-xl font-medium h-14 mt-4',
        item: "block size-12 rounded border border-gray-200 bg-white text-center leading-10 text-gray-900 hover:bg-gray-200",
        itemBox: "flex items-center",
        active: "block size-12 rounded border-blue-600 bg-blue-600 text-center leading-10 text-white",
    }

    const clickHandler = (page: number) => {
        fetchLGTMsBy(page);
        setActivePage(page);
    }

    return (
        <ol className={styles.container}>
            <li className={styles.itemBox}>
                <PrevButton clickHandler={() => clickHandler(activePage - 1)} />
            </li>
            {pageNums.map((pageNum) => {
                return (
                    activePage === pageNum ? (
                        <li className={styles.itemBox}>
                            <a
                                onClick={() => clickHandler(pageNum)}
                                className={styles.active}
                            >
                                {pageNum}
                            </a>
                        </li>
                    ) : (
                        <li className={styles.itemBox}>
                            <a
                                onClick={() => clickHandler(pageNum)}
                                className={styles.item}
                            >
                                {pageNum}
                            </a>
                        </li>
                    )
                )
            })}
            <li className={styles.itemBox}>
                <NextButton clickHandler={() => clickHandler(activePage + 1)} />
            </li>
        </ol>
    )
}

