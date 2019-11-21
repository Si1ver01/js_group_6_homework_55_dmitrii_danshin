import React from 'react'
import './IngridientItem.css';

const IngridientItem = ({addIngridient,name,img,ingridients,removeIngridient}) => {
  const classForLogo = ['fas','logo-icon']
  classForLogo.push(img);

  const ingridientCount = ingridients.filter(elem => elem === name).length;

  return (
    <div className='d-flex my-1 mx-3 align-items-center justify-content-between'>
      <div className='d-flex align-items-center'>
        <div className='ingridient-logo border border-secondary rounded'><i className={classForLogo.join(' ')}></i></div>
        <span className="ml-3">{name}</span>
      </div>
      <div>
        <button className='btn btn-outline-danger rounded' onClick={() => removeIngridient(name)}><i className="fas fa-minus"></i></button>
        <span className='mx-2'>{ingridientCount}</span>
        <button className='btn btn-outline-success' onClick={() => addIngridient(name)}><i className="fas fa-plus"></i></button>
      </div>
    </div>
  )
}

export default IngridientItem;
