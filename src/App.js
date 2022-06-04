import React, { useEffect, useState } from "react";
import { Home } from "./Pages/Home";
import { Chamada } from "./Pages/Home/Chamada";
 import { Projetos } from "./Pages/Projetos";
import { Skill } from "./Pages/Skill";




export function App() {





  return (
    <div className="App" >
 <Home/>
      <Skill />
      <Projetos />
      
    </div>
  );
}

