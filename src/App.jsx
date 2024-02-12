import { useState } from 'react'
import {InputBox} from './Components'
import useCurrency from './Custom/useCurrency'
import './App.css'
function App() {
  const [amount,setAmount] =useState("")
  const [from,setFrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const [convertedAmount,setConvertedAmount]=useState("")
  const currency = useCurrency(from)
  const options=Object.keys(currency)
  console.log(options)
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert=()=>setConvertedAmount(amount*currency[to])
  return(
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage:`url("https://images.pexels.com/photos/20057853/pexels-photo-20057853/free-photo-of-matterhorn-covered-with-snow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-100 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <h1 className='text-3xl text-center mb-3 font-extrabold'>CURRENCY CONVERTOR</h1>
          <form onSubmit={(e)=>{
            e.preventDefault()
            convert()
          }} >
            <div className='w-full mb-1'>
              <InputBox
              label="From"
              amount={amount}
              currencyoption={options}
              onCurrencyChange={(currency)=>setFrom(currency)}
              onAmountChange={(amount)=>setAmount(amount)}
              currency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
              type='button'
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-400 text-white
              px-2 py-0.5' onClick={swap}>Swap</button>
            </div>
            <div className='w-full mb-1'>
              <InputBox
              label="To"
              amount={convertedAmount}
              currencyoption={options}
              onCurrencyChange={(currencychange)=>setTo(currencychange)}
              onAmountChange={(convertedAmountchange)=>setConvertedAmount(convertedAmountchange)}
              currency={to}
              />
            </div>
            <button
            type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert {from.toUpperCase()} To {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
