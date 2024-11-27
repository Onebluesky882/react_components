import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo style={{ borderRadius: "999px" }} />
      <HamburgerMenu />
    </HeaderContainer>
  );
};
const Logo = ({ style }: { style?: React.CSSProperties }) => {
  return (
    <>
      <img src="https://placehold.co/100x100" alt="" style={style} />
    </>
  );
};

const HeaderContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "30px 50px 30px 50px",
      }}
    >
      {children}
    </div>
  );
};
export default Header;
