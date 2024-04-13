const SiteTitle = () => {
    const styles = {
        container: "text-center sm:text-left",
        title: "text-2xl font-bold text-gray-900 sm:text-3xl",
        subTitle: "mt-1.5 text-sm text-gray-500",
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to LGTM Library</h1>
            <p className={styles.subTitle}>Let's give team members awesome LGTM easily 🎉</p>
        </div>
    )
}

export default SiteTitle;
