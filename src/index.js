//const element=document.createElement('h1');
//element.innerText = 'Hola React.';
//const container=document.getElementById('root');
//container.appendChild(element);

import React from 'react'
import ReactDOM from 'react-dom'

const user = {
  firstName: 'Jorge',
  lastName: 'Riffo',
  avatar: 'data:image/png;base64,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'
}

function getName(user) {
  return `${user.firstName} ${user.lastName}` 
}

function getGreeting(user){
  if(user){
    return <h1> Hello {getName(user)}  </h1>
  }  
  return <h1>Hello Stranger.</h1>
}

const name= 'Jorge'
const element = (
<div>
{getGreeting(user)}
<img src={user.avatar} />
</div>
)

const container= document.getElementById('root')

//ReactDOM.render(__QUE__, __Donde__)

ReactDOM.render(element, container)