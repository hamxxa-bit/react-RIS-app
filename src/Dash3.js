import logo from './logo.svg';
// import './App.css';
import './style3.css';
import Calendar from './assets/calendar.png';
import Logo from './assets/LOGO.png';
import Pay from './assets/Payments.png';
import Leftb from './assets/Project-details.png';
import Customer from './assets/CR.jpeg';
import Dashboard from './assets/Dashb.jpeg';
import DD from './assets/DD.jpeg';
import Notification from './assets/Noti.jpeg';
import PP from './assets/PP.jpeg';

function Dash3() {
  // var selector = '.links_name h3';

// (selector).on('click', function(){
//    (selector).removeClass('act');
//    (this).addClass('act');
// });
  return (

<>
  <div className="sidebar">
    <div className="logo-details">
      {/* <i class='bx bxl-c-plus-plus'></i> */}
      <img src={Logo} style={{ marginLeft: 47, width: 84}} />
      {/* <span class="logo_name">RNS</span> */}
      <hr />
    </div>
    <ul className="nav-links">
      <li>
        <a href="#" className="active">
          <i className="bx bx-grid-alt" />
          {/* <div className='aju'> */}
          <img src={PP} style={{ marginLeft: -20, width: 35}} />
          <span style={{color:"#ffffff"}} className="links_name">Harsh Kadyan</span>
          {/* <img src={DD} style={{ marginLeft: 47, width: 84}} /> */}
          {/* </div> */}
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
      {/* <li>
    <a href="#">
      <i class='bx bx-user' ></i>
      <span class="links_name">Team</span>
    </a>
  </li>
  <li>
    <a href="#">
      <i class='bx bx-message' ></i>
      <span class="links_name">Messages</span>
    </a>
  </li>
  <li>
    <a href="#">
      <i class='bx bx-heart' ></i>
      <span class="links_name">Favrorites</span>
    </a>
  </li>
  <li>
    <a href="#">
      <i class='bx bx-cog' ></i>
      <span class="links_name">Setting</span>
    </a>
  </li>
  <li class="log_out">
    <a href="#">
      <i class='bx bx-log-out'></i>
      <span class="links_name">Log out</span>
    </a>
  </li>
</ul> */}
    </ul>
  </div>
  <section className="home-section">
    <nav>
      <div className="sidebar-button">
        {/* <i class='bx bx-menu sidebarBtn'></i> */}
        {/* <span class="dashboard">Dashboard</span> */}
      </div>
      <div className="search-box">
        {/* <input type="text" placeholder="Search..."> */}
        {/* <i class='bx bx-search' ></i> */}
      </div>
      {/* <div class="profile-details"> */}
      {/*<img src="images/profile.jpg" alt="">*/}
      {/* <span class="admin_name">Prem Shahi</span> */}
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
            {/* <div class="number">40,876</div> */}
            <div className="indicator">
              {/* <i class='bx bx-up-arrow-alt'></i> */}
              {/* <span class="text">Up from yesterday</span> */}
            </div>
          </div>
          {/* <i class='bx bx-cart-alt cart'></i> */}
        </div>
        <div className="box">
          <div className="right-side">
            <div  className="box-topic">
              <span className="bxt" style={{ color: "#0EC552"}}>
                3  
              </span >{" "}
              Completed Projects
            </div>
            {/* <div class="number">38,876</div> */}
            <div className="indicator">
              {/* <i class='bx bx-up-arrow-alt'></i> */}
              {/* <span class="text">Up from yesterday</span> */}
            </div>
          </div>
          {/* <i class='bx bxs-cart-add cart two' ></i> */}
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">
              <span className="bxt" style={{ color: "#D6AE0E" }}>
                2  
              </span>{" "}
              Queued Projects
            </div>
            {/* <div class="number">$12,876</div> */}
            <div className="indicator">
              {/* <i class='bx bx-up-arrow-alt'></i> */}
              {/* <span class="text">Up from yesterday</span> */}
            </div>
          </div>
          {/* <i class='bx bx-cart cart three' ></i> */}
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">
              <span className="bxt" style={{ color: "#FF0000" }}>
                1  
              </span>{" "}
              Cancelled Project
            </div>
            {/* <div class="number">11,086</div> */}
            <div className="indicator">
              {/* <i class='bx bx-down-arrow-alt down'></i> */}
              {/* <span class="text">Down From Today</span> */}
            </div>
          </div>
          {/* <i class='bx bxs-cart-download cart four' ></i> */}
        </div>
      </div>
      <div className="sales-boxes">
        {/* <div class="recent-sales box"> */}
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
            <p style={{ marginTop: 30 }}>Token Money Paid : INR 12,800</p>
            <p style={{ marginTop: 30 }}>Pending Amount : INR 77,000</p>
            <p style={{ marginTop: 30, color: "#FF0000" }}>
              Next Payment Date : 12 March 2022
            </p>
            <hr style={{ marginLeft: "-30px", marginRight:1, marginTop: 20, color:"#BFBFBF" }} />
          </div>
          <div className="spx">
            <p style={{ marginTop: "-69px" }}>
              Project Manager : Saurav Kumawat
            </p>
            <p style={{ marginTop: 30 }}>
              Customer Relationship Manager : Shalini Bajaj
            </p>
            <p style={{ marginTop: 30 }}>
            Proposal approved date : 7th March
            </p>
            <p style={{ marginTop: 30 }}><a style={{color:"#197DEF"}}href="#">Download Proposal</a></p>
            {/* <p style=" margin-top: 30px">Name of Client : Himanshu Agarwal</p> */}
            <p style={{ marginTop: 50, color: "#FF0000" }}>
            Project Start Date : 12 March 2022
            </p>
          </div>
          <p className="sft">
            View Complete Details in <a  style={{color:"#197DEF"}}href="#">Project Details</a>
          </p>
          {/* <div class="Category: E-Commerce">
      <ul class="details">
        <li class="topic">Category:e-Commerce</li>
        <li><a href="#">02 Jan 2021</a></li>
        <li><a href="#">02 Jan 2021</a></li>
        <li><a href="#">02 Jan 2021</a></li>
        <li><a href="#">02 Jan 2021</a></li>
        <li><a href="#">02 Jan 2021</a></li>
        <li><a href="#">02 Jan 2021</a></li>
        <li><a href="#">02 Jan 2021</a></li>
      </ul>
      <ul class="details">
      <li class="topic">Customer</li>
      <li><a href="#">Alex Doe</a></li>
      <li><a href="#">David Mart</a></li>
      <li><a href="#">Roe Parter</a></li>
      <li><a href="#">Diana Penty</a></li>
      <li><a href="#">Martin Paw</a></li>
      <li><a href="#">Doe Alex</a></li>
      <li><a href="#">Aiana Lexa</a></li>
      <li><a href="#">Rexel Mags</a></li>
       <li><a href="#">Tiana Loths</a></li>
    </ul>
    <ul class="details">
      <li class="topic">Sales</li>
      <li><a href="#">Delivered</a></li>
      <li><a href="#">Pending</a></li>
      <li><a href="#">Returned</a></li>
      <li><a href="#">Delivered</a></li>
      <li><a href="#">Pending</a></li>
      <li><a href="#">Returned</a></li>
      <li><a href="#">Delivered</a></li>
       <li><a href="#">Pending</a></li>
      <li><a href="#">Delivered</a></li>
    </ul>
    <ul class="details">
      <li class="topic">Total</li>
      <li><a href="#">$204.98</a></li>
      <li><a href="#">$24.55</a></li>
      <li><a href="#">$25.88</a></li>
      <li><a href="#">$170.66</a></li>
      <li><a href="#">$56.56</a></li>
      <li><a href="#">$44.95</a></li>
      <li><a href="#">$67.33</a></li>
       <li><a href="#">$23.53</a></li>
       <li><a href="#">$46.52</a></li>
    </ul>
    </div> */}
          {/* <div class="button"> */}
          {/* <a href="#">See All</a> */}
        </div>
        {/* </div> */}
      </div>
      {/* <div class="top-sales box">
    <div class="title">Top Seling Product</div>
    <ul class="top-sales-details">
      <li>
      <a href="#">
        <img src="images/sunglasses.jpg" alt="">
        <span class="product">Vuitton Sunglasses</span>
      </a>
      <span class="price">$1107</span>
    </li>
    <li>
      <a href="#">
         <img src="images/jeans.jpg" alt="">
        <span class="product">Hourglass Jeans </span>
      </a>
      <span class="price">$1567</span>
    </li>
    <li>
      <a href="#">
       <img src="images/nike.jpg" alt="">
        <span class="product">Nike Sport Shoe</span>
      </a>
      <span class="price">$1234</span>
    </li>
    <li>
      <a href="#">
        <img src="images/scarves.jpg" alt="">
        <span class="product">Hermes Silk Scarves.</span>
      </a>
      <span class="price">$2312</span>
    </li>
    <li>
      <a href="#">
        <img src="images/blueBag.jpg" alt="">
        <span class="product">Succi Ladies Bag</span>
      </a>
      <span class="price">$1456</span>
    </li>
    <li>
      <a href="#">
        <img src="images/bag.jpg" alt="">
        <span class="product">Gucci Womens's Bags</span>
      </a>
      <span class="price">$2345</span>
    <li>
      <a href="#">
        <img src="images/addidas.jpg" alt="">
        <span class="product">Addidas Running Shoe</span>
      </a>
      <span class="price">$2345</span>
    </li>
<li>
      <a href="#">
       <img src="images/shirt.jpg" alt="">
        <span class="product">Bilack Wear's Shirt</span>
      </a>
      <span class="price">$1245</span>
    </li>
    </ul>
  </div> */}
    </div>
  </section>
</>


    );
}

export default Dash3;