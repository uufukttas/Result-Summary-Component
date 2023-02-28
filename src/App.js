import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

const App = () => {
  return (
    <div className="card-container w-full h-screen flex justify-center items-center">
      <LeftSide/>
      <RightSide/>
    </div>
  );
}

export default App;
