import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../App.css'
export default function Home() {

    return (
      <div>



<article class="title">
     <div className="word">
        
         <h2>with your giving<br/>Put a smile on the<br/> mouths of the poor</h2>
     </div>
     
 </article>
 <article class="new">
     <h2>Services</h2>
     <div>
     <section>
            <div>
             <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUg2VgjzxsKRDtbZyHch5Y4sAZPBBP90EFYQ&usqp=CAU"onClick="/services" alt=""/>
             </div>
     </section>
     <section>
         <div>
            <div>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4AKQhlGEfJZciC2jPN4Qpef6_-xHo-OD9NQ&usqp=CAU" alt=""/>
             </div>
             <div>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc_T98Q-ZKolJLxo0hxPvl99E5EgFhmXUYgQ&usqp=CAU" alt=""/>
             </div>
            
         </div>
     </section>
     </div>
 </article>
 <article class="sale">
    <h2>Some initiatives</h2>
     <section>
         <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0V1hnjgmwXSPLTcx5M9uIyzTUDr0IoOtFGQ&usqp=CAU" alt=""/>
             <div>
                 <h4>two months ago</h4>
                 <p>in jeddah</p>
                 
             </div>
         </div>
         <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS2nmESqREkXfipuCybBsuyc6rI1qcBjactg&usqp=CAU" alt=""/>
             <div>
                 <h4>One month ago</h4>
                 <p>in Riyadh</p>
             </div>
         </div>
         <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg-ijTp3uS7eBSNrxqAIr2LFpdggsmW2fcfw&usqp=CAU" alt=""/>
             <div>
                 <h4>6 Months ago</h4>
                 <p>in makkah</p>
             </div>
         </div>
         <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKq0GvoFM_c-4PnyYK6N2ddNtZ04fALCwp4Q&usqp=CAU" alt=""/>
             <div>
                 <h4>2 week ago</h4>
                 <p>in Sakakah </p>
             </div>
         </div>
     </section>
     <section>
         <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDGIV9Irr99vM807zFYR_XPX5SW92raaH1yg&usqp=CAU" alt=""/>
             <div>
                 <h4>3 Months ago</h4>
                 <p>in Hail </p>
             </div>
         </div>
         <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_bjQyzpsKK5w5jUmAGNbs2zXcsyXozhFsdQ&usqp=CAU" alt="/"/>
             <div>
                 <h4>2 Months ago</h4>
                 <p>in Domah aljandal </p>
             </div>
         </div>
         <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmqM0TdRB-10Bl6w8ThYIOvjjPhPUyYYOJQ&usqp=CAU" alt=""/>
             <div>
                 <h4>1 Month ago</h4>
                 <p>in tabuk </p>
             </div>
         </div>
         <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4EI2shJfTt2P2DHzh8Ftp8T7a02jeWIPcJQ&usqp=CAU" alt=""/>
             <div>
                 <h4>3 Months ago</h4>
                 <p>in Hafar Al-Batin </p>
             </div>
         </div>
     </section>
 </article>
 <article class="text">
    <div>
     <h2>يَا أَيُّهَا الَّذِينَ آمَنُواْ أَنفِقُواْ مِمَّا رَزَقْنَاكُم</h2>
     <h3> قال رسول الله صلى الله عليه وسلم: " إن الصدقة لتطفئ غضب الرب وتدفع ميتة السوء" </h3>


     <Link to="/User"><button >singUp</button></Link>
     <Link to="/"><button>Nexet</button></Link>
     </div>
 </article>
 <br/><br/><br/>

 <article class="map">
      <div>
       <section>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwlNqAEil52XRPHmSVb4Luk18qQG9GqcM&sensor=false&language=ko"></script> 

<div id="map_canvas" ></div>
        </section>
         <section>
            <div>
             <h2>To contact us</h2>

             <p>king fahad street,Riyadh,Box:53421</p>
             <p>+966565592921</p>
             <p>support@mobirise.com</p>
             </div>
         </section>
         </div>
    </article>
    <footer>
        <div>
            <section>
                <h4>follow</h4>
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-512.png" alt=""/>
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png" alt=""/>
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-512.png" alt=""/>
            </section>
           
            <section>
                <ul>
                    <li>NEW ARRIVALS</li>
                    <li>DISCOUNTS</li>
                </ul>
                <div>
                <h4>Subscribe to get the latest on sales, new releases and more ...</h4>
                <input type="search"/>
                <button>subscribe</button>
                </div>
            </section>
        </div>
    </footer>


      </div>
    );
}