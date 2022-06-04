import React from "react"
import './index.css'
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { Percentual } from "./percentual";


const skill = [
    {
        logo: <IoLogoHtml5 />,
        name: 'HTML5',
        color: '#f06529',
        porcentagem: 75
    }, {
        logo: <IoLogoJavascript />,
        name: 'JAVASCRIPT',
        color: ' #f0db4f',
        porcentagem: 80
    }, {
        logo: <IoLogoCss3 />,
        name: 'CSS3',
        color: ' #2965f1',
        porcentagem: 60
    }, {
        logo: <IoLogoReact />,
        name: 'REACT',
        color: ' #00ccff',
        porcentagem: 72
    }, {
        logo: <SiTypescript />,
        name: 'TYPESCRIPT',
        color: ' #047ccc',
        porcentagem: 15
    }, {
        logo: <SiReactrouter />,
        name: 'REACT ROUTER',
        color: ' #d3071e',
        porcentagem: 45
    }
]






export function Skill() {


    var ttt = <IoLogoHtml5 />

    return (
        <>
            <div className="divSkillCenter">
                <div className="divTituloSkill">

                    <span className="skillTitulo">
                        <p>Skill</p>
                    </span>

                    <div className="contentCardsSkill">

                        {skill.map((e, i) => (

                            <div className="cardSkill"
                                style={{ color: e.color }} key={i} >
                                {e.logo}
                                <p>
                                    {e.name}
                                </p>
                                <Percentual xp={e} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}