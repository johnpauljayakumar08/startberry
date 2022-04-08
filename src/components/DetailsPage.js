import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const DetailsPage = ({ match }) => {
  const [data, setData] = useState([]);
useEffect(() => {
    fetchProduct();
  }, []);
const fetchProduct = () => {
    axios
      .get(`https://carolineolds-strapi-dev.q.starberry.com/properties/?id=${match.params.id}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
return (
    <div>
        <h1>PROPERTY Details</h1>
      {data.map((item) => {
        return (

          <div className='product-container' key={item.id}>
            <div className="container">
                <div className="card">
                    <div className="container-fliud">
                        <div className="wrapper row">
                            <div className="preview col-md-6">
                                
                                <div className="preview-pic tab-content">
                                <div className="tab-pane active" id="pic-1"><img src={item.Images[0].url}/></div>
                                
                                </div>
                                <div  id="pic2">
                                    <img src={item.Images[1].url} />
                                    <img src={item.Images[2].url} />
                                </div>
                                
                                <div  id="pic3">
                                    <img src={item.Images[3].url} />
                                    <img src={item.Images[4].url} />
                                </div>
                                
                               
                                
                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">{item.Price} &pound;    <span>{item.Bedrooms} bed</span>  <span>|</span> <span>{item.Floor_Area} sqm</span></h3>
                                <div className="rating">
                                    
                                </div>
                                <p className="product-description">{item.Bedrooms} Bedrooms {item.Building_Type} for {item.Property_Type}</p>
                                <Link className='contact'>please contact us</Link>
                                <button className="add-to-cart btn btn-default" type="button">CONTACT AGENT</button>
                                <h4 className="price">FACTS & FEATURES</h4>
                                <label>Neighbourhood: fontvieille</label>
                                <label>Price per sqm: {item.Price_Per_Sqm}</label>
                                <label>Brochure: <a href={item.Brochure[0].url}>Download Brochure</a></label>
                                
                                <p>LUXURIOUS FIVE-STAR PROPERTY IN THE HEART OF THE GOLDEN SQUARE AN OUTSTANDING NEW ADDITION TO MONACO The volumes and finishes are of highest quality and standard. The apartment is offered unfurnished with beautiful bathrooms, dressing rooms and fully fitted kitchen; drapes and curtains are included.</p>
                                <div className='profile'>
                                    <img className="profile" src={item.Negotiator.Image.url} />
                                    <h3>{item.Negotiators} <p>{item.Negotiator.Designation}</p> </h3>
                                    
                                </div> 
                                <iframe  src="https://maps.google.com/maps?q='+{item.Latitude}+','+{item.Longitude}+'&hl=es&z=14&amp;output=embed"></iframe> 
                                <button className='back'><Link to='/'>BACK</Link></button>
                            </div>
                            
                        </div>
                    </div>
                </div>
	        </div>
          </div>
        );
      })}
      
    </div>
  );
};
export default DetailsPage;