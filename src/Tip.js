import {useState, useEffect} from 'react';
const Tip = ({handleTip, resetTip, setResetTip, setTip}) => {
    const buttons = [
        {label: "5%", amount: 0.05, id: 1},
        {label: "10%", amount: 0.1,id: 2},
        {label: "15%", amount: 0.15,id: 3},
        {label: "25%", amount: 0.25,id: 4},
        {label: "50%", amount: 0.5, id: 5},
        {label: "Custom", amount: 0,id: 6}
    ]

    const [activeButton, setActiveButton] = useState(null);
    const [isCustom, setIsCustom] = useState(false);
    const [customTip, setCustomTip] = useState("");
    const handleClick = (button) => {
        if (button.id === 6) {
            setIsCustom(!isCustom);
            setActiveButton(button.id);
        } else {
            setActiveButton(button.id);
            handleTip(button.amount);
        }
        console.log(isCustom);
    }
    const getButtonStyle = (button) => {
        if (button.id === activeButton) {
            return {
                backgroundColor: "hsl(172, 67%, 45%)",
                color: "white",
                border: "none",
                padding: "0.5rem 0",
                width: "49%",
                borderRadius: "0.2rem",
                marginTop: "0.5rem"
            }
        } else {
            return {
                backgroundColor: "hsl(183, 100%, 15%)",
                color: "white",
                border: "none",
                padding: "0.5rem 0",
                width: "49%",
                borderRadius: "0.2rem",
                marginTop: "0.5rem"
            }
        }
    }
    useEffect(() => {
        if (resetTip) {
            setActiveButton(null);
            setResetTip(false);
            setIsCustom(false);
            setCustomTip("");
        };
    }, [resetTip])
    return (
        <div className="tip-div">
                <p>Select Tip %</p>
                <div className="tip-content d-flex flex-row flex-wrap justify-content-between">
                    {
                        buttons.map((button) => {
                            if (isCustom && button.id === 6) {
                                return <input key={button.id} onChange={(e)=>{
                                        if (parseFloat(e.target.value) >= 0) {
                                            setCustomTip(e.target.value);
                                            setTip(parseFloat(e.target.value)/100);
                                        }
                                }} value={customTip} type="number" placeholder='0' id="customTip"></input>
                            } else {
                                return <button key={button.id} onClick={() => handleClick(button)} value={button.value} style={getButtonStyle(button)}>{button.label}</button>
                            }
                        })
                    }
                </div>        
        </div>
    )
}
export default Tip;