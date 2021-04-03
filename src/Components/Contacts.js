import React,{useState,useEffect} from 'react';
import ContactForm from "./ContactForm";
import firebaseDb from '../firebase';

const Contacts = () => {
    const [value,setValue] = useState({});
    const [curid, setCurid] = useState('')

    useEffect(()=> {
        firebaseDb.child('newuser').on('value', snapshot => {
            if(snapshot.val()!=null){
                setValue({
                    ...snapshot.val()
                })
            }
        })
    },[])

    const addEdit = obj => {
        obj = {name: 'ko', mob: 234};
        firebaseDb.child('newuser').push(
            obj,
            err => {
                if(err) 
                console.log(err);
                else
                setCurid('');
            }
        )
    }

    const update = obj => {
        obj = {name:'lo', mob: 987};
        firebaseDb.child(`/newuser/${curid}`).set(
            obj,
            err => {
                if(err)
                console.log(err);
                else
                setCurid('');
            }
        )
    }

    const deleteRec = key => {
        if(window.confirm('Are you sure?')){
            firebaseDb.child(`newuser/${key}`).remove (
                err => {
                    if (err)
                    console.log(err);
                    else
                    setCurid('');
                }
            )
        }
    }
 
    return ( 
        <>
            <div><h2>My Shop</h2></div>  
            <div className='row'>
                <div className='col-md-5'>
                    <ContactForm />
                </div>
                <br/>
                    <button onClick={addEdit}>click</button>
                    <br/>
                    <button onClick={update}>Update</button>
                {value &&
                <div className='col-md-7'>
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>mob</th>
                            <th>edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(value).map(id => {
                            return <tr key={id}>
                                <td>{value[id].name}</td>
                                <td>{value[id].mob}</td>
                                <td><button onClick={()=> {setCurid(id)}}>edit me</button></td>
                                <td><button onClick={()=> {deleteRec(id)}}>delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
                }
            </div>       
        </>
     );
}
 
export default Contacts;