import './App.css';
import Total from './Total';
import {useState, useEffect} from "react";
import Tip from './Tip';
import NumberPeople from './NumberPeople';
import Result from './Result';
function App() {
  const [total, setTotal] = useState("");
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [tip, setTip] = useState(0);
  const [numPeople, setNumPeople] = useState("");
  const [zeroError, setZeroError] = useState(false);
  const [tipAmount, setTipAmount] = useState("");
  const [totalPerson, setTotalPerson] = useState("");
  const [resetTip, setResetTip] = useState(false);
  const handleChange = (e) => {
    setIsIncorrect(false);
    if (parseFloat(e.target.value) < 1) {
      setIsIncorrect(true);
    }
    setTotal(e.target.value);
  }
  const handleTip = (amount) => {
    setTip(amount);
  } 
  const handleNumPeople = (e) => {
    setZeroError(false);
    if (parseInt(e.target.value)=== 0) {
        setZeroError(true);
    } else {
      setNumPeople(e.target.value);
    }
  }
  const handleReset = () => {
    setTotal("");
    setIsIncorrect(false);
    setTip("");
    setNumPeople("");
    setZeroError(false);
    setTipAmount("");
    setTotalPerson("");
    setResetTip(true);
  }
  useEffect(()=> {
    if (tip && total && numPeople && !isIncorrect && !zeroError) {
      const tipAmt = total * tip;
      setTipAmount(tipAmt.toFixed(2));
      const totalPerPerson = (total / numPeople + tipAmt / numPeople).toFixed(2);
      setTotalPerson(totalPerPerson);
  }
  }, [tip, total, numPeople, isIncorrect, zeroError]);
  return (
    <div className="App text-center">
      <header>
        <h1 className="heading extra-space">SPLI</h1>
        <h1 className="heading">TTER</h1>
      </header>
      <main className="text-start">
        <div className="left-div">
          <p>Bill</p>
          <Total total={total} handleChange={handleChange} isIncorrect={isIncorrect} />
          <Tip handleTip={handleTip} resetTip={resetTip} setResetTip={setResetTip} setTip={setTip}/>
          <NumberPeople zeroError={zeroError} handleNumPeople={handleNumPeople} numPeople={numPeople}/>
        </div>
        <div className="total-div">
          <Result tipAmount={tipAmount} totalPerson={totalPerson} handleReset={handleReset} />
        </div>
      </main>
    </div>
  );
}

export default App;
