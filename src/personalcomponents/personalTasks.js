//TO CREATE A LIST OF JSX ELEMENTS(RENDER MULTILE ITEMS ON THE DOM AT ONCE) WE HAVE TO LOOP OVER AN ARRAY AND FOR EACH LOOP WE CREATE A JSX ELEMENT.

////////APPROACH ONE:
// THE VALUES IN THE ARRAY ARE STATIC: IN THISSITUATION YOU MAY NOT MAKE USE OF THE USESTATE.RATHER YOU DEFINE THE ARRAY VARIABLE THEN LOOP OVER IT, THEN RETURN THE JSX ELEMENT FOR EVERY LOOP.........YOU DEFINE THE FUNCTION THAT HANDLES OR CREATES THE MMULTIPLE JSX ELEMENTS IN THE COMPONENTS.JS THEN YOU IMPORT THIS EXACT FUNCTION IN THE APP.JS

// SETTING THE CONTENT OF MULTPLE HTMLE ELEMENTS USING AS OBJECT...i.e creatign a list of jsx elements to be rendered on the page...we use for each or map to loop and for each loop a jsx is created and rendered.

//array to be looped using map method...this occurs in the components.js
/*
const tasks = [
  {
    id: 1,
    text: "Doctors Appoinment",
    day: "Feb 5th at 2:30pm",
    reminder: true,
  },

  {
    id: 2,
    text: "Meeting at School",
    day: "Feb 6th at 1:30pm",
    reminder: true,
  },

  {
    id: 3,
    text: "Food Shopping",
    day: "Feb 5th at 2:30pm",
    reminder: false,
  },
];

// //Tasks is a function that returns an h3 element. the content of the returned h3 element is the value of the text property of each tasks element. to do this it loops over the tasks array using the map method, each object is returned after each loop, then the text property value is extracted as the content of h3.

//creating the multiple jsx element using the map method on the above object.
const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3> //always assign a unique id for each looped jsx
      ))}
    </>
  );
};

export default Tasks;

//in the app.js file you import Task FUNCTION then add Tasks FUNCTION to the APP function

import Tasks from "./components/Tasks"; //use if we did not use state to crete the jsx list.

const App = () => {
  return (
    <div className="container">
      <Header />
      <Tasks />
    </div>
  );
};

export default App;
*/

////APPROACH 2;  USING THE USE STATE FUNCTION...if we want to add more objects or items inside our array or edit the existing items inside our array we will have to make use of the usestate function which allows react destructure our original array, creates a new array then update the array with changes we make on the ui(user-end), an api(backend) or from within our code andthen renders the changed values in the dom.

//to use state in the component.js first import state then apply the use state function on the original array object(this will make the objects to always be updted when a change occurs...) then save this to a variable which will hold the updated array. this variable should exist inside the function that component.js returns(Task function). note the variabe should always be in square because to update the original array, usestate destructured the original array, since we always want the updated values in an array the const variable which should hold the updated values must be specifically set as an array...e.g arrNames= [sam, zane, king]...destructured and saved to a new const that is an array... const [newNameArr] = [...arrNames]...thus newNameArr = [sam, zane, king].

//also note that use state functions updates the array of object using a variable we must specify along with the const variable that holds the updated array objects.....if we donot want to alter the original state of the array later we can omit this variable...but if we have to add new objects into the array we must specify it.

//step 3 same as step 2 above in approach 1. nothing changes...we define the function that returns the multiple jsx elements. the const holding the updated objects array  must be defined inside this function but before we define the return block (i.e jsx elements)

//lastly same rules apply to the ap.js file as in the first approach we simply import the component then return it in the ap function.

//////////CODE:
/*
//step 1...import usestate fucntion
import { useState } from "react";


const Tasks = () => {
  //step 2...create a variable(tasks) that holds the updated values of the original array and a variable(setTask) that updates the original array before it is saved.
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Doctors Appoinment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },

    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },

    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

//step 3   
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3> //always assign a unique id for each looped jsx
      ))}
    </>
  );
};

export default Tasks;

//step 4.
//in the app.js file you import Task FUNCTION then add Tasks FUNCTION to the APP function

import Tasks from "./components/Tasks"; //use if we did not use state to crete the jsx list.

const App = () => {
  return (
    <div className="container">
      <Header />
      <Tasks />
    </div>
  );
};

export default App;
*/

//APPROACH 3: if we want to access the array of object or the function which returns the multiple jsx elements in other components files we will not use approach 1 or 2. we will have to move the objects array to the app.js file. that would make the array a global array. all other component.js can access it then do their specific work with it. to do this follow the steps below:

//step 1, in the app.js import usestate
//step2: in the App function: create a variable that holds the updated values of the original array and a variable(setTask) that updates the original array before it is saved.
//step 3: in APP.js pass in this holder variable as a props(both property and value =variable) to the returned component that makes use of the array.
//step 4:pass in the props as an arguement into the function of the component in the component.js..destructure the input array when passing it in.
//then set the code that returns the multiple jsx elements.

//code
/*
import Header from "./components/Header"; //we import the header file using the header file path.
import Tasks from "./components/Tasks"; //use if we did not use state to crete the jsx list.

import { useState } from "react";

const App = () => {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Doctors Appoinment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },

    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },

    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3> //always assign a unique id for each looped jsx
      ))}
    </>
  );
};

export default Tasks;
*/

// {
//   id: 1,
//   text: "Doctors Appoinment",
//   day: "Feb 5th at 2:30pm",
//   reminder: true,
// },
// {
//   id: 2,
//   text: "Meeting at School",
//   day: "Feb 6th at 1:30pm",
//   reminder: true,
// },
// {
//   id: 3,
//   text: "Food Shopping",
//   day: "Feb 5th at 2:30pm",
//   reminder: false,
// },
