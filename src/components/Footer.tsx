function Footer() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-20 ">
      <div>
        © {new Date().getFullYear()}
        &nbsp;parkseungwoo all rights reserved.
      </div>
    </div>
  );
}

export default Footer;
