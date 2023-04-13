const Total = ({total, handleChange, isIncorrect}) => {
    return (
        <div className="input-div">
            <input onChange={(e) => handleChange(e)} value={total} type="number" id="total" placeholder="0" className="px-3 text-end"></input>
            {isIncorrect && <p className="warning-text">Please enter a correct  amount</p>}
        </div>
    )
}
export default Total;