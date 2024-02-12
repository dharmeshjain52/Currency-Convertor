import React, { useId } from "react";
function InputBox({
label,
amount,
onAmountChange,
onCurrencyChange,
currencyoption=[],
currency="usd",
className=""
}){
    const amountinputId=useId()
    return(
        <div className={`bg-white p-3 rounded-lg test-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountinputId} className="text-black mb-2 inline-block">{label}</label>
                <input
                id={amountinputId}
                className="outline-none w-full bg-transparent py-1.5" 
                type="number" 
                placeholder="Amount"
                value={amount}
                onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}/>
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black mb-2 w-full">Currency type</p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                value={currency}
                onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}>
                    {currencyoption.map((currency)=>(
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div> 
        </div>
    )
}

export default InputBox