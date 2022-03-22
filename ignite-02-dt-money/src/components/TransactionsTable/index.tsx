import React, { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./TransactionsTable.styles";

export function TransactionsTable() {

  useEffect(() => {
    const getTransactions = async () => {
      const { data } = await api.get('transactions');
      return data;
    }

    getTransactions();
  });

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Transação 01</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Categoria 01</td>
            <td>21/03/2022</td>
          </tr>
          <tr>
            <td>Transação 02</td>
            <td className="withdraw">- R$ 12.000,00</td>
            <td>Categoria 02</td>
            <td>21/03/2022</td>
          </tr>
          <tr>
            <td>Transação 03</td>
            <td className="withdraw">- R$ 100,00</td>
            <td>Categoria 03</td>
            <td>21/03/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
