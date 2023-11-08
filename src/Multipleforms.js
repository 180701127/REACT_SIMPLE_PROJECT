import React, {useRef, useState} from 'react'

const Multipleforms = () => {
    const resetContainer = useRef(null);
    
        const [person, setPerson] = useState({firstName:'', emailData:'',age:''});
        const [people,setPeople]=useState([]);
        
        const handleSubmit =(e)=>{
        e.preventDefault();
        if(person.firstName && person.emailData && person.age){
        const p={...person, id: new Date().getTime().toString()}
        setPeople([...people,p]);
        // setPerson({firstName:'', emailData:'',age:''})
        resetContainer.current.reset();
        }
        }
        const handleChange=(e)=>{
        const name=e.target.name; //attribute - name (firstName,emailData)
        const value = e.target.value; //attribute -value (data we type from form)
        setPerson({...person,[name]:value}) ; //{firstName:'abc',emailData:'abc@gmail.com',age:8}
        }
       
        return(<>
        <form ref={resetContainer}>
        <div>
        <label className='q'> Name </label>
        <input type="text" id="fname" name="firstName" onChange={handleChange}/>
        </div>
        <div>
        <label className='e'> Email </label>
        <input type="text" id="email" name="emailData" onChange={handleChange}/>
        </div>
        <div>
        <label className='f'> Age </label>
        <input type="text" id="age" name="age" onChange={handleChange}/>
        </div>
        <button onClick={handleSubmit}> ADD </button>
        </form>
        {people.map((p)=>{
            const {id,firstName,emailData,age} = p;
                return(<div key={id}>
                        <h4> {firstName}  {emailData}  {age}</h4>
                    </div>)
            })}
        </>)
        }
        
    
export default Multipleforms
