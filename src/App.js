import Logo from "./components/Logo";
import Form from "./components/Form";
import { login } from "./services/authService";

function App() {
  return (
    <div className="App">
        <Logo/>
        <Form loginAuth={login}/>

    </div>
  );
}

export default App;
