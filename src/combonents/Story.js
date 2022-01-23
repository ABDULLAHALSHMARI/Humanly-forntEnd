import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';


export default function Story() {
    
    let [story,setStory]= useState("");

    useEffect(() => {
        axios.get("/api/story")
            .then(response => {
                console.log(response.data)
                setStory(response.data)
            })
        return () => { }
    }, [])

    return (
        <div className="">
        <table className='table table-striped table-bordered'>
          <thead>
              <tr>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Department</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                    {
                        story.map(
                            history =>
                            <tr key = {history.id}>
                                 <td> { history.username} </td>
                                 <td> {history.Email}</td>
                                 <td> {history.password}</td>
                            </tr>
                        )

                    }
                </tbody>
        </table>
    </div>
    )
}
