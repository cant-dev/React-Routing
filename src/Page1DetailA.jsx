import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h1>PageDetailAです</h1>
    </div>
  );
};
