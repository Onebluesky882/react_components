import "./App.css";
import InfoContainer from "./components/InfoContainer";
import InputContainer from "./components/InputContainer";
import useUser from "./hooks/useUser";
function App() {
  const { user, loadUser, loading, setUserId, userId } = useUser();
  console.log("user:", user);
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
}
export default App;
