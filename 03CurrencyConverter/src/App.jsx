import { useEffect, useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './customHooks/useCurrencyInfo'

function App() {

  const [from,setFrom] = useState("usd");
  const [to,setTo] = useState("usd");
  const [amount,setAmount] = useState(0);
  const [convertedAmount,setConvertedAmount] = useState(0);
  const [amountDisabled,setAmountDisabled] = useState(true);

  const currencyInfo = useCurrencyInfo(from);

  const currencyOptions = Object.keys(currencyInfo);

  const convert = () =>{
    setConvertedAmount(amount*currencyInfo[to]);
  }

  const swap = ()=> {
    setAmount(convertedAmount);
    setConvertedAmount(amount);
    setFrom(to);
    setTo(from);
  }

  useEffect(()=>{
    if(currencyInfo[to]!= undefined){
      convert();
    }
  },[amount,currencyInfo,to])

  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/4162016/pexels-photo-4162016.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                currency={from}
                                amount={amount}
                                onCurrencyChange={(currency)=>setFrom(currency)}
                                onAmountChange={(amount)=>setAmount(amount)}
                                currecnyOptions={currencyOptions}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                currency={to}
                                amount={convertedAmount}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                onAmountChange={(amount)=>setConvertedAmount(amount)}
                                currecnyOptions={currencyOptions}
                                amountDisabled = {amountDisabled}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
