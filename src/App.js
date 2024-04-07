
import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);

  // Define fetchData function
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8081/csc206');
      const newData = await response.json();
      setData(newData); // Set new data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  useEffect(() => {
    fetchData(); // Initial fetch
  
    const interval = setInterval(fetchData, 5000); 
  
    return () => clearInterval(interval);
    
  }, []);
  

  return (
    <div className='app'>
      <h1 style={{ textAlign: 'center', fontFamily:'monospace', fontWeight:'bolder', paddingTop:'20px', paddingBottom:'30px', marginTop:'50px', overflowX:'hidden'}}>DATABASE CARDS</h1>
      <div className="container" style={{ paddingTop: '20px' }}>
        {data.slice(0, 6).map((d, i) => (
                 <div className="row" key={i}>
            <div className="col-md-4 col-sm-6">
              <div className="card" style={{ border: '2px solid black' }}>
                <div className="card-body" style={{backgroundColor:'#f3f2ff'}}>
                  <h5 className="card-title" style={{textAlign:'center', fontWeight:'bolder'}}>TIME</h5>
                  <hr />
                  <p className="card-text" style={{textAlign:'center', paddingTop:'50px', fontWeight:'bolder', fontSize:'17px'}}>{d.time}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card" style={{ border: '2px solid black' }}>
                <div className="card-body" style={{backgroundColor:'#f2fff4'}}>
                  <h5 className="card-title" style={{textAlign:'center', fontWeight:'bolder'}}>TEMPRATURE</h5>
                  <hr />
                  <p className="card-text"  style={{textAlign:'center', paddingTop:'50px', fontWeight:'bolder', fontSize:'20px'}}>{d.temprature}°C</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card" style={{ border: '2px solid black' }}>
                <div className="card-body" style={{backgroundColor:'#fffcf2',}}>
                  <h5 className="card-title" style={{textAlign:'center',fontWeight:'bolder'}}>RELATIVE HUMIDITY</h5>
                  <hr />
                  <p className="card-text" style={{textAlign:'center', paddingTop:'50px',fontWeight:'bolder', fontSize:'20px'}}>{d.relativehumidity}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card" style={{ border: '2px solid black' }}>
                <div className="card-body" style={{backgroundColor:'#fcf2ff'}}>
                  <h5 className="card-title" style={{textAlign:'center', fontWeight:'bolder'}}>PRESSURE</h5>
                  <hr />
                  <p className="card-text" style={{textAlign:'center', paddingTop:'50px',fontWeight:'bolder', fontSize:'20px'}}>{d.pressure}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card" style={{ border: '2px solid black' }}>
                <div className="card-body" style={{backgroundColor:'#fffcf2'}}>
                  <h5 className="card-title" style={{textAlign:'center', fontWeight:'bolder'}}>ALTITUDE</h5>
                  <hr />
                  <p className="card-text" style={{textAlign:'center', paddingTop:'50px',fontWeight:'bolder', fontSize:'20px'}}>{d.altitude}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card" style={{ border: '2px solid black' }}>
                <div className="card-body" style={{backgroundColor:'#fff2f3'}}>
                  <h5 className="card-title" style={{textAlign:'center', fontWeight:'bolder'}}>OXYGEN LEVEL</h5>
                  <hr />
                  <p className="card-text" style={{textAlign:'center', paddingTop:'50px',fontWeight:'bolder', fontSize:'20px'}}>{d.oxygenlevel}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
