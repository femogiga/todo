import { useEffect, useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Header = ({ callback }) => {
const[clicked,setClicked] = useState("")
    const handleClick = (e) => {
        e.preventDefault()
        setClicked(e.target.innerText)
        // callback(e.target.innerText)
    }

    useEffect(()=>{
        callback(clicked)
    },[clicked,callback])
    return (
        <header className="header">
            <h1 className={'justify-self-center'}>#todo</h1>
            <nav>
                <ul className={"flex flow-point-5"}>
                    <li ><Link onClick={handleClick}>All</Link></li>
                    <li><Link onClick={handleClick}>Active</Link></li>
                    <li><Link onClick={handleClick}>Completed</Link></li>
                </ul>
                <div className='hr flow-2' ></div>
            </nav>
        </header>
    )
}


export default Header
