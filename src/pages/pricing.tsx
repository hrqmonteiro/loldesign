import Head from 'next/head'
import Link from 'next/link'
import Table from '../components/ui/Table/Table'

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Custos | Telzir</title>
      </Head>

      <div className="grid grid-cols-1 text-center py-6 lg:py-20">
        <h2 className="text-4xl lg:text-6xl font-bold font-serif mb-20">
          Compare os benefícios
          <br />
          ao usar o plano{' '}
          <span className="border-b-4 border-yellow-500">Fale Mais!</span>
        </h2>

        <div className="flex flex-wrap justify-center">
          <h3 className="text-3xl w-full font-medium mb-6">
            Custos <span className="italic font-light">(sem plano)</span>
          </h3>
          <div className="h-1.5 w-20 bg-orange-500 mb-6" />
        </div>
        <div className="w-full grid grid-cols-1 gap-1 mb-12">
          <h4 className="text-md lg:text-center text-left w-full mt-6 mb-12 px-4">
            No plano normal, você fala de uma cidade para outra por uma tarifa
            fixa, confira na tabela ao lado os preços da origem para o destino,
            com cada respectiva tarifa.
          </h4>
          <Table />
        </div>
        <div className="flex flex-wrap justify-center">
          <h3 className="text-3xl w-full font-medium mb-6">
            Custos{' '}
            <span className="italic font-light">
              (com o plano{' '}
              <span className="font-bold border-b-4 border-yellow-400">
                FaleMais
              </span>{' '}
              )
            </span>
          </h3>
          <div className="h-1.5 w-20 bg-orange-500 mb-6" />
        </div>
        <div className="w-full grid grid-cols-1 gap-1">
          <h4 className="text-md lg:text-center text-left w-full mt-6 mb-12 px-4">
            Com o plano FaleMais, você tem minutos ilimitados até o valor que
            escolher (Plano FaleMais <span className="italic">30, 40</span> ou{' '}
            <span className="italic">60</span>) e só paga o excedente!
          </h4>
          <span>
            Clique{' '}
            <Link href="/learnmore">
              <a className="font-bold text-orange-500 hover:underline transition-all duration-200">
                aqui
              </a>
            </Link>{' '}
            para saber mais e calcular os custos com o nosso plano FaleMais!
          </span>
        </div>
      </div>
    </>
  )
}
