import React from 'react'

const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('');

const BurgerItem = ({name}) => {
  const classForToping = capitalize(name);

  return (
    <div className={classForToping}></div>
  )
}

export default BurgerItem
