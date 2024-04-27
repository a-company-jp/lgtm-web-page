import React, { useState } from "react";
import { FaRegCheckCircle, FaRegCopy } from "react-icons/fa";
import { imageCopy } from "../../utils";
import { Lgtm } from "../../types/lgtm";

interface Props {
  lgtm: Lgtm;
}

const Card = ({ lgtm }: Props) => {
  const [isCopying, setIsCopying] = useState(false);

  const handleCopyClick = async () => {
    await imageCopy(lgtm.url);
    setIsCopying(true);
    setTimeout(() => {
      setIsCopying(false);
    }, 2000);
  };

  // TODO: refactor css
  const styles = {
    card: "relative",
    linkWrapper: "group relative",
    image:
      "inset-0 h-full w-full transition-opacity group-hover:opacity-30 rounded-xl",
    checkCircleWrapper:
      "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center",
    checkCircle: "mr-2 text-green-500",
    copyMessage: "text-green-500 font-bold",
    copyIcon:
      "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-75 transition-opacity",
  };

  return (
    <div className="h-64 w-64 flex flex-col rounded bg-white shadow-lg">
      <button
        onClick={handleCopyClick}
        className="group relative flex h-40 flex-grow items-center justify-center p-2"
      >
        <img
          alt="LGTMの画像"
          src={lgtm.url}
          className="max-h-48 max-w-100 transition-opacity group-hover:opacity-30"
        />
        {isCopying ? (
          <div className={styles.checkCircleWrapper}>
            <FaRegCheckCircle
              className={styles.checkCircle}
              color=""
              size={35}
            />
            <span className={styles.copyMessage}>Copied!!</span>
          </div>
        ) : (
          <FaRegCopy className={styles.copyIcon} color="" size={35} />
        )}
      </button>
    </div>
    // <div className="max-h-[300px] max-w-[450px]">
    //   <div className={`${styles.card} max-h-[300px] max-w-[450px]`}>
    //     <button onClick={handleCopyClick} className={`${styles.linkWrapper}`}>
    //       <img alt="LGTMの画像" src={imageUrl} className={`${styles.image}`} />
    // {isCopying ? (
    //   <div className={styles.checkCircleWrapper}>
    //     <FaRegCheckCircle
    //       className={styles.checkCircle}
    //       color=""
    //       size={35}
    //     />
    //     <span className={styles.copyMessage}>Copied!!</span>
    //   </div>
    // ) : (
    //   <FaRegCopy className={styles.copyIcon} color="" size={35} />
    // )}
    //     </button>
    //   </div>
    // </div>
  );
};

export default Card;
