import { Link } from "react-router-dom";

function Hint() {
  //this function give the user a random hint when clicked
  function hint() {
    let arr = [
      "You can press the restart button to restart the game and get a different word",
      "Dont over think it",
      "You just discovered the hint button!",
      "Try the letter 'e' (wink wink) ;)",
      "if all fails just inspect the page and cheat, but u didnt hear that from me..wink;)",
    ];
    let ran = Math.floor(Math.random() * 5 + 1);
    if (ran === 1) {
      alert(arr[0]);
    }
    if (ran === 2) {
      alert(arr[1]);
    }
    if (ran === 3) {
      alert(arr[2]);
    }
    if (ran === 4) {
      alert(arr[3]);
    }
    if (ran === 5) {
      alert(arr[4]);
    }
  }

  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <div
        id="hint"
        style={{
          position: "relative",
          right: "0",
          textAlign: "right",
          marginRight: "50px",
          marginLeft: "50px",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <input
          type="button"
          onClick={() => hint()}
          value="hint"
          style={{
            fontSize: "20px",
            borderRadius: "30px",
            width: "50px",
            height: "50px",
            backgroundColor: "white",
            borderColor: "black",
            borderStyle: "dotted",
          }}
        />
        <button
          type="submit"
          style={{
            float: "left",
            textAlign: "left",
            left: "0",
            borderRadius: "30px",
            width: "50px",
            height: "50px",
            backgroundColor: "white",
            borderColor: "black",
            borderStyle: "dotted",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            Go To Menu
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Hint;
