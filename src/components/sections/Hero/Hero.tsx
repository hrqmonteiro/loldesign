import Button from '../../ui/Button/Button'

export default function Hero(): JSX.Element {
  return (
    <>
      <section
        id="home"
        className="w-full h-screen flex justify-center items-center"
      >
        <div className="lg:px-28 flex flex-wrap justify-center items-start text-center">
          <div>
            <h1 className="font-serif font-bold text-4xl lg:text-8xl mb-16 mx-4">
              Você não precisa mais gastar uma fortuna para falar com{' '}
              <span className="lg:border-b-8 border-b-4 border-yellow-500">
                quem ama!
              </span>
            </h1>
            <h2 className=" font-light text-2xl lg:text-3xl mx-4 mb-12">
              Com o plano <span className="font-medium">Fale Mais</span> da
              <br />
              <span className="font-medium italic">Telzir</span>, os seus
              problemas acabaram!
            </h2>
            <div className="flex flex-wrap justify-center items-center">
              <Button title="Saiba Mais" url="/learnmore" />
              <Button title="Compare os custos" url="/pricing" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
