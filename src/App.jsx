
import bmi from "./assets/images/bmi.png"
import { useState } from 'react'


export default function App() {

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0)
  const [bmivalue, setBmiValue] = useState(null);
  const [bmiStatus, setBmiStatus] = useState('')

  function CalculateBmi() {
    if (height && weight) {
      const heightMeters = Number(height) / 100;
      const result = Number(weight) / (heightMeters * heightMeters);
      setBmiValue(result.toFixed(2))
      if (bmivalue < 18.5) {
        setBmiStatus("Under Weight")
      }
      else if (bmivalue >= 18.5 && result < 24.9) {
        setBmiStatus("Normal Weight")
      }
      else if (bmivalue >= 25 && result < 29.9) {
        setBmiStatus("Overweight")
      }
      else {
        setBmiStatus("Obese")
      }
    }
    else {
      setBmiValue(null);
      setBmiStatus('')
    }
  }
  return (
    <>
      <main className="min-h-screen flex items-center justify-center">
        <div className="border flex flex-col md:flex-row">
          <div className=" flex-1 flex items-center p-4 justify-center bg-blue-100">
            <img src={bmi} className="h-24 w-full object-contain object-center" />
          </div>
          <div className="flex flex-col flex-1 items-center p-3">
            <h1>BMI Calculator</h1>
            <div className=" p-2">
              <label htmlFor="height">Height (cm)</label>
              <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} className="px-2 py-1 font-outfit bg-gray-500 outline-none" />
            </div>
            <div className=" p-2">
              <label htmlFor="height">Weight (Kg)</label>
              <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} className="px-2 py-1 font-outfit bg-gray-500 outline-none" />
            </div>
            <div className="my-4">
              <button onClick={CalculateBmi} className="bg-blue-400 px-2 py-1 rounded-md hover:bg-blue-500 transition active:scale-95">Calculate BMI</button>
            </div>

            {bmivalue !== null && (<div className="text-left border-2 border-blue-200 p-2 w-full">
              <h2 className="font-outfit">Your BMI is: <span className="text-red-500">{bmivalue}</span></h2>
              <h2 className="font-outfit">status:  <span className="text-red-500">{bmiStatus}</span></h2>
            </div>)}
          </div>
        </div>
      </main>

    </>
  );
}
