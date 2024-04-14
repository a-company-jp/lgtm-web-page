const ButtonToGitHub = (): JSX.Element => {
  const gitHubUrl = process.env.REACT_APP_GITHUB_URL;

  const styles = {
    btn: "inline-flex items-center justify-center gap-1.5 rounded-lg px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring",
    text: "text-sm font-medium",
  };

  return (
    <a
      href={gitHubUrl}
      className={styles.btn}
      type="button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.text}> GitHub Page </span>

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
    </a>
  );
};

export default ButtonToGitHub;
