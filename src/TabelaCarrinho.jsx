import { Container, Row, Table } from "react-bootstrap";
import Cabecalho from "./templates/Cabecalho";

export default function TabelaCarrinho(props) {
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
                            
                        }
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}