'use client'

import { usePathname } from 'next/navigation'
import style from './style.css'
import Link from 'next/link'

export default function Navbar (){

    return(
        <nav>
            <h1 className='active'><Link className='link-style' href='/'>Artur Brenner Schmitt</Link></h1>

            <ul>
                
                <NavActive link="/" value="Início"/>
                <NavActive link="/projetos" value="Projetos" />
                <NavActive link="https://medium.com/@artur.schmitt.brenner" value="Blog" />
            </ul>
        </nav>
    )
}

function NavActive(props){
    const path = usePathname()
    return(
        <li className={path === props.link ? "active" : ""}><Link className="link-style" href={props.link}>{props.value}</Link></li>
    )
}