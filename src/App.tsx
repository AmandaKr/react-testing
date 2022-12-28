import "./App.css";
import { Application } from "./components/application/application";
import { Counter } from "./components/counter/counter";
import { AppProviders } from "./components/providers/app-providers";
import { MuiMode } from "./components/mui/mui-mode";
import { Skills } from "./components/skills/skills";
import { Users } from "./components/users/users";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Application />
        <Skills skills={["HTML", "CSS"]} />
        <Counter />
        <MuiMode />
        <Users />
      </div>
    </AppProviders>
  );
}

export default App;
