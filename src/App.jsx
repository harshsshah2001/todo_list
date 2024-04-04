import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [inputList, setInputList] = useState('');
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listofItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList('');
  };

  return (
    <React.Fragment>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>ToDO List</h1>
          <br />
          <input type='text' placeholder='Add Items' value={inputList} onChange={itemEvent} />
          <button onClick={listofItems}> + </button>
          <ol>
            {items.map((itemVal, index) => {
              return (
                <React.Fragment key={index}>
                  <li>{itemVal}</li>
                </React.Fragment>
              );
            })}
          </ol>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;



 {/* import React, { useState } from 'react';
 import './App.css';

const App = () => { */}
{/* //   const [inputList, setInputList] = useState('');

//   const itemEvent = (event) => { */}
{/* //     setInputList(event.target.value);
//   };

//   return (
//     <React.Fragment>
//       <div className='main_div'>
//         <div className='center_div'>
//           <br />
//           <h1>ToDO List</h1>
//           <br />
//           <input type='text' placeholder='Add Items' onChange={itemEvent} value={inputList} />
//           <button> + </button>
//           <ol>
//             <li>{inputList}</li>
//           </ol>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default App; */}

