import React from "react";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transação 01',
          amount: 400,
          type: 'deposit',
          category: 'Salary',
          createdAt: new Date()
        }
      ]
    })
  }
})

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
    </>
  )
};