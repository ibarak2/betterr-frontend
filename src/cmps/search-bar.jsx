import { useState } from "react"




export const SearchBar = () => {

    const [search, setSearch] = useState('')

    const onSearch = (ev) => {
        ev.preventDefault()
        console.log(ev);
    }


    return (
        <div className='search-bar'>
            Hello From search bar!

        </div>
    )
}