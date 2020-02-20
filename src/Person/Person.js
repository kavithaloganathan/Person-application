import React from 'react';

export class Person extends React.Component{
  
    render(){
        return(
            <div>
               My Name:{this.props.name}<br/>
               My Age: {this.props.age}<br/>
               My Hobby:<input type="text" 
               value={this.props.hobby}
               onChange={(e)=>this.props.changehobbies(e,this.props.name)}/>
               <br/><br/>
          
            </div>
        )
    }
}