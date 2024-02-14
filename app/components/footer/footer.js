import style from "./style.css"
import Link from "next/link"

export default function Footer(){
    return(
        <footer>
            <h1><Link href="/" className="link-style">Artur Brenner Schmitt</Link></h1>
            <p>Desenvolvido com NextJS</p>
        </footer>
    )
}