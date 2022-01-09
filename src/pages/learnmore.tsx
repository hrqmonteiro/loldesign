/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Result } from '../components'
import {
  calculateFaleMaisPlan,
  calculateNormalPlan,
} from '../components/sections/Calculate'

export default function LearnMore() {
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState([])
  const [plan, setPlan] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [selectedDestination, setSelectedDestination] = useState(0)
  const [cardDDDOrigin, setCardDDDOrigin] = useState(0)
  const [cardDDDDestination, setCardDDDDestination] = useState(0)
  const [cardMinutesSelected, setCardMinutesSelected] = useState(0)
  const [cardPlanFaleMais, setCardPlanFaleMais] = useState(0)
  const [cardValueFaleMais, setCardValueFaleMais] = useState(0)
  const [cardValueNormal, setCardValueNormal] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (Number(minutes) > 0) {
      let dddOrigin = Number(origin)
      let dddDestination = Number(selectedDestination)
      let planFaleMais = Number(plan)
      let minutesSelected = Number(minutes)

      let valueFaleMais = calculateFaleMaisPlan(
        minutesSelected,
        planFaleMais,
        dddOrigin,
        dddDestination
      )

      let valueNormal = calculateNormalPlan(
        minutesSelected,
        dddOrigin,
        dddDestination
      )

      setCardDDDOrigin(dddOrigin)
      setCardDDDDestination(dddDestination)
      setCardMinutesSelected(minutesSelected)
      setCardPlanFaleMais(planFaleMais)
      setCardValueFaleMais(valueFaleMais)
      setCardValueNormal(valueNormal)
    } else {
      alert('Preencha os campos')
    }
  }

  const handleOriginChange = (e: any) => {
    setOrigin(e.target.value)
    console.log(origin)
  }

  const handlePlanChange = (e: any) => {
    setPlan(e.target.value)
    console.log(plan)
  }

  const handleMinutesChange = (e: any) => {
    setMinutes(e.target.value)
    console.log(minutes)
  }

  const handleSelectedDestinationChange = (e: any) => {
    setSelectedDestination(e.target.value)
    console.log(selectedDestination)
  }

  const addDestinations = () => {
    origin !== '011' && origin !== ''
      ? setDestination(['011'])
      : origin === ''
      ? setDestination([])
      : setDestination(['016', '017', '018'])
  }

  useEffect(() => {
    addDestinations()
  }, [handleOriginChange])

  return (
    <>
      <Head>
        <title>Custos | Telzir</title>
      </Head>

      <div className="grid grid-cols-1 text-center py-6 lg:py-20">
        <h2 className="text-4xl lg:text-6xl font-bold font-serif mb-20">
          Calcule os custos de ligação
          <br />
          com o plano{' '}
          <span className="border-b-4 border-yellow-500">Fale Mais!</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-wrap justify-center items-center"
        >
          <select
            onChange={handleOriginChange}
            className="select select-bordered font-regular text-gray-400 w-full max-w-xs m-4"
          >
            <option value="">DDD Origem</option>
            <option value="011">011</option>
            <option value="016">016</option>
            <option value="017">017</option>
            <option value="018">018</option>
          </select>
          <select
            onChange={handleSelectedDestinationChange}
            className="select select-bordered font-regular text-gray-400 w-full max-w-xs m-4"
          >
            <option value="">DDD Destino</option>
            {destination.map((option, index) => {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              )
            })}
          </select>
          <select
            onChange={handlePlanChange}
            className="select select-bordered font-regular text-gray-400 w-full max-w-xs m-4"
          >
            <option value="">Plano</option>
            <option value="30">FaleMais 30</option>
            <option value="60">FaleMais 60</option>
            <option value="120">FaleMais 120</option>
          </select>
          <div className="form-control w-full max-w-xs my-4">
            <input
              onChange={handleMinutesChange}
              type="number"
              placeholder="Minutos de ligação"
              className="w-full max-w-xs input input-bordered font-bold lg:mx-4"
            />
          </div>
          <button className="w-full max-w-xs btn my-4" type="submit">
            Calcular
          </button>
        </form>
      </div>
      {cardDDDOrigin !== 0 &&
        cardDDDDestination !== 0 &&
        cardMinutesSelected !== 0 &&
        cardPlanFaleMais !== 0 &&
        cardValueFaleMais !== 0 &&
        cardValueNormal !== 0 && (
          <Result
            dddOrigin={cardDDDOrigin}
            dddDestination={cardDDDDestination}
            minutesSelected={cardMinutesSelected}
            planFaleMais={cardPlanFaleMais}
            valueFaleMais={cardValueFaleMais}
            valueNormal={cardValueNormal}
          />
        )}
    </>
  )
}
