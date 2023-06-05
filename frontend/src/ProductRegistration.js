import React from 'react'


function ProductRegistration() {
  return (
    <div className='outer-box'>
    <div className='inner-box'>
        <header class ="signin-header">
    <h2>Product Registration</h2>
    </header>
    <form action="">
        <div className='mb-3'>
            <label htmlFor="productname">Product Name</label>
            <input type="text" placeholder='Enter Product Name' name='productname' />
            
        </div>
        <div className='mb-3'>
            <label htmlFor="Category" >Category </label>
            <input type="text" name='category' placeholder='Enter Type of Category' ></input>
        </div>
        <div className='mb-3'>
            <label htmlFor="date">Purchase Date</label>
            <input type="date" name='date' />
            
        </div>
        <div className='mb-3'>
            <label htmlFor="company">Product Company</label>
            <input type="text" placeholder='Enter Company name' name='company' />
            
        </div>
        <div className='mb-3'>
            <label htmlFor="Warranty">Under Warranty <input type="checkbox" name="warranty" value="yes" /> </label>
        </div>
        <button type='submit'  className='btn'> <strong >Submit</strong></button>
        
    </form>
    </div>
</div>
  )
}

export default ProductRegistration