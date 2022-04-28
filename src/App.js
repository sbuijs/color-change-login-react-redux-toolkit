import './App.css';
import { Profile } from './components/profile'
import { Login } from './components/login'
import { ChangeColor } from './components/changeColor';

function App() {
  return (
    <div className="App">
      <ChangeColor >
        <Profile />
        <Login />
      </ChangeColor>
    </div>
  );
}

export default App;
