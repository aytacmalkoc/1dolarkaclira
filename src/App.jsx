import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [usd, setUsd] = useState(0)
  const [lastUpdate, setLastUpdate] = useState('');

  useEffect(() => {
    fetchExchangeRates()
  }, [])

  const fetchExchangeRates = async () => {
    const { data } = await axios.get('https://tcmb-exchange-rates-api.vercel.app/exchange-rates');

    setUsd(data.exchangeRates.usd.banknoteBuying);
    setLastUpdate(data.last_update.date_tr);
  }

  return (
    <>
      <div>
        <h1>1 Dolar Kaç Türk Lirası?</h1>
      </div>
      <div className="card">
        1 Dolar = {usd.toFixed(2)} Türk Lirası
      </div>
      <p className="read-the-docs">
        Kur verileri TCMB'nin yayınlamış olduğu güncel resmi verilerdir.
      </p>
      <p>
        <span className="read-the-docs">Son Güncelleme:</span> <code>{lastUpdate}</code>
      </p>
    </>
  )
}

export default App
