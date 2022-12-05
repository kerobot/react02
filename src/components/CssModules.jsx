import classes from "./CssModules.module.scss";

// node-sass をインポートしておく
// CSSモジュールを適用する方法
// SCSSファイルをインポートしてクラス名を参照して指定する
export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- CSS Modules -</p>
      <button className={classes.button}>FIGHT!!</button>
    </div>
  );
};
