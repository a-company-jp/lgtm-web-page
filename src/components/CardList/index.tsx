import React from 'react'
import Card, { CardProps } from '../Card'

type CardListProps = CardProps[]

function CardList(props: CardListProps) {

    const cardDataArray = Object.values(props)

    const styles = {
        grid: 'grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 md:grid-cols-2 md:gap-4 sm:grid-cols-2 sm:gap-4 mt-4 mx-6 lg:mx-36',
        gridItem: 'h-56 rounded-lg',
    }


    return (
        <div className={`${styles.grid}`}>
        {
            cardDataArray.map((card) => (
                <div className={`${styles.gridItem}`}>
                    <Card {...card} />
                </div>
            ))
        }
        </div>
    
    )
}

export default CardList
