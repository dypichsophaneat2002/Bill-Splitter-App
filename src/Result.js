const Result = ({tipAmount, totalPerson,handleReset}) => {
    return (
        <>
            <div className="d-flex flex-row justify-content-between">
                <p className="text-white">Tip Amount<br></br><span className="small-text">/ person</span></p>
                <p className="big-text">{tipAmount ? `${tipAmount}` : "$0.00"}</p>
            </div>
            <div className="d-flex flex-row justify-content-between">
                <p className="text-white">Total<br></br><span className="small-text">/ person</span></p>
                <p className="big-text">{totalPerson ? `${totalPerson}` : "$0.00"}</p>
            </div>
            <button onClick={handleReset} className="reset-btn">RESET</button>
        </>
    )
}
export default Result;