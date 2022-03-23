import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./TransactionsTable.styles";

interface Transaction {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

export function TransactionsTable() {

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const getTransactions = async () => {
      const { data: { transactions } } = await api.get('transactions');
      setTransactions(transactions);
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
          {
            transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>{new Intl.DateTimeFormat().format(new Date(transaction.createdAt))}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Container>
  );
}
