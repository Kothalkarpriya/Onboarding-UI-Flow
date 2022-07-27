import "./App.css";
import {
  SignUp,
  Navbar,
  Success,
  WorkSpaceDetails,
  WorkspaceFor,
} from "./components/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SignUp />
      <WorkSpaceDetails />
      <WorkspaceFor />
      <Success />
    </div>
  );
}

export default App;
