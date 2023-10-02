import { useEffect, useState } from "react";
import Cabecalho from "./templates/Cabecalho";
import BarraBusca from "./templates/BarraBusca";
import GradeProdutos from "./componentes/GradeProdutos";

export default function TelaInicial(props) {
    const [produtos, setProdutos] = useState([]);
    const [listaCarrinho, setListaCarrinho] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((resposta) => resposta.json())
            .then((produtos) => {
                setProdutos(produtos);
            });

        if (localStorage.getItem("listaCarrinho") !== null)
            setListaCarrinho(JSON.parse(localStorage.getItem("listaCarrinho")));

        else
            localStorage.setItem("listaCarrinho", JSON.stringify([]));
    }, []);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((resposta) => resposta.json())
            .then((produtos) => {
                setProdutos(produtos);
            });

        if (localStorage.getItem("listaCarrinho") !== null)
            setListaCarrinho(JSON.parse(localStorage.getItem("listaCarrinho")));

        else
            localStorage.setItem("listaCarrinho", JSON.stringify([]));
    }, []);

    return (
        <>
            <Cabecalho />
            <BarraBusca listaCarrinho={listaCarrinho} />
            <GradeProdutos listaProdutos={produtos} setListaCarrinho={setListaCarrinho} listaCarrinho={listaCarrinho} />
        </>
    );
}