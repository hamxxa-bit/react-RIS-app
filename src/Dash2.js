import logo from './logo.svg';
// import './App.css';
import './style2.css';
import Calendar from './assets/calendar.png';
import Logo from './assets/LOGO.png';
import Pay from './assets/Payments.png';
import Leftb from './assets/Project-details.png';
import Customer from './assets/CR.jpeg';
import Dashboard from './assets/Dashb.jpeg';
import DD from './assets/DD.jpeg';
import Notification from './assets/Noti.jpeg';
import PP from './assets/PP.jpeg';

function Dash2() {

  return (

<>
  <div className="sidebar">
    <div className="logo-details">
    
      <img src={Logo} style={{ marginLeft: 47, width: 84}} />
 
      <hr />
    </div>
    <ul className="nav-links">
      <li>
        <a href="#" className="active">
          <i className="bx bx-grid-alt" />

          <img src={PP} style={{ marginLeft: -20, width: 35}} />
          <span style={{color:"#ffffff"}} className="links_name">Harsh Kadyan</span>
         
        </a>
        <hr style={{marginLeft:30, marginRight:10, color:'#707070'}}/>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-grid-alt" />
          <img src={Dashboard} style={{ marginLeft: -35, width: 26, marginTop:20}} />
       
          <span style={{marginLeft:10,marginTop:20}} className="links_name">Dashboard</span>
        </a>
        <hr style={{marginLeft:30, marginRight:10, color:'#707070'}}/>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-box" />
          <img src={Leftb} style={{ marginLeft: -35, width: 26, marginTop:20}} />
          <span style={{marginLeft:10,marginTop:20}} className="links_name">Project details</span>
        </a>
        <hr style={{marginLeft:30, marginRight:10, color:'#707070'}}/>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-list-ul" />
          <img src={Customer} style={{ marginLeft: -35, width: 26, marginTop:20}} />
          <span style={{marginLeft:10,marginTop:20}} className="links_name">Customer Relationship</span>
        </a>
        <hr style={{marginLeft:30, marginRight:10, color:'#707070'}}/>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-pie-chart-alt-2" />
          <img src={Pay} style={{ marginLeft: -35, width: 26, marginTop:20}} />
          <span style={{marginLeft:10,marginTop:20}} className="links_name">Payments</span>
        </a>
        <hr style={{marginLeft:30, marginRight:10, color:'#707070'}}/>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-coin-stack" />
          <img src={Calendar} style={{ marginLeft: -35, width: 26, marginTop:20}} />
          <span style={{marginLeft:10,marginTop:20}} className="links_name">Calendar</span>
        </a>
        <hr style={{marginLeft:30, marginRight:10, color:'#707070'}}/>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-book-alt" />
          <img src={Notification} style={{ marginLeft: -35, width: 26, marginTop:20}} />
          <span style={{marginLeft:10,marginTop:20}} className="links_name">Notification</span>
        </a>
         <hr style={{marginLeft:30, marginRight:10, color:'#707070'}}/>
      </li>
   
    </ul>
  </div>
  <section className="home-section">
    <nav>
      <div className="sidebar-button">

      </div>
      <div className="search-box">
       
      </div>
      
      <a style={{ color: "#ffffff" }} href="https://www.rnsitsolutions.com">
        www.rnsitsolutions.com
      </a>
      <i className="bx bx-chevron-down" />
    </nav>
    <div className="home-content">
      <div className="overview-boxes">
        <div className="box">
          <div className="right-side">
            <div className="box-topic">
              <span className="bxt" style={{ color: "#3411E2" }}>
                1  
              </span>
                Ongoing project
            </div>
            
            <div className="indicator">
              
            </div>
          </div>

        </div>
        <div className="box">
          <div className="right-side">
            <div  className="box-topic">
              <span className="bxt" style={{ color: "#0EC552"}}>
                3  
              </span >{" "}
              Completed Projects
            </div>

            <div className="indicator">
              
            </div>
          </div>

        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">
              <span className="bxt" style={{ color: "#D6AE0E" }}>
                2  
              </span>{" "}
              Queued Projects
            </div>

            <div className="indicator">
   
            </div>
          </div>
    
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">
              <span className="bxt" style={{ color: "#FF0000" }}>
                1  
              </span>{" "}
              Cancelled Project
            </div>
   
            <div className="indicator">
      
            </div>
          </div>

        </div>
      </div>

      <div className="sales-boxes">
  
        <div className="bxd">
          <div className="title">
            <div className="bxt" style={{ marginLeft: 20 }}>
              <b>Kigar Grocery App</b>
            </div>
          </div>
          <div className="vertical" />
          <hr style={{ marginLeft: "-1px", marginRight: "-1px", color:"#BFBFBF" }} />
          <div className="spt">
            <p>Category:E-Commerce</p>
            <p style={{ marginTop: 30 }}>Name of Client : Himanshu Agarwal</p>
            <p style={{ marginTop: 30 }}>Total Amount : INR 1,28,000</p>
            <p style={{ marginTop: 30, color:"green" }}>Amount payed : INR 1,28,000</p>
            {/* <p style={{ marginTop: 30 }}>Pending Amount : INR 77,000</p> */}
            {/* <p style={{ marginTop: 30, color: "#FF0000" }}>
              Next Payment Date : 12 March 2022
            </p> */}
            {/* <hr style={{ marginLeft: "-30px", marginRight:1, marginTop: 20, color:"#BFBFBF" }} /> */}
          </div>
          <div className="spx">
            <p style={{ marginTop: "-69px" }}>
              Project Manager : Saurav Kumawat
            </p>
            <p style={{ marginTop: 30 }}>
              Customer Relationship Manager : Shalini Bajaj
            </p>
            <p style={{ marginTop: 30}}><a style={{color:"#1C3CDD"}}href='#'>
            View Project and maintenance details
            </a>
            </p>
            <p style={{ marginTop: 30, color:"green" }}>Delivered date : 26 March 2022</p>
      
            {/* <p style={{ marginTop: 50, color: "#FF0000" }}>
              Project Delivery Date : 27 March 2022
            </p> */}
          </div>
          {/* <p className="sft">
            View Complete Details in <a  href="#">Project Details</a>
          </p> */}
         

        </div>
      
      </div>
      <div className="sales-boxes">
  
        <div className="bxd">
          <div className="title">
            <div className="bxt" style={{ marginLeft: 20 }}>
              <b>Kigar Grocery App</b>
            </div>
          </div>
          <div className="vertical" />
          <hr style={{ marginLeft: "-1px", marginRight: "-1px", color:"#BFBFBF" }} />
          <div className="spt">
            <p>Category:E-Commerce</p>
            <p style={{ marginTop: 30 }}>Name of Client : Himanshu Agarwal</p>
            <p style={{ marginTop: 30 }}>Total Amount : INR 1,28,000</p>
            <p style={{ marginTop: 30, color:"green" }}>Amount payed : INR 1,28,000</p>
            {/* <p style={{ marginTop: 30 }}>Pending Amount : INR 77,000</p> */}
            {/* <p style={{ marginTop: 30, color: "#FF0000" }}>
              Next Payment Date : 12 March 2022
            </p> */}
            {/* <hr style={{ marginLeft: "-30px", marginRight:1, marginTop: 20, color:"#BFBFBF" }} /> */}
          </div>
          <div className="spx">
            <p style={{ marginTop: "-69px" }}>
              Project Manager : Saurav Kumawat
            </p>
            <p style={{ marginTop: 30 }}>
              Customer Relationship Manager : Shalini Bajaj
            </p>
            <p style={{ marginTop: 30}}><a style={{color:"#1C3CDD"}}href='#'>
            View Project and maintenance details
            </a>
            </p>
            <p style={{ marginTop: 30, color:"green" }}>Delivered date : 26 March 2022</p>
      
            {/* <p style={{ marginTop: 50, color: "#FF0000" }}>
              Project Delivery Date : 27 March 2022
            </p> */}
          </div>
          {/* <p className="sft">
            View Complete Details in <a  href="#">Project Details</a>
          </p> */}
         

        </div>
      
      </div>
      <div className="sales-boxes">
  
        <div className="bxd">
          <div className="title">
            <div className="bxt" style={{ marginLeft: 20 }}>
              <b>Kigar Grocery App</b>
            </div>
          </div>
          <div className="vertical" />
          <hr style={{ marginLeft: "-1px", marginRight: "-1px", color:"#BFBFBF" }} />
          <div className="spt">
            <p>Category:E-Commerce</p>
            <p style={{ marginTop: 30 }}>Name of Client : Himanshu Agarwal</p>
            <p style={{ marginTop: 30 }}>Total Amount : INR 1,28,000</p>
            <p style={{ marginTop: 30, color:"green" }}>Amount payed : INR 1,28,000</p>
            {/* <p style={{ marginTop: 30 }}>Pending Amount : INR 77,000</p> */}
            {/* <p style={{ marginTop: 30, color: "#FF0000" }}>
              Next Payment Date : 12 March 2022
            </p> */}
            {/* <hr style={{ marginLeft: "-30px", marginRight:1, marginTop: 20, color:"#BFBFBF" }} /> */}
          </div>
          <div className="spx">
            <p style={{ marginTop: "-69px" }}>
              Project Manager : Saurav Kumawat
            </p>
            <p style={{ marginTop: 30 }}>
              Customer Relationship Manager : Shalini Bajaj
            </p>
            <p style={{ marginTop: 30}}><a style={{color:"#1C3CDD"}}href='#'>
            View Project and maintenance details
            </a>
            </p>
            <p style={{ marginTop: 30, color:"green" }}>Delivered date : 26 March 2022</p>
      
            {/* <p style={{ marginTop: 50, color: "#FF0000" }}>
              Project Delivery Date : 27 March 2022
            </p> */}
          </div>
          {/* <p className="sft">
            View Complete Details in <a  href="#">Project Details</a>
          </p> */}
         

        </div>
      
      </div>

      
     
    </div>
    
  </section>
</>


    );
}

export default Dash2;