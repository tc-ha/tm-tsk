import { useState } from "react";
import { TextField, Button } from "@mui/material";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [e, setE] = useState("");

  const handleClick = () => {
    setC(a.length);
    setD(a.indexOf(b) + 1);
    setE(a.indexOf(b) + b.length);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <TextField
          label="바코드"
          value={a}
          onChange={(e) => setA(e.target.value)}
          style={{ margin: "5px", textAlign: "center" }}
        />
        <TextField
          label="중량"
          value={b}
          onChange={(e) => setB(e.target.value)}
          style={{ margin: "5px", textAlign: "center" }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          style={{
            margin: "5px",
            width: `${
              2 *
              Number.parseInt(
                window.getComputedStyle(document.querySelector("button")).width
              )
            }px`
          }}
        >
          Button
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <TextField
          label="길이"
          value={c}
          InputProps={{ readOnly: true }}
          style={{ margin: "5px", textAlign: "center" }}
        />
        <TextField
          label="시작 위치"
          value={d}
          InputProps={{ readOnly: true }}
          style={{ margin: "5px", textAlign: "center" }}
        />
        <TextField
          label="끝 위치"
          value={e}
          InputProps={{ readOnly: true }}
          style={{ margin: "5px", textAlign: "center" }}
        />
      </div>
    </div>
  );
}

export default App;
