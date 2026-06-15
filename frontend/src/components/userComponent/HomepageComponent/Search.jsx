import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'

const Search = () => {
  const inputRef = useRef(null)

  return (
    <div className="search-section flex flex-col items-center py-4 px-[15%] gap-4">

      <div
        className="flex items-center w-full justify-center py-2 bg-white border border-gray-300 rounded-3xl px-2 gap-4"
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.focus()
          }
        }}
      >        
        <FontAwesomeIcon className='text-[#004953]' icon={faMagnifyingGlass} />

        <input
          ref={inputRef}
          type="text"
          placeholder="Search for dishes or restaurants..."
          className="border-none outline-none w-full px-2 py-2 focus:outline-none focus:ring-0"
        />

        <button className="bg-[#004953] text-white px-12 py-2 rounded-3xl transition-all duration-300 hover:bg-black">
          Filters
        </button>

      </div>

        <ol className="list-none flex items-center text-[#004953] py-2 gap-4">
            <li>Trending:</li>
            <li className="px-3.5 rounded-3xl bg-[#8badb1] hover:cursor-pointer">Sushi</li>
            <li className="px-3.5 rounded-3xl bg-[#8badb1] hover:cursor-pointer">Tacos</li>
            <li className="px-3.5 rounded-3xl bg-[#8badb1] hover:cursor-pointer">Vagan Burgur</li>
            <li className="px-3.5 rounded-3xl bg-[#8badb1] hover:cursor-pointer">Gelato</li>
        </ol>
    </div>
  )
}

export default Search