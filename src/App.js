import HangMan from "./components/hangman";
import {Route, Routes} from 'react-router-dom'
import Hint from "./components/hint";
import MainMenu from "./components/MainMenu";
import HangManHardMode from "./components/hangmanHardMode";
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
