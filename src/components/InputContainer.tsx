import { Button } from "../ui/Button";

const InputContainer = ({
  style,
  loadUser,
  setUserId,
  userId,
  loading,
}: {
  style: React.CSSProperties;
  loadUser: any;
  loading: boolean;
  setUserId: any;
  userId: string;
}) => {
  return (
    <div className="input-container">
      <h4>InputContainer</h4>
      <div className="input-div">
        <p>User Id</p>
        <form onSubmit={loadUser}>
          <input
            type="text"
            required
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <Button loading={loading} style={style}>
            Load
          </Button>
        </form>
      </div>
    </div>
  );
};
export default InputContainer;
