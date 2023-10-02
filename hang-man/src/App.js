import HangMan from "./components/Hangman";
import {Route, Routes} from 'react-router-dom'
import Hint from "./components/Hint";
import MainMenu from "./components/MainMenu";
import HangManHardMode from "./components/HangmanHardMode";
function App() {
  return (
    <>
      <Hint/>
      <Routes>
        <Route path='/' element={<MainMenu/>} />
        <Route path='/game' element={<HangMan/>} />
        <Route path='/gameSetHard' element={<HangManHardMode/>} />
      </Routes>
    </>
  );
}

export default App;
