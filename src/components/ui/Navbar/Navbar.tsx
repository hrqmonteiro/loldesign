import Link from 'next/link'

export default function Navbar(): JSX.Element {
  return (
    <>
      <div className="sticky w-full h-20 top-0 navbar mb-2 hover:shadow-lg bg-base-100 text-base transition-all duration-200">
        <div className="container mx-auto lg:px-60 px-6">
          <div className="flex-1 px-2 mx-2">
            <span className="text-2xl font-bold text-orange-500">
              <Link href="/">
                <a>Telzir</a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
