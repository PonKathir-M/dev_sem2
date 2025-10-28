import React, { useState } from "react";

export default function App() {
  const [transactions, setTransactions] = useState([]);
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(0);

  const addTransaction = () => {
    if (!desc || !amount) return;
    const value = parseFloat(amount);
    const newTx = { desc, amount: value };
    setTransactions([newTx, ...transactions]);
    setBalance(balance + value);
    setDesc("");
    setAmount("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>💰 Money Tracker</h1>
      <div style={styles.balanceBox}>
        <h2>Balance: ₹{balance.toFixed(2)}</h2>
      </div>

      <div style={styles.form}>
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Amount (+income, -expense)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTransaction} style={styles.btn}>Add</button>
      </div>

      <h3 style={{ marginTop: "20px" }}>Transactions</h3>
      <ul style={styles.list}>
        {transactions.map((t, i) => (
          <li
            key={i}
            style={{
              ...styles.item,
              color: t.amount > 0 ? "green" : "red"
            }}
          >
            {t.desc}: ₹{t.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "30px auto",
    textAlign: "center",
    background: "#1e1e2f",
    color: "white",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 0 10px rgba(0,0,0,0.3)"
  },
  title: { marginBottom: "10px" },
  balanceBox: {
    background: "#2a2a40",
    padding: "10px",
    borderRadius: "10px"
  },
  form: { marginTop: "15px" },
  input: {
    margin: "5px",
    padding: "8px",
    borderRadius: "5px",
    border: "none"
  },
  btn: {
    padding: "8px 15px",
    border: "none",
    background: "#00bcd4",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer"
  },
  list: { listStyle: "none", padding: 0 },
  item: {
    marginTop: "8px",
    background: "#2c2c3f",
    padding: "10px",
    borderRadius: "5px"
  }
};
