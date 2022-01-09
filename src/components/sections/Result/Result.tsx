export default function Result(props: any) {
  const {
    dddOrigin,
    dddDestination,
    minutesSelected,
    planFaleMais,
    valueFaleMais,
    valueNormal,
  } = props

  return (
    <div className="flex justify-center items-center">
      <div className="p-6 lg:w-1/5 bg-gray-50 shadow-lg mb-12">
        <ul>
          <li className="w-full text-2xl font-bold font-serif p-2 mb-6">
            Plano{' '}
            <span className="border-b-4 border-orange-500">
              FaleMais {planFaleMais}
            </span>
          </li>
          <li>
            <span className="font-bold">DDD de Origem:</span> {dddOrigin}
          </li>
          <li>
            <span className="font-bold">DDD de Destino:</span> {dddDestination}
          </li>
          <li>
            <span className="font-bold">Minutos gastos:</span> {minutesSelected}{' '}
            minutos
          </li>
          <li>
            <span className="font-bold">Valor com o plano:</span>{' '}
            {valueFaleMais.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </li>
          <li>
            <span className="font-bold">Valor sem o plano:</span>{' '}
            {valueNormal.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </li>
        </ul>
      </div>
    </div>
  )
}
