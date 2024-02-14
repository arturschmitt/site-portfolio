'use server'
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import Style from "./style.css"

export default async function Projetos(){
    return (
        <>
            <Navbar />
            <main>
                <section className="projetos">
                    <h2>Projetos</h2>
                    <div>
                        <h3>Predict Covid (2023)</h3>
                        <p>Modelo de Machine Learning que prediz o índice de mortalidade hospitalar da COVID-19, utilizando dados do Sistema Único de Saúde.</p>
                        <iframe className="video" src="https://www.youtube.com/embed/zNUMjONQ7Wk" title="Predict Covid" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <ul>
                            <li>Frontend</li>
                                <ul>
                                    <li>React</li>
                                </ul>
                            <li>Backend</li>
                                <ul>
                                    <li>Flask</li>
                                    <li>MariaDB</li>
                                </ul>
                            <li>Modelo</li>
                            <ul>
                                <li>Sklearn</li>
                                <li>Pandas</li>
                            </ul>
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}