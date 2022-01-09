import Link from 'next/link'

interface Props {
  title?: string
  url?: any
}

export default function Button(props: Props): JSX.Element {
  return (
    <Link href={props.url}>
      <a>
        <button className="bg-orange-500 hover:bg-transparent border-2 border-orange-500 p-3 rounded-md w-52 m-2 transition-all duration-200 hover:text-orange-500 text-white font-medium">
          {props.title}
        </button>
      </a>
    </Link>
  )
}
