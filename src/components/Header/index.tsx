import ButtonToChromeExtension from "../atoms/ButtonToChromeExtension";
import CopyrightPolicyButton from "../atoms/CopyrightPolicyButton";
import SiteTitle from "../atoms/SiteTitle";

const Header = () => {

    const styles = {
        header: "w-full  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-gray-200",
        container: "sm:flex sm:items-center sm:justify-between mx-auto max-w-6xl",
        title: "text-2xl font-bold text-gray-900 sm:text-3xl",
        subTitle: "mt-1.5 text-sm text-gray-500",
        btnContainer: "mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center",
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <SiteTitle />
                <div className={styles.btnContainer}>
                   <ButtonToChromeExtension />
                   <CopyrightPolicyButton />
                </div>
            </div>
        </header>
    )
}

export default Header;
