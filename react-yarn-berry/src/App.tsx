import { useState } from "react";
import styled from "styled-components";

import "./App.css";

function App() {
  const colors: { [key: string]: string } = {
    0: "D07000",
    1: "B1B2FF",
    2: "EEE3CB",
    3: "967E76",
    4: "6FEDD6",
    5: "D61C4E",
    6: "D61C4E",
    7: "874C62",
    8: "A62349",
    9: "96E5D1",
  };

  const [color, setColor] = useState("");

  const handleClick = () => {
    const selector = String(Math.floor(Math.random() * 10));
    setColor(colors[selector]);
  };

  return (
    <div>
      <StyledButton color={`#${color}`} onClick={handleClick}>
        currentColor: #{color}
      </StyledButton>
    </div>
  );
}

export default App;

const StyledButton = styled.button`
  color: ${(props: any) => props.color};
`;
