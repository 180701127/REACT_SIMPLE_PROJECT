import React, { useState } from 'react'


function FromController(){
        
        const [nameData, setNameData] = useState('');
        const [emailData, setEmailData] = useState('');
        const [people, setPeople] = useState([]);

const handleSubmit =(e)=>{
e.preventDefault();
	if(nameData&&emailData){
        const person = {id: new Date().getTime().toString(), nameData:nameData, emailData:emailData};
	setPeople((p)=>{return [...p,person]});
	console.log("Form Submitted Successfully");
   
	setNameData('');
	setEmailData('');
	}
	else{
	console.log("Enter both details to submit");
	}
    console.log(people);
	
}
        return(<>
        <form onSubmit={handleSubmit}>
        <div>
        <label className='h'> Name </label>
        <input type="text" id="fname" name="fname" value={nameData} onChange={(e)=>{setNameData(e.target.value)}} />
        </div>
        <div>
        <label className='h'> Email </label>
        <input type="text" id="email" name="email" value={emailData} onChange={(e)=>{setEmailData(e.target.value)}} />
        </div>
        <button type="submit"> ADD </button>
        </form>
        {people.map((p)=>{
            const {id,nameData,emailData} = p;
                return(<div key={id}>
                        <h4> {nameData}  {emailData}</h4>
                    </div>)
            })}
        </>)
        }
        



export default FromController;
