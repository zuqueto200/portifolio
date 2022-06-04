import React, { useState } from "react"
import './index.css'
import projetos from '../../projetos.json'


export function Projetos() {


 

    return (
        <>

            <div className="containerProjetos">

                <div className="contentProjetos">

                    <span className="contentProjetosTitulo">
                        <p>
                            Projetos
                        </p>
                    </span>


                    <span className="containerProjetosCard">
                        {
                            projetos.map((e,i) => (
                                <a href={e.linkSite} key={i}>
                                    <div className="cardProjetos">

                                        <img src={process.env.PUBLIC_URL + "/img/" + e.nameImg} />
                                        <p>
                                            {e.legenda}
                                        </p>

                                    </div>
                                </a>
                            ))
                        }


                    </span>

                </div>

            </div>

        </>
    )
}