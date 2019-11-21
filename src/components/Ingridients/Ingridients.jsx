import React from 'react'
import IngridientsList from './IngridientsList/IngridientsList.jsx'

const Ingridients = ({addIngridient,ingridientsInfo,ingridients,removeIngridient}) => {

  return (
    <div className='d-flex flex-column w-50 border border-warning rounded h-75 mx-1'>
      <h1 className='text-center'>Ingridients</h1>
      <IngridientsList addIngridient={addIngridient} ingridientsInfo={ingridientsInfo} ingridients={ingridients} removeIngridient={removeIngridient}/>
    </div>
  )
}

export default Ingridients;
