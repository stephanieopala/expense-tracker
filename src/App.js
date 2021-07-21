import './App.css';
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import TransactionForm from "./components/TransactionForm";
import GlobalContextProvider from './context/GlobalState';

function App() {
  return (
    <GlobalContextProvider>
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <TransactionForm />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
