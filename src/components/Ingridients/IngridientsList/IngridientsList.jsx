import React from 'react'
import IngridientItem from './IngridintItem/IngridientItem.jsx'

const IngridientsList = ({addIngridient,ingridientsInfo,ingridients,removeIngridient}) => {

  // console.log(ingridients);

  return (
    <div className='mx-1'>
      {ingridientsInfo.map((elem,index) => (
      <IngridientItem addIngridient={addIngridient} name={elem.name} key={index} img={elem.image} ingridients={ingridients} removeIngridient={removeIngridient} />
      ))}
    </div>
  )
}

export default IngridientsList
