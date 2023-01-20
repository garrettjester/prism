import Image from "next/image";
import sanityClient from "../../utils/SanityClient";
import imageUrlBuilder from '@sanity/image-url';
import styles from "./ProfileImage.module.scss";

const builder = imageUrlBuilder(sanityClient)

function urlFor(source) {
  return builder.image(source).fit("max").url()
}


const ProfileImage = ({src, alt, ...props}) => {
  return (
    <div className={styles.imageBackground} {...props}>
        <div className={styles.image}>
          <Image
            quality={100}
            objectFit="contain"
            objectPosition="bottom"
            layout="fill"
            src={urlFor(src)}
            alt={alt}
          />
        </div>
      </div>
  )
}

export default ProfileImage;