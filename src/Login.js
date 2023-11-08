import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css';


const Login=()=>{
    const [nameData, setNameData] = useState('');
    const [emailData, setEmailData] = useState('');
    const[username,setUserName] = useState('');
    const[password, setPassword] = useState('');
    const[showPassword, setShowPassword] = useState(0);
    const[userCount, setUserCount] = useState(0);
    const [person, setPerson] = useState({ password: '' });
    const [people, setPeople] = useState([]);
    

    const handlePasswordChange = (e)=>{
        //const newPassword = e.target.value;
        // Password validation logic (12 digit, 1 special character, 1 lowercase, 1 uppercase, 1 number)
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
        // if(passwordRegex.test(newPassword)){
        //     setPassword(newPassword);
        // }
        return passwordRegex.test(person.password);
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nameData && emailData && password) {
            const person = { id: new Date().getTime().toString(), nameData: nameData, emailData: emailData };
            setPeople((prevPeople) => [...prevPeople, person]);
            console.log("Form Submitted Successfully");
            setNameData('');
            setEmailData('');
            setPassword('');
        } else {
            console.log("Enter all details to submit");
        }
    };
    
    const handleAddUser = (e) =>{
        e.preventDefault()
        setUserCount(userCount+1);
        setUserName('');
        setPassword('');
        console.log(userCount);
        
    };
    return (
        <div>
            <form>
                
                <label className="u">UserName:</label><br/>
                <input type="text" id="email" name="email" value={username} onChange={(e)=>{setUserName(e.target.value)}}/><br/>
                
                <label className="p">Password:</label> <br/>
                <div>
                    <input type={showPassword ? 'text': 'password'}
                    id="password"
                    name="password" maxLength={12}
                    autoComplete='true'
                    
                    onChange={handlePasswordChange}
                    className={handlePasswordChange() ? 'valid' : 'invalid'}/>
                    {showPassword ? <FaEyeSlash className="s" onClick={handleShowPassword}/>:<FaEye className="h" onClick={handleShowPassword}/>}

                    
                </div>
                <button className="K" type="submit" onClick={handleSubmit}>Submit</button>
                <button className="J" type="submit" onClick={handleAddUser}>Add</button>
            </form>
            {people.map((p)=>{
            const {id,nameData,emailData,age} = p;
                return(<div key={id}>
                        <h4> {nameData}  {emailData}  {age}</h4>
                    </div>)
            })}
            <div>
                <p className="b">Number of users added: {userCount}</p>
            </div>
        </div>
    )

}

export default Login
