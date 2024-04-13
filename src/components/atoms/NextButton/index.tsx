type NextButtonProps = {
    clickHandler: () => void;
}

const NextButton = ({ clickHandler }: NextButtonProps) => {
    const styles = {
        nextButton: 'inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180',
    }

    return (
        <li>
            <a
                onClick={clickHandler}
                className={styles.nextButton}
            >
                <span className="sr-only">Next Page</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                    />
                </svg>
            </a>
        </li>
    )
}

export default NextButton;
