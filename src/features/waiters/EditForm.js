import React from 'react';
import style from './WaiterItem.module.css'


  export function EditForm ({ waiter, onWaiterSubmit }) {
    const [firstName, setFirstName] = React.useState('')
    const [phone, setPhone] = React.useState(false)
  
    React.useEffect(() => {
      if (waiter) {
        setFirstName(waiter.firstName)
        setPhone(waiter.phone)
      }
    }, [waiter])
  
    const onSubmit = (event) => {
      event.preventDefault()
    
      onWaiterSubmit({
        ...waiter,
        firstName,
        phone,
      })
    
      setFirstName('')
      setPhone('')
    }
  
    const onFirstNameChange = (event) => { 
      setFirstName(event.target.value)
    }
  
  
    return (
      <form onSubmit={onSubmit}>
        <label htmlFor="firstName">First Name</label> 
        <input value={firstName} onChange={onFirstNameChange} type="text" id="firstName" /> 
  
        <button type="submit" className={style.ml10}>Save</button>
      </form>
    )
  }

