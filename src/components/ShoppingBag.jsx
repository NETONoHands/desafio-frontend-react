import { useState } from "react";
import ToteImage from "../assets/Tote.svg"
import { Carrinho } from "./Carrinho";



export function ShoppingBag ({ clicaNaBolsa }) {

    return <a href="#" className="link__quantity">
                <img onClick={clicaNaBolsa} src={ToteImage} alt="Carrinho" />
                <span className="badge__quantity">1</span>
            </a>
}