import Head from "next/head";
import Icons from "../components/Icons";
import Image from "next/image";

import heroImage from "../public/work.png";

export default function Contact() {
  return (
    <div className="x-adj">
      <Head>
        <title>Hrushi Kedar - Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-8 md:grid  md:grid-cols-2 gap-6">
        <div className="mx-1 mb-10 ">
          <div className="flex justify-between">
            <h1>Lets talk ;)</h1>
          </div>
          <hr />
          <Icons direction />
          <div className="my-btn bg-primary inline-block rounded-md hover:bg-secondary mt-4">
            <a
              href="https://drive.google.com/file/d/1JqCbDX2D3Gi6tJZ9zVrqO_GRfoKcmP6N/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p className="text-semibold px-4 py-1 text-black hover:text-white">
                Resume
              </p>
            </a>
          </div>
        </div>
        <div className="mt-10 ml-10 w-[400px] h-[400px] hidden lg:block">
          <Image src={heroImage} alt="Hero Image"></Image>
        </div>
      </div>
    </div>
  );
}
