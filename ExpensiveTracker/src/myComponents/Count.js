//import React, { useReducer, useState } from "react";

// const Count = () => {
//   const initialState = 0;

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "INCREMENT":
//         return state + 1;
//       case "DECREMENT":
//         return state - 1;
//       default:
//         return state;
//     }
//   };

//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       {state}
//       <br />
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
//     </div>
//   );
// };

// export default Count;

import React, { useReducer, useState } from "react";

const Count = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const initialValues = [
    {
      id: Date.now(),
      name: "gayathri",
      email: "gayathri@gmail.com",
    },
  ];
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.payload];
      case "DELETE":
        return state.filter((val) => val.id !== action.payload.id);
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialValues);

  const add = () => {
    const data = {
      id: Date.now(),
      name: name,
      email: email,
    };
    setName("");
    setEmail("");
    console.log(state, data);
    dispatch({ type: "ADD", payload: data });
    console.log(state, data);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <button onClick={() => add()}>add</button>
      {state.map((val) => {
        return (
          <ul key={val.id}>
            <li>
              {val.name} &nbsp;
              <button
                onClick={() =>
                  dispatch({ type: "DELETE", payload: { id: val.id } })
                }
              >
                Delete
              </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Count;
