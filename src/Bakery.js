import React, { useState } from 'react';
import './App.css';

export default function Bakery (){
    const [catSearch, setcatSearch] = useState("all");
    const [searchText, setSearchText] = useState(""); 
    const url1 ="./images/1.jpg"
    const url2 ="./images/2.jpg"
    const url3 ="./images/3.jpg"
    const items = [{image:url1,name:"cake item1",cost:"$50",category:"cakes"},{image:url2,name:"cupcake item1",cost:"$30",category:"cupcakes"},
    {image:url3,name:"cupcake item2",cost:"$90",category:"cupcakes"},{image:url1,name:"cake item2",cost:"$20",category:"cakes"},
    {image:url2,name:"sweet item1",cost:"$60",category:"sweets"},{image:url3,name:"sweet item2",cost:"$35",category:"sweets"} ];
    return (
            <div className="Maindiv">
                
                    <h1 className="heading"><span className="our">Mini</span>&nbsp;<span className="store">E-Commerce Store</span></h1>
                 <div>
                    <button  className="btn but" onClick={() => setcatSearch("all") }><b>All</b></button>
                    <button className="btn but" onClick={() => setcatSearch("cakes") }><b>Cakes</b></button>
                    <button className="btn but" onClick={() => setcatSearch("cupcakes")}><b>Cup Cakes</b></button>
                    <button className="btn but" onClick={() => setcatSearch("sweets")}><b>Sweets</b></button>
                </div> 
                <input type="text" placeholder="Search Item" className="search" size="57" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/> 
                <div className="items">
                    {items.filter(item =>{
                        if(catSearch==="all"){  use enti adhi?exam online konni companies and accenture ki kuda eok
                            return item
                        }
                        else{
                            return item.category===catSearch;
                        }
                        }).filter(item =>  item.name.toLowerCase().indexOf(searchText.toLowerCase())
                            >-1).length>0?items.filter(item =>{
                                if(catSearch==="all"){
                                    return item
                                }
                                else{
                                    return item.category===catSearch;
                                }
                                }).filter(item =>  item.name.toLowerCase().indexOf(searchText.toLowerCase())
                                    >-1).map((item ,index)=> (
                                <div key={index} className="item">
                                    <div className="image">
                                        <img src={item.image} alt="item pic"/>
                                    </div>
                                    <p className="d-flex">
                                    <span style={{margin:"5px"}}>{item.name}</span>          
                                    <span>{item.cost}</span>
                                    </p>
                                </div>
                        )):<h2>No Items found!</h2>}
                </div>
                 
             
            </div>
    )
}