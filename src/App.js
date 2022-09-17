import './App.css';
import NewTransaction from './components/NewTransaction';
import TransactionHistory from './components/TransactionHistory';

function App() {
  return (
    <div className="App">
      <div>Your balance: 100$</div>
      <div>
        <div>Income: 500$</div>
        <div>Expenses: 400$</div>
      </div>
      <TransactionHistory />
      <NewTransaction />
    </div>
  );
}

export default App;
