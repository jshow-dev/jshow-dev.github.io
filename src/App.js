import logo from "./rc-logo.png";
import "./App.css";
import BuyingComponent from "./buying";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="announcement-banner">
          Site Under Construction - Stay Tuned!
        </h2>
        <div className="contact-info">
          Call: 319-337-5029
          <br></br>
          Text: 319-343-7153 <br></br>
          <a href="mailto: sales@recordcollector.co">
            sales@recordcollector.com
          </a>
        </div>
      </header>
      <content className="App-content">
        <div className="information-container">
          <div className="store-info-container">
            <h4 className="store-info-header">Store Hours:</h4>
            <table className="store-info-content">
              <tbody>
                <tr>
                  <td>Mon:</td>
                  <td>11:00 – 6:00 </td>
                </tr>
                <tr>
                  <td>Tues:</td>
                  <td>CLOSED</td>
                </tr>
                <tr>
                  <td>Weds:</td>
                  <td>11:00 – 6:00</td>
                </tr>
                <tr>
                  <td>Thurs:</td>
                  <td>11:00 – 6:00</td>
                </tr>
                <tr>
                  <td>Fri:</td>
                  <td>11:00 – 7:00</td>
                </tr>
                <tr>
                  <td>Sat:</td>
                  <td>10:00 – 7:00</td>
                </tr>
                <tr>
                  <td>Sun:</td>
                  <td>12:00 – 5:00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="links-section">
            <h4 className="links-header">Find us on:</h4>
            <ol className="links-content">
              <li>
                <a href="https://www.discogs.com/seller/recordcollectoriowa/profile">
                  Discogs
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2FRecord-Collector-104442259586454%2F">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/rec_collect/">Instagram</a>
              </li>
              <li>
                <a href="https://http://bit.ly/RCstock">Search Our Inventory</a>
              </li>
            </ol>
          </div>
        </div>
      </content>
      <BuyingComponent></BuyingComponent>
    </div>
  );
}

export default App;
