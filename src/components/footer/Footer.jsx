import "./Footer.scss";
import facebookImg from "../../assets/icons/Icon-facebook.svg";
import instagramImg from "../../assets/icons/Icon-instagram.svg";
import twitterImg from "../../assets/icons/Icon-twitter.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer__img" src={facebookImg} alt="Facebook logo" />
      <img className="footer__img" src={instagramImg} alt="Instagram logo" />
      <img className="footer__img" src={twitterImg} alt="Twitter logo" />
      <a href="mailto:thomaswilliamdaley@gmail.com">Contact</a>
    </div>
  );
};

export default Footer;
<footer></footer>;
