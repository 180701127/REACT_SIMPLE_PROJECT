import React from 'react'
import Singleperson from './Singleperson'

const List = ({people}) => {
    
  return (
    <div>
        <h3 className='h'>ListComponent</h3>
        {people.map((p)=>{
            return <Singleperson {...p} key={p.id}  />
        })}

      
    </div>
  )
}

export default List
