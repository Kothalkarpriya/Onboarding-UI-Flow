import { SignUp, Success, WorkSpaceDetails, WorkspaceFor } from "./index";
import { useDetailContext } from "../context/DetailContext";
import { useState } from "react";

export default function Form() {
  const { state } = useDetailContext();
  const [step, setStep] = useState(state.step);

  const nextStep = () => {
    setStep(step + 1);
  };

  switch (step) {
    case 1:
      return <SignUp nextStep={nextStep} />;
    case 2:
      return <WorkSpaceDetails nextStep={nextStep} />;
    case 3:
      return <WorkspaceFor nextStep={nextStep} />;
    case 4:
      return <Success nextStep={nextStep} />;
    default:
  }
}
