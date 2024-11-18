// src/App.jsx
// we need this line whenever a component will need to change state in some way
// (quick tip: any component that has a visual change, will need to change state in some way)
import { useState } from 'react'; 
import './App.css';

const App = () => {
  // this line creates a piece of state called "isDarkMode"
  // it also gives you a setter function called setIsDarkMode that you can use like setIsDarkMode(true), e.g.
  // thirdly, here, we're deciding to set the initial value to "true"
  const [mode, setMode] = useState("light");
  // a state called "cats"
  const [cats, setCats] = useState([
    { name: 'Myshka', breed: 'Ragdoll' },
    { name: 'Malta', breed: 'Turkish Angora' },
  ]);

  const handleMode = (modeValue) => {
    console.log(modeValue);
    setMode(modeValue);
  };

  const handleAddCat = (catObj) => {
    // i want to call setCats
    // but if i call setCats and just put in my catObj, all the others cats are gone

    // react does not let us "mutate" state (so we can't use the "old" array)
    // the spread operator lets us clone the old array
    const newCatsArray = [...cats];
    newCatsArray.push(catObj)

    // or alternately we could have just done this, which combines cloning the array & pushing:
    // const newCatsArray = [...cats, catObj]
     
    setCats(newCatsArray)
  }

  return (
    <>
      {/* this pattern is common in react, where we can have the CSS be conditional */}
      {/* based on the contents of a variable, ie., if isDarkMode is true, className="dark" */}
      {/* on the other hand if isDarkMode is false, className="light" */}
      <div className={mode}>
        <h1>Hello world!</h1>
      </div>
      <div>
        <button onClick={() => handleMode('dark')}>Dark Mode</button>
        <button onClick={() => handleMode('light')}>Light Mode</button>
      </div>
      <button onClick={() => handleAddCat({ name: 'Kira', breed: 'Ragamuffin' })}>
        Add Cat
      </button>
      {/* use map to make the cats show up */}
      <ul>
        {cats.map((cat, idx) => (
          <li key={idx}> {cat.name} </li>
        ))}
      </ul>
    </>
  );
};

export default App;