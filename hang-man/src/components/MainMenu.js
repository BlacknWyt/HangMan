import { Link } from "react-router-dom";
const pic = require("../images/state11.GIF");

function MainMenu() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        justifyContent: "center",
        textAlign: "center",
        margin: "0",
        padding: "0",
        backgroundColor: "lightblue",
      }}
    >
      <img src={pic} style={{ paddingTop: "100px" }} alt="hangman" />
      <div
        style={{
          margin: "50px",
          padding: "50px",
          height: "300px",
          textAlign: "center",
          justifyContent: "end",
        }}
      >
        <h1 style={{ color: "black" }}>Welcome to HangMan</h1>
        <button>
          <Link to="/game" style={{ textDecoration: "none", fontSize: "20px" }}>
            Play Normal Game
          </Link>
        </button>
        <br />
        <br />
        <button>
          <Link
            to="/gameSetHard"
            style={{
              textDecoration: "none",
              fontSize: "20px",
              backgroundColor: "red",
              borderColor: "red",
            }}
          >
            Play Hard Game
          </Link>
        </button>
      </div>
      <img src={pic} style={{ paddingTop: "100px" }} alt="hangman" />
    </div>
  );
}

export default MainMenu;
