const ButtonToGitHub = (): JSX.Element => {
  const gitHubUrl = process.env.REACT_APP_GITHUB_URL;

  return (
    <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">
      <span
        className="text-2xl mb-2 hover:transition-all hover:font-bold"
        style={{ fontFamily: "thin" }}
      >
        GitHub Page
      </span>
    </a>
  );
};

export default ButtonToGitHub;
