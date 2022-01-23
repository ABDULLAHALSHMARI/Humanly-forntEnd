import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div>
           <h1>wellcome in my project</h1>
           <Link to="/Addclothes"><img src="http://www.lahaonline.com/media/images/articles//ekhterak/2014_1513235969.jpg"/></Link>

      <Link to="/AddFood"><img src="https://www.sayidaty.net/sites/default/files/styles/600x380/public/30/10/2015/1446225292_1.png?itok=dOBp5DS-"/></Link>
      <Link to="/AddDevice"><img src="http://www.lahaonline.com/media/images/articles//ekhterak/2014_1513235969.jpg"/></Link>
        <Link to="/Services" onClick="/Services">Next</Link>
        </div>
    )
}
