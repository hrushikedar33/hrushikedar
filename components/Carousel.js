import React from "react";
import Image from "next/image";

function Carousel({ slug, title, totalImages }) {
  const myLoader = ({ src }) => {
    return `https://firebasestorage.googleapis.com/v0/b/hrushikesh-kedar.appspot.com/o/${slug}%2F${src}?alt=media&token=49ce9181-55c1-48e3-b71f-1c3f1879ae29`;
  };
  return (
    <div className="flex relative overflow-x-auto gap-6 snap-x snap-mandatory before:shrink-0 before:w-30 after:shrink-0 after:w-30 md:before:shrink-0 md:before:w-0 md:after:shrink-0 md:after:w-0 pb-5 scrollbar">
      {[...Array(totalImages + 1).keys()].slice(1).map((x, i) => (
        <>
          <div className="shrink-0 snap-center" key={i}>
            <Image
              loader={myLoader}
              alt={title}
              src={x + ".webp"}
              width={250}
              height={550}
            ></Image>
          </div>
        </>
      ))}
    </div>
  );
}

export default Carousel;
