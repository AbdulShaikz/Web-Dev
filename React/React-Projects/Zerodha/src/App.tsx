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
          
        </footer>
      </div>
    </>
  )
}

export default App
