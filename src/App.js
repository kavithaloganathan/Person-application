import React from 'react';
import {Person} from './Person/Person';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user:[{
        name:'tom',
        age:12,
        hobby:'football'
      },
      {
        name:'jerry',
        age:11,
        hobby:'football'
      },
      {
        name:'mickey',
        age:10,
        hobby:'football'
      }
    ]
    }
  }
 

   addPersonHandler(nameVal,ageVal){
   
    this.setState({user:[...this.state.user,{
      name:nameVal,
      age:ageVal

    }]})
  }
   updatePersonHandler(updateName,updateAge){
    const currentUser=[...this.state.user]
    this.setState({user: currentUser.map(u =>{
      console.log(u.name)
      if(u.name===updateName){
        return {
          name:updateName,
          age:updateAge
        }
      }
        else
        return u
      
     
    })})
  
    
  }

   deletePersonHandler(nameVal){
     const currentUser=[...this.state.user]
     this.setState({user: currentUser.filter(u =>{
       console.log(u.name)
      return u.name!==nameVal
     })})
   

  }
  
  render(){
    const onHobbiesChangeHandler=(event,updateName)=>{
      const currentUser=[...this.state.user]
      this.setState({user: currentUser.map(u =>{
        console.log(u.name)
        if(u.name===updateName){
          return {
            name:u.name,
            age:u.age,
            hobby:event.target.value
          }
        }
          else
          return u
        
       
      })})
    }

  return (

    <div className="App">
      {this.state.user.map(function(item){
        return <Person name={item.name} age={item.age} hobby={item.hobby}
        changehobbies={onHobbiesChangeHandler.bind(this,item.name)} />
      })}
      
     
      <button onClick={this.addPersonHandler.bind(this,'kathu',5)} >Add Person</button>
      <button onClick={this.updatePersonHandler.bind(this,'kathu',55)} >Update Person</button>
      <button onClick={this.deletePersonHandler.bind(this,'kathu')} >Delete Person</button>
    </div>
  );
  }
}

export default App;
