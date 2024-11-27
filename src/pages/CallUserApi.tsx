import InfoContainer from "../components/InfoContainer";
import InputContainer from "../components/InputContainer";
import useUser from "../hooks/useUser";

const CallUserApi = () => {
  const { user, loadUser, loading, setUserId, userId } = useUser();
  return (
    <div className="App">
      <h1>User Dashboard</h1>
      <InputContainer
        style={{}}
        loadUser={loadUser}
        loading={loading}
        setUserId={setUserId}
        userId={userId}
      />
      <InfoContainer loading={loading} user={user} />
    </div>
  );
};
export default CallUserApi;
