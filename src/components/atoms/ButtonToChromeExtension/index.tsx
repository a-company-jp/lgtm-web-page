const ButtonToChromeExtension = (): JSX.Element => {

  // TODO: set environment variable
  const EXTENSION_PAGE_URL = "set environment variable here";

  const styles = {
      btn: "inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-900 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring",
      text: "text-sm font-medium",
  }

  const goToChromeExtensionPage = () => {
    window.open(EXTENSION_PAGE_URL, '_blank');
  }

  return (
      <button
          className={styles.btn}
          type="button"
          onClick={goToChromeExtensionPage}
      >
          <span className={styles.text}> Chrome Extension </span>

          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
          >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
          </svg>
      </button>
  )
}

export default ButtonToChromeExtension
