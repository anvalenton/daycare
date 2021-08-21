import './Employee.css';
import React from "react";



const Employee = ({name, group}) => {
    
   

return (


<div className={`employeename-subcontainer ${group}`} >

    <span className='employeename'>{name}</span>

</div>


)

};

export default Employee;