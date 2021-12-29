import Icons from "../components/Icons";

function Footer() {
  return (
    <footer className="flex justify-center pb-0">
      <div className="text-center w-full">
        {/* <Icons /> */}
        <hr className="mt-1 mb-2" />
        <h3>
          {new Date().getFullYear()} - <a href="">hrushikedar.me</a>
        </h3>
      </div>
    </footer>
  );
}

export default Footer;
