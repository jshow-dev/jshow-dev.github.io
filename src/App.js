import "./App.css";
import logo from "./rc-logo.png";
import mediaTypes from "./CommonRecordTypes.png";
import React, { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const showHideBuyingInfo = () => {
    setIsVisible(!isVisible);
    // ref.current?.scrollToTop({behavior: 'smooth'});
  };

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
      <button id="hideShow" onClick={() => showHideBuyingInfo()}>
        {isVisible ? "Show Store Info" : "We Buy Records - Learn More"}
      </button>
      <div className="home">
        {!isVisible && (
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
                    <a href="https://www.instagram.com/rec_collect/">
                      Instagram
                    </a>
                  </li>
                  <li className="inventory-link">
                    <a href="https://bit.ly/RCstock">Search Our Inventory</a>
                  </li>
                  <li className="inventory-link">
                    <a href="https://docs.google.com/spreadsheets/d/1JobMmCqXvGa6RirA8ZAbk_5NewV0clxGnry-hE2ewd4/edit?gid=549544028#gid=549544028">
                      New Vinyl
                    </a>
                  </li>
                  <li className="inventory-link">
                    <a href="https://docs.google.com/spreadsheets/d/1JobMmCqXvGa6RirA8ZAbk_5NewV0clxGnry-hE2ewd4/edit?gid=745721087#gid=745721087">
                      Used Vinyl
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </content>
        )}
      </div>
      <div className="buying-info-container">
        {isVisible && (
          <div className="buying-qa">
            <h1 className="buying-header">
              Do you buy used items from individuals?
            </h1>
            <p class-name="buying-info">
              Yes we do! Yes we do! Please read on to find out what we will buy
              and what we won’t buy. Also know that we do not assess the value
              of records for your own sales or for insurance value – we only
              offer our pay-out prices for items based on title and condition.
              We must see the actual items to offer a pay-out price. We cannot
              make offers over the phone or via email (even with photographs).
              We now require appointments to sell items – please call or email
              to set one up (contact information at top of page).{" "}
            </p>
            <h1 className="buying-header">
              What kinds of used items do you buy?
            </h1>
            <div>
              <p class-name="buying-info">
                We buy some LPs, CDs, 45s, cassette tapes and
                music-related/concert DVDs. We also buy some working component
                turntables, amplifiers & receivers and some speaker sets. If you
                have a piece of equipment to sell, we require you to send
                pictures of the items to our email
                <span> </span>
                <a href="mailto: sales@recordcollector.co">
                  sales@recordcollector.com
                </a>
                . Also be aware that it normally takes us longer to assess
                equipment because checking the condition and functionality takes
                more time. <br></br>
                <br></br>We DON’T buy 78s (shellac records), reel-to-reels,
                8-track tapes, memorabilia, movie DVDs, CD players, console
                players or all-in-one players (with built-in speakers, like
                Crosleys or Victrolas). Be aware that there is no premium paid
                for autographed items.
              </p>
              <img
                className="media-types"
                src={mediaTypes}
                alt="types of records"
              ></img>
            </div>

            <h1 className="buying-header">
              What genres or artists do you buy?
            </h1>
            <p class-name="buying-info">
              In general, we only buy records from 1960 or after. We are looking
              for rock and pop, soul, blues, R&B, combo jazz, hip-hop, punk,
              metal, and some country & folk. Not all artists will be purchased
              within those genres. Especially when it comes to country & folk,
              we are looking for well-known or classic artists like Johnny Cash,
              Willie, Nelson, Hank Williams, Dolly Parton or Wanda Jackson (as
              well as some modern country artists). <br></br>
              <br></br>We DON’T buy classical, easy listening/vocalist, kid’s
              records, most big band, nor many compilations/musical recordings
              or holiday records.
            </p>
            <h1 className="buying-header">
              What does the condition have to be for you to buy?
            </h1>
            <p class-name="buying-info">
              Except in the case of very rare items, most records need to be in
              VG to VG+ (Goldmine grading) condition for us to purchase. A VG+
              condition record will show some signs that it was played and
              otherwise handled by a previous owner who took good care of it.
              Defects should be more cosmetic and only affect play marginally
              (such as sleeve scuffs). CDs or DVDs should show nearly no marks –
              and if there are slight scuffs they should be on the outer edge of
              the disc. All turntables must be in working condition for us to
              purchase, cosmetic scuffs are usually okay.<br></br>
              <br></br>LPs, CDs and DVDs need to have the jacket or case for us
              to purchase. 45s will be bought without a picture sleeve, but if
              they were stored outside of a paper sleeve, it is likely the
              condition of the vinyl itself is affected. The jacket does not
              need to be in VG+ condition but cannot have serious mold or mildew
              damage, as that has likely affected the record, as well.<br></br>
              Please note that records are often warped if they were stored for
              long periods of time when not completely upright. Warped records
              are not purchased as they often skip.
            </p>
            <h1 className="buying-header">
              How much do you pay for used items?
            </h1>
            <p class-name="buying-info">
              Prices are ENTIRELY dependent on the specific title and the
              condition of the exact item. Average pay-outs are listed below,
              but some less sought after titles will be less and rare or more
              valuable items will be more. <br></br>
              <span className="emphasized-text">LPs:</span> $2-5 per item for
              vintage titles, more for some current titles <br></br>
              <span className="emphasized-text">CDs/DVDs:</span> $1-3 per item
              45s: $0.25-$2 per item <br></br>
              <span className="emphasized-text">Cassettes:</span> $0.25-3 per
              item <br></br>
              <span className="emphasized-text">Turntables:</span> $20-100 or
              more per item, highly dependent on model <br></br>
              <br></br>We will visually inspect every LP, CD, 45 and cassette.
              We will play-test any equipment. For this reason, we need to see
              each item to assess our pay-outs.
            </p>
            <h1 className="buying-header">
              How many do you buy and how can I bring them in?
            </h1>
            <p class-name="buying-info">
              We buy small bunches of records to entire collections. If you have
              less than 350 items, we normally expect them to be brought down to
              our brick-and-mortar shop during business hours. Before you bring
              any items down to sell, you must call (319-337-5029) or email
              (sales@recordcollector.co) to make an appointment. At that time
              you will be asked to let us know some of the artists/genres and
              the quantity (number of crates, etc.). For large quantities, we
              sometimes need to keep items overnight. We RARELY buy entire
              collections. <br></br>
              <br></br>For larger collections (more than 500 LPs), we may be
              able to offer home visits in Eastern Iowa. Please contact us at
              <span> </span>
              <a href="mailto: sales@recordcollector.co">
                sales@recordcollector.com
              </a>{" "}
              or give us a call if you have a larger collection to sell
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
