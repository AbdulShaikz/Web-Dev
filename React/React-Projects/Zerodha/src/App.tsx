import './App.css'
import Button from './components/Button'

function App() {
  return (
    <>
      <div>
        <header>
          <title>Zerodha</title>
          <nav className='bg-green-800'>
            <ul className='flex'>
              <li>Signup</li>
              <li>About</li>
              <li>Products</li>
              <li>Pricing</li>
              <li>Support</li>
            </ul>
          </nav>
        </header>
        <main>
          <div>
          <img src="src/assets/images/landing.png" alt="landing-image" />
          </div>
          <div>
            <h2>Invest Everything</h2>
            <h3>Online platform to invest in stocks, derivatives, mutual funds, and more</h3>
            <Button>
              Sign up now
            </Button>
          </div>
          <div>
            <img src="src/assets/images/largest-broker.svg" alt='largest-broker'/>
          </div>
          <div>
            <h2>Largest stock broker in India</h2>
            <p>1+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
            <ul>
              <li>Futures and Options</li>
              <li>Commodity derivatives</li>
              <li>Currency derivatives</li>
              <li>Stocks & IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and Govt. Securities</li>
              <img src='src/assets/images/press-logos.png' alt='press-logos'/>
            </ul>
          </div>
          <div>
            <h2>The Zerodha Universe</h2>
            <h3>A whole ecosystem of modern investment apps tailored to specific needs, built from the ground up</h3>
            <img src="src/assets/images/ecosystem.png" alt="eco-system" />
            <div>
              <a>Explore our products &rarr;</a>
              <a>Try Kite demo &rarr;</a>
            </div>
          </div>
          <div>
            <h2>Unbeatable pricing</h2>
            <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            <a>See pricing &rarr;</a>
            <div>
              <div>
                <h2>₹0</h2>
                <p>Free equity delivery and direct mutual funds</p>
              </div>
              <div>
                <h2>₹20</h2>
                <p>Intraday and F&O</p>
              </div>
            </div>
          </div>
          <div>
            <img src="src/assets/images/index-education.svg" alt="index-education"/>
            <h3>Free and open market education</h3>
            <div>
            <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a>Varsity &rarr;</a>
            </div>
            <div>
            <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <a>TradingQ&A  &rarr;</a>
            </div>
          </div>
          <div>
            <h2>Open a Zerodha account</h2>
            <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <Button>Sign up now</Button>
          </div>
        </main>
        <footer>
          <div className="footer">
            <div>
              <div>
                <div>
                  <img src="src/assets/images/logo.svg" alt="footer-image" />
                  <p> &copy; 2010 - 2024, Zerodha Broking Ltd. All rights reserved.</p>
                </div>
                <div>Social icons</div>
              </div>
              <div>
              <ul>
                  <li>Company</li>
                  <li><a href="">About</a></li>
                  <li><a href="">Products</a></li>
                  <li><a href="">Pricing</a></li>
                  <li><a href="">Referral programme</a></li>
                  <li><a href="">Careers</a></li>
                  <li><a href="">Zerodha.tech</a></li>
                  <li><a href="">Press & media</a></li>
                  <li><a href="">Zerodha cares (CSR)</a></li> 
                </ul>
              </div>
              <div>
              <ul>
                  <li>Support</li>
                  <li><a href="">Contact us</a></li>
                  <li><a href="">Support portal</a></li>
                  <li><a href="">Z-Connect blog</a></li>
                  <li><a href="">List of charges</a></li>
                  <li><a href="">Downloads & resources</a></li>
                  <li><a href="">Videos</a></li>
                  <li><a href="">Market overview</a></li>
                  <li><a href="">How to file a complaint?</a></li>
                  <li><a href="">Status of your complaints</a></li> 
                </ul>
              </div>
              <div>
                <ul>
                  <li>Account</li>
                  <li><a href="">Open an account</a></li>
                  <li><a href="">Fund transfer</a></li>
                </ul>
              </div>
            </div>
            <div>
              <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &amp; MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF

Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances

Smart Online Dispute Resolution

Investments in securities market are subject to market risks; read all the related documents carefully before investing.

Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.

"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
            </div>
            <div>
              <ul>
                <li>NSE</li>
                <li>BSE</li>
                <li>MCX</li>
                <li>Terms & Conditions</li>
                <li>Policies & Procedures</li>
                <li>Privacy policy</li>
                <li>Disclosure</li>
                <li>For investor's attention</li>
                <li>Investor charter</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
