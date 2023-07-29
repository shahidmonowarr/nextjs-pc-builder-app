/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="bg-base-200 ">
      <footer className="container mx-auto footer p-10 text-base-content">
        <div>
          <Link href="/">
            <Image src={logo} width={300} height={300} />
          </Link>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
