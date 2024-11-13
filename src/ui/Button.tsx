import { Loading } from "./Loading";

export const Button = ({
  children,
  style,
  disabled,
  loading,
}: React.PropsWithChildren<{
  style: React.CSSProperties;
  disabled?: boolean;
  loading?: boolean;
}>) => {
  return (
    <button className="button" style={style} disabled={disabled || loading}>
      {loading && <Loading style={{ fontSize: "1px" }} />}
      {children}
    </button>
  );
};
