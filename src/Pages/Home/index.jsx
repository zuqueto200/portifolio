import React, { useEffect, useState } from "react";
import { LogoFundo } from "./LogoFundo";
 import { Contato } from "./Contato"
import './index.css'
import { Chamada } from "./Chamada";
   

export function Home() {





  return (
    <>
      <LogoFundo />

    <div className="home">
       

      <Chamada />
      <Contato />
      
    </div>
    </>

  )

}

