const NumberPeople = ({zeroError,numPeople, handleNumPeople}) => {
    return (
        <div className="number-people">
            <div className="d-flex flex-row align-items-baseline justify-content-between">
                <p>Number of People</p>
                {zeroError && <p className="warning-text">Can't be zero</p>}
            </div>
            
            <input onChange={(e) => handleNumPeople(e)} placeholder="0" className="numPeople-input text-end px-3" value={numPeople} type="number" id="numberOfPeople"></input>
        </div>
    )
}
export default NumberPeople;