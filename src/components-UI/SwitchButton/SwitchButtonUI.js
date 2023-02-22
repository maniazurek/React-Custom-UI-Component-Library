import React, { useState } from "react";
import { SwitchButtonContainer, SwitchBall } from "./SwitchButtonStyles";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "./reducers/theme";

const SwitchButtonUI = () => {
  const [modeStyle, setModeStyle] = useState(false);
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  const themeColor = useSelector((store) => store.theme.value);

  // const toggleMode = () => {
  //   if (modeStyle === false) {
  //     setModeStyle("on");
  //   } else {
  //     setModeStyle("off");
  //   }
  // };

  return (
    <>
      <SwitchButtonContainer
        onClick={() => setModeStyle(!modeStyle)}
        mode={modeStyle}
      >
        <SwitchBall mode={modeStyle} />
      </SwitchButtonContainer>
      <div>
        <input type="text" onChange={(event) => setColor(event.target.value)} />
        <button
          style={{ color: themeColor }}
          onClick={() => {
            dispatch(changeColor(color));
          }}
        >
          Change Color
        </button>
      </div>
    </>
  );
};

export default SwitchButtonUI;
