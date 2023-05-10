import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  const expenses = props.expenses;

  return (
    <div className="expenses">
      {expenses.map(({ title, amount, date}) => (
        <ExpenseItem
          title={title}
          amount={amount}
          date={date}
        />
      ))}
    </div>
  );
}

export default Expenses;
