type PrevButtonProps = {
    clickHandler: () => void;
}

const PrevButton = ({ clickHandler }: PrevButtonProps) => {
    const styles = {
        prevButton: 'inline-flex size-12 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 hover:bg-gray-200',
    }
    return (
        <button
            onClick={clickHandler}
            className={styles.prevButton}
        >
            <span className="sr-only">Prev Page</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                />
            </svg>
        </button>
    )
}

export default PrevButton;
