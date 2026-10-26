import { LOGO_URL } from '../utils/constants';

const Header = () => {
  return (
    <div className="App-header">
      <div className="App-header-left">
        {/* logo */}
        <img src={LOGO_URL} className="App-logo" alt="logo" />
      </div>
      <div className="App-header-right">
        {/* search */}
        <input type="text" placeholder="Search for location, dish or restaurant" className="App-search"/>
        {/* button - sign in/sign up or profile */}
        <button className="App-button">Sign In</button>
        <button className="App-button">Sign Up</button>
        <button className="App-button">Profile</button>
      </div>
    </div>
  )
}

export default Header;