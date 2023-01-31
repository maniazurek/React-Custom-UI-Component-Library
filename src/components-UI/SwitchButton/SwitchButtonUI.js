import React, { useState } from "react";
import { SwitchButtonContainer, SwitchBall } from "./SwitchButtonStyles";

const SwitchButtonUI = () => {
  const [modeStyle, setModeStyle] = useState(false);

  // const toggleMode = () => {
  //   if (modeStyle === false) {
  //     setModeStyle("on");
  //   } else {
  //     setModeStyle("off");
  //   }
  // };

  return (
    <SwitchButtonContainer
      onClick={() => setModeStyle(!modeStyle)}
      mode={modeStyle ? true : false}
    >
      <SwitchBall mode={modeStyle ? true : false} />
    </SwitchButtonContainer>
  );
};

export default SwitchButtonUI;
