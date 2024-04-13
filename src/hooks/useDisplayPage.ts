import { useEffect, useState } from 'react';

type UsePaginationProps = {
    activePage: number;
    setActivePage: (num: number) => void;
}

const useDisplayPageNums = ({ activePage, setActivePage }: UsePaginationProps) => {

    // TODO: make it dynamic
    const NUM_MAX_PAGE = parseInt(process.env.REACT_APP_MAX_PAGE || '20');
    const NUM_DISPLAY_PAGE = 5;

    const [pageNums, setPageNums] = useState<number[]>([1, 2, 3, 4, 5]);


    useEffect(() => {
        if (activePage < 1) {
            setActivePage(1);
            setPageNums(generatePageNums(1));
        } else if (activePage > NUM_MAX_PAGE) {
            setActivePage(NUM_MAX_PAGE);
            setPageNums(generatePageNums(NUM_MAX_PAGE));
        } else {
            setPageNums(generatePageNums(activePage));
        }
    }, [activePage]);

    const generatePageNums = (numActivePage: number): number[] => {
        // small page number case
        if (numActivePage < 3) {
            return [1, 2, 3, 4, 5];
        } else if (numActivePage > NUM_MAX_PAGE - 3) { // large page number case
            return Array.from({ length: NUM_DISPLAY_PAGE }, (_, index) => {
                return NUM_MAX_PAGE - 4 + index;
            });
        }

        // usual case
        return Array.from({ length: NUM_DISPLAY_PAGE }, (_, index) => {
            return numActivePage - 2 + index;
        });
    }



    return { pageNums };
}

export default useDisplayPageNums;
