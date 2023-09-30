import React from 'react'
import Person from './Person'
function PersonsList(){
    const PersonArray=[{
        id:1,
        name:'aaa',
        age:20,
        address:'Hyd'
    } ,
    {
        id:2,
        name:'bbb',
        age:21,
        address:'Vij'
    } ,
    {
        id:3,
        name:'ccc',
        age:24,
        address:'Hyd'
    } ,
    {
        id:4,
        name:'ddd',
        age:28,
        address:'Vij'
    } ,
    {
        id:5,
        name:'eee',
        age:30,
        address:'Hyd'
    }
];
const arrayElements = PersonArray.map((person) => (
    <Person key={person.id} person={person} />
  ));
return(<div>{arrayElements}</div>);
}
export default PersonsList;