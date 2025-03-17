"use client" /*coloco isso para poder pegar algo dinamico*/
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation"; 

export default function Home() {

  /*COLOCAR OS USE'S SEMPRE EM PRIMEIRO*/
  const router = useRouter()

  /*TODA VEZ QUE TIVER FORM EU USO CONST PQ É DINAMICO*/
  /*QUANDO FIZER QUALQUER COISA QUE SEJA DINAMICA
    ESSE COMPONENTE REACT SE TORNA UM CLIENT COMPONENT*/
  /*PRA CONCERTAR USA USE CLIENT*/
  const [cep, setCep] = useState("")

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target
    setCep(value)
  }

  /*AÇÃO DO BOTÃO USAR USEROUTER*/
  /*QUANDO FOR PAGINA É <LINK>*/
  const handleClick = () =>{
    router.push(`/${cep}`)
  }

  return (
    <div className="max-w-96 mx-auto">
      <h1 className="text-3xl">Client Render</h1>
      <h2 className="text-2xl">{cep}</h2>
      <form className="flex flex-row gap-2 items-end mt-4">
        <div className="flex flex-col">
          <label htmlFor="cep">Cep</label>
          <input type="text" name="cep" id="cep" className="rounded-md border px-4 py-2"
          /*isso aqui pega o que vai ser digitado*/onChange={handleChange}/>
        </div>
        <button type="button" className="bg-emerald-500 text-white px-4 py-2 rounded-md
        cursor-pointer hover:bg-emerald-800"
        onClick={handleClick}
        >Buscar</button>
      </form>
    </div>
  );
}
