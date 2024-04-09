import React from 'react'
import { FaRegCopy } from "react-icons/fa";

import useClipboard from '../../hooks/useClipboard';

export type CardProps = {
    imageUri: string
    title?: string
}

const Card = ({ imageUri, title }: CardProps) => {

    const { setCopyText } = useClipboard();

    // TODO: refactor css
    const styles = {
        centering: 'flex justify-center items-center',
        card: 'w-full h-full',
        linkWrapper: 'group relative block bg-black w-full h-full justify-between',
        image: 'absolute inset-0 h-full w-full  opacity-75 transition-opacity group-hover:opacity-50',
        title: 'text-xl font-bold text-white sm:text-2xl top-4',
        hoverBox: 'mt-20',
        copyBox: 'translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 mt-4',
    }

    return (
        <div className={`${styles.centering} ${styles.card}`}>
            <button onClick={() => setCopyText(imageUri)} className={`${styles.linkWrapper}`}>
                <img alt="LGTMの画像" src={imageUri} className={`${styles.image}`} />

                <div className={`${styles.hoverBox} ${styles.centering}`}>
                    <div className={`${styles.copyBox}`}>
                        <FaRegCopy className='' color='white' size={50} />
                    </div>
                </div>

                <div className="relative p-4 sm:p-6 lg:p-8 pt-8 whitespace-no-wrap">
                    <p className={`${styles.title}`}>{title}</p>
                </div>
            </button>
        </div>

    )
}

export default Card
