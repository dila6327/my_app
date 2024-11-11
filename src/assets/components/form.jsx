import React from 'react'
import '../styles/form.css'
const Form = ({inputVal,handleSubmit,handleChange}) => {
  return (
    <div className="form">
    <form action="" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Search for a city"
        onChange={(e) => handleChange(e.target.value)}
        value={inputVal}
        className='include'
      />
      <input type="submit" value="submit" className='submit'/>
    </form>
  </div>
  )
}

export default Form
