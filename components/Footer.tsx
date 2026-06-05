

const Footer = () => {
  return (
    <footer className="bg-[#F5F1E5]">
      <div className="border-t border-[#ddd2b8] py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-[#0096d6] text-sm">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Shipping Policy</a>
            <a href="#">Refund Policy</a>
            <a href="#">Blogs</a>
            <a href="#">Media</a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-5 text-[#0096d6]">
            <a href="#">
              {/* // <Facebook size={18} /> */}
            </a>

            <a href="#">
              {/* <Instagram size={18} /> */}
            </a>

            <a href="#">
              {/* <Youtube size={18} /> */}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#c99654] text-white text-xs py-3">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-3">
          <p>© 2024 Parsi Dairy Farm. All rights reserved.</p>

          <p>Designed by Pixel Soul | Developed by makers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
