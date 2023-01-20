/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../utils/SanityClient";
const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

// A component for displaying a Sanity block-style image within portable text.
const BlockImage = ({ src, ...props }) => {

  const {caption} = src;

  return (
    <div>
      <img
        style={{width: '100%'}}
        alt="Mountains"
        src={urlFor(src).url()}
        layout="fill"
        objectFit="contain"
      />
      {caption && <p style={{fontWeight: 200}}>{caption}</p>}
   </div>
  );
};

export default BlockImage;
