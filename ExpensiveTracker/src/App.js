import "./App.css";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import IncomeExpenses from "./Components/IncomeExpenses";
import AddTransaction from "./Components/AddTransaction";
import TransactionList from "./Components/TransactionList";
import { GlobalProvider } from "./Content/GlobalState";
// import Count from "./myComponents/Count";

// import Spread from "./Components/Spread";
function App() {
  // function factorial(n) {
  //   if (n < 0) {
  //     return n - 1;
  //   }
  //   if (n === 0) {
  //     return 1;
  //   }
  //   return n * factorial(n - 1);
  // }
  // const data = factorial(5);

  return (
    <div>
      {/* <Count /> */}
      {/* {data} */}
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
      {/*
      <Spread /> */}
    </div>
  );
}

export default App;

// import React from "react";
// import { GoogleLogin } from "react-google-login";
// const responseGoogle = (response) => {
//   console.log(response);
// };
// const App = () => {
//   return (
//     <div style={{ margin: 100 }}>
//       <GoogleLogin
//         clientId=""
//         onSuccess={responseGoogle}
//         onFailure={responseGoogle}
//       />
//     </div>
//   );
// };

// export default App;
