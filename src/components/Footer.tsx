import { LOGO_URL } from '../utils/constants';

const Footer = () => {
  return (
    <div className="App-footer">
      {/* contact, about, social media links */}
      <div className="App-footer-logo">
        <img src={LOGO_URL} className="App-footer-logo-image" alt="logo" />
      </div>
      <div className="App-footer-links">
        <a href="https://www.foodexpress.com/contact" className="App-footer-link">Contact</a>
        <a href="https://www.foodexpress.com/about" className="App-footer-link">About Us</a>
        <a href="https://www.facebook.com/foodexpress" className="App-footer-link">Facebook</a>
        <a href="https://www.twitter.com/foodexpress" className="App-footer-link">Twitter</a>
        <a href="https://www.instagram.com/foodexpress" className="App-footer-link">Instagram</a>
      </div>
      <div className="copyright">
        <p>&copy; 2024 FoodExpress. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;