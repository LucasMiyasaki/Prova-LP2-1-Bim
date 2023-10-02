import { Container, Row, Table } from "react-bootstrap";
import Cabecalho from "./templates/Cabecalho";
import { useEffect, useState } from "react";

export default function TabelaCarrinho(props) {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        setLista(JSON.parse(localStorage.getItem("listaCarrinho")));
    }, []);

    return (
        <Container>
            <Cabecalho />

            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome produdo</th>
                            <th>Preço</th>
                            <th>Feedback</th>
                            <th>Quantidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lista.map((lista, index) => {
                                <tr key={index}>
                                    <td>{lista.nome}</td>
                                    <td>{lista.preco}</td>
                                    <td>{lista.feedback}</td>
                                    <td>{lista.quantidade}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}