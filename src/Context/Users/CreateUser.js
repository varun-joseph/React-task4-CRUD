import React, { useContext, useState } from 'react'
import { useHistory,useParams } from 'react-router'
import generateUniqueId from 'generate-unique-id'

import { UsersContext } from './Users';

function CreateUser() {
    const [UsersData, setUsersData] = useContext(UsersContext);
    const history = useHistory();
    let localdata = JSON.parse(localStorage.getItem('users')) || null;

    // For edit Users
    let edituser={}; 
    let editUId =  useParams(); 
    if(history.location.pathname.includes('editUser')){
        let user = localdata.filter(data => data.uid === editUId.uid);
        edituser = user[0];
        console.log(edituser)
    }

    /* Assigning initial values based on -EDIT or CREATE */ generateUniqueId()
    let userid = history.location.pathname.includes('editUser') ? edituser.id : generateUniqueId({
        length: 4,
        useLetters: false
    }); 
    const [id,setId] = useState(userid);
    const [username, setUsername] = useState(edituser.username || '');
    const [email, setEmail] = useState(edituser.email || '');
    const [plan,setPlan] = useState(edituser.subscription || '');
    const [employment,setEmployment] = useState(edituser.employment || '');
    const [address, setAddress] = useState(edituser.address || '');

    /* Handling Form Submittion */
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(history.location.pathname.includes('CreateUser')){
            let createdUser = [...UsersData,{
                id,
                uid : generateUniqueId({length:36,includeSymbols:['-']}),
                username,
                email,
                employment,
                address,
                subscription : plan
            }]
            localStorage.removeItem('users');
            setUsersData(createdUser)
            localStorage.setItem('users',JSON.stringify(createdUser))
        }
        else{
            let remaining_users = localdata.filter(data => data.uid !== editUId.uid )
            let updatedUser = [{
                id,
                uid : editUId.uid,
                username,
                email,
                employment,
                address,
                subscription: plan
            },...remaining_users]
            localStorage.removeItem('users');
            setUsersData(updatedUser);
            localStorage.setItem('users',JSON.stringify(updatedUser))
        }
        history.push('/users');
    }

    return (
        <div className="container-fluid">
            {
                !history.location.pathname.includes('CreateUser') ? 
                <div className="text-primary mb-3">Note : Updated data will be in the top of the Users List</div> : ''
            }
            <div className="card shadow">
                <div className="card-header">
                    <h4 className="float-left text-info">{history.location.pathname.includes('CreateUser') ? 'Create User' : 'Update User'}</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="userid" className="form-label">UserId</label>
                            <input type="text" className="form-control" id="FormControlInput1" value={id} disabled readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">UserName</label>
                            <input type="text" className="form-control" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="plan" className="form-label">Subscription</label>
                            <select className="form-control" value={plan} onChange={(e)=>{setPlan(e.target.value)}} >
                                <option value=""></option>
                                <option value="Bronze">Bronze</option>
                                <option value="Gold">Gold</option>
                                <option value="Starter">Starter</option>
                                <option value="Premium">Premium</option>
                                <option value="Platinum">Platinum</option>
                                <option value="Essential">Essential</option>
                                <option value="Diamond">Diamond</option>
                                <option value="Business">Business</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="employment" className="form-label">Employment</label>
                            <input type="text" className="form-control" value={employment} onChange={(e)=>{setEmployment(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" className="form-control" value={address} onChange={(e)=>{setAddress(e.target.value)}} />
                        </div>
                        <button type="submit" className="btn btn-primary">{history.location.pathname.includes('CreateUser') ? 'Create' : 'Update'}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser
