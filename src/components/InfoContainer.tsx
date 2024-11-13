import { User } from "../hooks/useUser";
import { Loading } from "../ui/Loading";

const InfoContainer = ({
  user,
  loading,
}: {
  user: User | null;
  loading: boolean;
}) => {
  return (
    <div className="info-container">
      <h4>InfoContainer</h4>

      <div>
        {loading ? (
          <Loading style={{ fontSize: "8px" }} />
        ) : (
          <div className="info-div">
            <p> name : {user?.name}</p>
            <p>{user?.username}</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default InfoContainer;
