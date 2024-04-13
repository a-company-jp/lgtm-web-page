import { useEffect, useState } from 'react';

const usePagination = (maxPage: number) => {

    const NUM_DISPLAY_PAGE = 5;

    const [activePage, setActivePage] = useState(1);
    const [pageNums, setPageNums] = useState<number[]>([1, 2, 3, 4, 5]);


    useEffect(() => {
        if (activePage < 1) {
            setActivePage(1);
            setPageNums(generatePageNums(1));
        } else if (activePage > maxPage) {
            setActivePage(maxPage);
            setPageNums(generatePageNums(maxPage));
        } else {
            setPageNums(generatePageNums(activePage));
        }
    }, [activePage]);

    const generatePageNums = (numActivePage: number): number[] => {
        // small page number case
        if (numActivePage < 3) {
            return [1, 2, 3, 4, 5];
        } else if (numActivePage > maxPage - 3) { // large page number case
            return Array.from({ length: NUM_DISPLAY_PAGE }, (_, index) => {
                return maxPage - 4 + index;
            });
        }

        // usual case
        return Array.from({ length: NUM_DISPLAY_PAGE }, (_, index) => {
            return numActivePage - 2 + index;
        });
    }



    return { activePage, pageNums, setActivePage };
}

export default usePagination;
