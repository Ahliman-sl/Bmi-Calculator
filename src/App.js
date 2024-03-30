import { useState } from "react";

export default function App() {
  return (
    <div className=" w-full h-screen bg-stone-950 flex justify-center items-center ">
      <BmiCalculator />
    </div>
  );
}

function BmiCalculator() {
  return (
    <div className="w-[60rem] h-max p-10 bg-orange-500  flex flex-col gap-3 rounded-xl m-5 ">
      <Title />
      <Calculator />
    </div>
  );
}

function Title() {
  return (
    <div className="w-full h-max bg-stone-400">
      <p className="uppercase text-3xl text-stone-800 font-bold text-center pt-5 sm:text-5xl pb-5 ">
        bmi calculator 📱
      </p>
    </div>
  );
}

function Calculator() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  function CalcBmi() {
    const heightInMeters = height / 100;
    const calculatedBmi = weight / (heightInMeters * heightInMeters);
    setBmi(calculatedBmi.toFixed(2));
  }

  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full mt-5 h-max">
      <div className="w-full h-max flex items-center justify-center flex-col sm:flex-row">
        <p className="text-3xl sm:text-4xl">Weight : {weight} kg</p>
        <input
          type="range"
          min={50}
          max={200}
          className="w-50 h-4 sm:w-50 sm:h-20 ml-4 mt-3"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
      </div>
      <div className="w-full h-max flex items-center justify-center flex-col sm:flex-row">
        <p className="text-3xl sm:text-4xl">Height : {height} sm</p>
        <input
          type="range"
          min={50}
          max={200}
          className="w-50 h-4 ml-4 mt-3"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
        />
      </div>

      <div className="mt-2">
        <button
          className="w-[5rem] h-[2rem] rounded-md text-center text-md font-bold bg-sky-700 hover:bg-sky-400"
          onClick={CalcBmi}
        >
          Calc
        </button>
      </div>

      <div className="text-center text-3xl">
        <p className="flex flex-col justify-center items-center text-center">
          <span>Your BMI is : </span>
          <span className="w-40 h-20 rounded-xl text-stone-50 bg-sky-700 mt-2 flex justify-center items-center">
            {bmi}
          </span>
        </p>
      </div>
    </div>
  );
}
