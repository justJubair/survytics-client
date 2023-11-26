import logo from "../../assets/images/logo.png";
const Footer = () => {
  return (
    
      <footer className="footer p-10 bg-base-200 text-base-content mt-28">
        <aside>
          <img className="w-28 px-4 py-2 bg-gradient-to-r from-cyan-600 to-[#24962a]" src={logo} alt="logo" />
          <p>
            Survytics online surveys inc.
            <br />
            Providing reliable surveys since 2023
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Online Surveys</a>
          <a className="link link-hover">Research</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
   
  );
};
export default Footer;
