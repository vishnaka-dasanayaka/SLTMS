import { Vortex } from "react-loader-spinner";
function Spinner() {
  return (
    <div className="z-0 flex items-center justify-center w-screen h-screen">
      <div>
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </div>
    </div>
  );
}

export default Spinner;
