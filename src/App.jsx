import { useEffect, useState } from 'react'
import axios from 'axios'
import DotLoader from "react-spinners/DotLoader";
import './assets/App.css'

function App() {
  const [usd, setUsd] = useState(0)
  const [loading, setLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState('');

  useEffect(() => {
    fetchExchangeRates();
  }, [])

  const fetchExchangeRates = async () => {
    setLoading(true);
    const { data } = await axios.get('https://tcmb-exchange-rates-api.vercel.app/exchange-rates');

    setUsd(data.exchangeRates.usd.banknoteBuying);
    setLastUpdate(data.last_update.date_tr);
    setLoading(false);
  }

  return (
    <>
      <div>
        <img src="/assets/img/1dolarkaclira.png" alt="" style={{ width: 250 }} />
        <h1>1 Dolar Kaç Türk Lirası?</h1>
      </div>
      <div className='card'>
        <span className='usd'>1 Dolar</span>
        <span className='equality'>=</span>
        <span className='try'>
          {loading ? <DotLoader loading={loading} size={20} color='#f1592a' /> : <span>{usd.toFixed(2)}</span>}
          <span>Türk Lirası</span>
        </span>
      </div>
      <p className="read-the-docs">
        Kur verileri TCMB'nin yayınlamış olduğu güncel resmi verilerdir.
      </p>
      <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'center', columnGap: 5 }}>
        <span className="read-the-docs">Son Güncelleme:</span> {loading ? <DotLoader loading={loading} size={20} color='#f1592a' /> : <code>{lastUpdate}</code>}
      </div>
    </>
  )
}

export default App
