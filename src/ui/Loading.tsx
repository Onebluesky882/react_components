import css from "./Loading.module.css";
export const Loading = ({ style }: { style: React.CSSProperties }) => {
  return (
    <div className={css["lds-ring"]} style={style}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
