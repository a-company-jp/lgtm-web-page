import React from "react";
import Card, { CardProps } from "../Card";
import { Pagination } from "@yamada-ui/react";

type CardListProps = CardProps[];

function CardList(props: CardListProps) {
  const cardDataArray = Object.values(props);

  const styles = {
    container: "flex flex-col",
    grid: "grid grid-cols-3 gap-4",
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.grid} my-4`}>
        {cardDataArray.map((card) => (
          <Card {...card} />
        ))}
      </div>
      <Pagination total={10} />
    </div>
  );
}

export default CardList;
