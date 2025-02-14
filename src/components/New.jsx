import React,{useState} from 'react'

function New() {
    const [users, setUsers] = useState([
  {id:1, name:"latheesh", usn:"4vp23mc016",role:"Student"},
  {id:2, name:"Dharshan", usn:"4vp23mc017",role:"Student"},
  {id:3, name:"kiran", usn:"4vp23mc018",role:"Student"}
 ]);
 const [formData, setFormData] = useState({ name: '', usn: '', role: '' });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
        const newUser = { id: newId, ...formData };
        setUsers([...users, newUser]);
        setFormData({ name: '', usn: '', role: '' });
    };
    return (
        <div className='welcome-card'>
          
        
        <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <input name='name' placeholder='name' value={formData.name} onChange={handleChange} required />
                <input name='usn' placeholder='usn' value={formData.usn} onChange={handleChange} required />
                <input name='role' placeholder='role' value={formData.role} onChange={handleChange} required />
                <br /><br />
                <button type='submit'>Add</button>
            </form>
            <br /><br />
            <h2>Student List</h2>
            
            <table border="1" style={{ width: '100%', fontSize: '20px' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>USN</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.usn}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
      </div>
    );
}
  
export default New
  
// import React, { useState } from 'react';

// function UserList() {
//     const [users, setUsers] = useState([
//         { name: 'Bhuvan', USN: '4VP23MC003', role: 'student' },
//         { name: 'Latheesh', USN: '4VP23MC016', role: 'student' },
//         { name: 'Lohith', USN: '4VP23MC018', role: 'student' },
//     ]);
//     const [formData, setFormData] = useState({ name: '', USN: '', role: '' });
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setUsers([...users, formData]);
//         setFormData({ name: '', USN: '', role: '' });
//     };
//     return (
//         <div>
//             <h2>Add Student</h2>
//             <form onSubmit={handleSubmit}>
//                 <input name='name' placeholder='Name' value={formData.name} onChange={handleChange} required />
//                 <input name='USN' placeholder='USN' value={formData.USN} onChange={handleChange} required />
//                 <input name='role' placeholder='Role' value={formData.role} onChange={handleChange} required />
//                 <button type='submit'>Add</button>
//             </form>
            
//             <h2>Student List</h2>
//             {users.map((user, index) => (
//                 <div key={index}>
//                     <p>{user.name} - {user.USN} - {user.role}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }
// export default UserList;