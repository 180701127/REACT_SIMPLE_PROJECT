import React, { useContext, useState, createContext } from "react";
import { people } from "./people.js";
import PersonInfo from "./Person-info.js";
import './Context-API.css';

export const PersonContext = createContext();//Empty container to hold my values

// const List = () => {
//     const peoples = useContext(PersonContext);// provider data can be obtained thru useContext
//     console.log(peoples); //{[{},{},{}]}
//   return (
//     <>
//       <p>
//         List Component picked data from useContext - iterated the people and sending individual person
//         component
//       </p>
//       {peoples.peoples.map((p) => {
//         return <SinglePerson {...p} key={p.id} />;
//       })}
//     </>
//   );
// };

// const SinglePerson = ({ id, name }) => {
//     const peoples = useContext(PersonContext)
//     console.log(peoples)
//   return (
//     <>
//       <p> Single Person Data -Recieved from List component </p>
//       <h3>
//         {id} {name}
//       </h3>
//     </>
//   );
// };

const ContextAPI = () => {
  const [data, setdata] = useState(people);
  const removeItem = (id) =>{
    var newData = data.filter((p)=>{
       return p.id !== id;
     });
     setdata(newData)
   }

  return (
    // Personcontext provider is supplyin peoples info to the List component
    <PersonContext.Provider value={{data,removeItem}}>
      <h3 className="z"> Personcontext provider is supplyin peoples info to the List component </h3>
      <PersonInfo />
    </PersonContext.Provider>
  );
};

export default ContextAPI