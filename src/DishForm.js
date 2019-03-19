import React from 'react'
import { useBodyScrollLock } from './hooks/bodyScrollLock'

const DishForm = () => {
  // lock the body from scrolling when this(DishForm) mounts
  useBodyScrollLock();
  return (
    <div className="dish-card">
      <form action="">
        <div className="form-row">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
      </form>
    </div>
  )
}

export default DishForm;