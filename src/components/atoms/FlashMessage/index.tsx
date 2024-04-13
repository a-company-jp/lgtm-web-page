import React from 'react'

type FlashMessageProps = {
    imageUrl: string;
    success?: boolean;
}

const FlashMessage = ({imageUrl, success = true}: FlashMessageProps) => {

    const color = success ? "bg-indigo-600" : "bg-red-600";
    const message = success ? "Image upload successful!" : "Image upload failed.";

    const viewImageInNewTab = () => {
        window.open(imageUrl, "_blank");
    }

    const styles = {
        container: `px-4 py-3 text-white ${color}`,
        message: "text-center text-sm font-medium",
        link: "inline-block underline"
    }

    return (
        <div className={styles.container}>
            <p className={styles.message}>
                {message}
                <br />
                <a className={styles.link} onClick={viewImageInNewTab}>View image in new tab</a>
            </p>
        </div>
    )
}

export default FlashMessage

