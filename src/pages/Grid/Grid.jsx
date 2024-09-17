import css from "./Grid.module.css";

const Grid = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.gridItem}>1</div>
        <div className={css.gridItem}>2</div>
        <div className={css.gridItem}>3</div>
        <div className={css.gridItem}>4</div>
        <div className={css.gridItem}>5</div>
        <div className={css.gridItem}>6</div>
        <div className={css.gridItem}>7</div>
        <div className={css.gridItem}>8</div>
        <div className={css.gridItem}>9</div>
        <div className={css.gridItem}>10</div>
        <div className={css.gridItem}>11</div>
        <div className={css.gridItem}>12</div>
      </div>
      <div className={css.secContainer}>
        <div className={css.gridItem}>1</div>
        <div className={css.gridItem}>2</div>
        <div className={css.gridItem}>3</div>
        <div className={css.gridItem}>4</div>
      </div>
      <div div className={css.thirdContainer}>
        <div className={css.gridItem}>1</div>
        <div className={css.gridItem}>2</div>
        <div className={css.gridItem}>3</div>
        <div className={css.gridItem}>4</div>
        <div className={css.gridItem}>5</div>
        <div className={css.gridItem}>6</div>
        <div className={css.gridItem}>7</div>
        <div className={css.gridItem}>8</div>
        <div className={css.gridItem}>cool</div>
        <div className={css.gridItem}>10</div>
      </div>
      <div div className={css.fourthContainer}>
        <div className={css.gridItem}>1</div>
        <div className={css.gridItem}>2</div>
        <div className={css.gridItem}>3</div>
        <div className={css.gridItem}>4</div>
        <div className={css.gridItem}>5</div>
        <div className={css.gridItem}>6</div>
        <div className={css.gridItem}>7</div>
        <div className={css.gridItem}>8</div>
        <div className={css.gridItem}>9</div>
        <div className={css.gridItem}>10</div>
      </div>
    </div>
  );
};

export { Grid };
