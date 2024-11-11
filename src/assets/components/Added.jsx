import React from 'react'
import '../styles/added.css'
const Added = ({add}) => {
  return (
    <div className="added">
    {add.map((item) => (
      <div style={{ height: '300px', width: '200px'}} key={item.id}>
        <div className='name'>
         {item.name}
         </div>
        <div className='selsi'>
       <p>{Math.round((item.main.temp_min + item.main.temp_max) / 2)} &deg;C</p> 
        </div>
       
        {item.weather.map((data, index) => (
        
          <div key={index}>
            <div className='img'>
      <img src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} alt={data.description} /></div>
      <div className='description'>
            {data.description}
</div>
          </div>
          
        ))}
        
      </div>
    ))}
  </div>
  )
}

export default Added
