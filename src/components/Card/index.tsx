import React from 'react'
import { FaRegCopy } from "react-icons/fa";
import { imageCopy } from '../../utils';


export type CardProps = {
    imageUrl: string
    title?: string
}

const Card = ({ imageUrl, title }: CardProps) => {

    // TODO: refactor css
    const styles = {
        centering: 'flex justify-center items-center',
        card: 'w-full h-full rounded-xl',
        linkWrapper: 'group relative block bg-black w-full h-full justify-between rounded-xl',
        image: 'absolute inset-0 h-full w-full  opacity-75 transition-opacity group-hover:opacity-50 rounded-xl',
        title: 'text-xl font-bold text-white sm:text-2xl top-4',
        hoverBox: 'mt-20',
        copyBox: 'translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 mt-4',
    }

    return (
        <div className={`${styles.centering} ${styles.card}`}>
            <button onClick={() => imageCopy(imageUrl)} className={`${styles.linkWrapper}`}>
                <img alt="LGTMの画像" src={imageUrl} className={`${styles.image}`} />
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
