import React from 'react'

const Box = (props) => {
  return <React.Fragment>
   
            <div className='box-img-div' >
              <img
                src={props.image}
                alt='box-process'
                className='img-box'
              />
              <h1 className='box-p' >
                {props.heading}
              </h1>
              <p>
                {props.paragraph}
              </p>
            </div>
          
  </React.Fragment>
}

export default Box
