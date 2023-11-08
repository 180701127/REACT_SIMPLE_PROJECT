import React, { useEffect, useRef } from 'react'

const UserRefBasics = () => {
    const refContainer = useRef(null);
    const divcontainer = useRef(null);
    const newContainer = useRef(null);

    const focuscontainer = useRef(null);

    const setRefs = (element) => {
        refContainer.current = element;
        focuscontainer.current = element;
      };

    useEffect(()=>{
      // newContainer.current.focus();
        // Now you can use refContainer and focusContainer to access the same element
        if (refContainer.current) {
            refContainer.current.style.border = '1px solid red';
            refContainer.current.focus();
        }
    },[]);

    

    const handleForm=(e)=>{
        e.preventDefault();
        console.log(refContainer.current.value);
        //console.log(newContainer.current.value);
        console.log(divcontainer.current.id);

    }
  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" ref={refContainer}></input>
        <button type="submit"> Submit </button>
      </form>

      <div ref={divcontainer} id='div'>
        welcome
      </div>
    </div>
  )
}

export default UserRefBasics;
