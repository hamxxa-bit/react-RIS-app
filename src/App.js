import logo from './logo.svg';
// import './App.css';
import './style.css';
import Footer from './Footer.jpeg';
import Logo from './Logo.jpeg';
import Link from './Link.jpeg';
import Leftb from './Left-box.jpeg';

function App() {
  return (
  
  <div className="box-form">
    <div className="left">
      <div className="overlay">
        <h1>
          <strong>Client Log-in</strong>
        </h1>
        <hr style={{ marginRight: "-18px", marginLeft: "-22px" }} />
        <p>
          Get Complete Support and Track your project progress on the way,
          
          with the world's most easy Client Support System
        </p>
        <lottie-player
          src="log in.json"
          background="transparent"
          speed={1}
          style={{ width: 1125, height: 999 }}
          loop=""
          autoPlay=""
        />
      </div>
    </div>
    <div className="right">
      <div className="overlay">
        <h1>
          <img src={Logo} />
          <tab>
            <div className="linkl">
              <a href="https://rnsitsolutions.com">
                <img src={Link} height="30px" />
              </a>
            </div>
          </tab>
        </h1>
        <hr />
        <div className="inputs">
          <input type="text" placeholder="Enter your Unique client ID" />
          <input type="text" placeholder="Enter your E-mail" />
          <br />
          <input type="password" placeholder="Enter password" />
        </div>
        {/*<h5>Login</h5>*/}
        <div className="remember-me--forget-password">
          {/* Angular */}
          <p>
            <a href="#">Forgot password?</a>
          </p>
        </div>
        <br />
        <button type="button" className="block">
          Log-in
        </button>
        <br />
        <p>
          Not our client yet? <a href="#">Contact Us</a> now, to become one
        </p>
        {/* <section class="right"> */}
        <footer>
          <img src={Footer} width="700px" style={{ marginLeft:"79px", marginTop: "20px"}} />
          {/* <p style={{marginLeft: "200px"}}> */}
          

          {/* </p> */}
        </footer>
      </div>
    </div>
    {/* partial */}
  </div>

  );
}

export default App;
