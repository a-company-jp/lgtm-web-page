import React from "react";
import Card from "../Card";
import { Lgtm } from "../../../types/lgtm";

interface Props {
  lgtms: Lgtm[];
}

function CardList({ lgtms }: Props) {
  const styles = {
    container: "flex flex-col",
    grid: "grid grid-cols-3 gap-4",
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.grid} my-4`}>
        {lgtms.map((lgtm) => (
          <Card key={lgtm.id} lgtm={lgtm} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
