import styles from "./AuthorBox.module.scss";
import Link from "next/link";
import ProfileImage from "../profile-image/ProfileImage";

// A component to display information about the author
//  at the top of a blog post.

const AuthorBox = ({ authors, createdDate }) => {
  const renderAuthorNames = () => {
    const authorLinks = authors.map((author) => {
      return (
        <Link
          key={author._key}
          href={process.env.NEXT_PUBLIC_TEAM_PATH + author.slug}
        >
          <a>{author.name}</a>
        </Link>
      );
    });

    const length = authorLinks.length;

    switch (length) {
      case 1:
        return <p> By {authorLinks[0]}</p>;
      case 2:
        return (
          <p>
            {" "}
            By {authorLinks[0]} & {authorLinks[1]}
          </p>
        );
      default:
        return (
          <p>
            {" "}
            By{" "}
            {authorLinks.map((link, i) => {
              return link;
            })}{" "}
          </p>
        );
    }
  };

  return (
    <div className={styles.container}>
      <ul className={styles.profileImages}>
        
        {authors &&
          authors.map((author) => {
            return (
              <li key={author._key}>
                <ProfileImage
                style={{border: 'solid 5px white'}}
                src={author.headshot}
                alt={author.name}
              />
              </li>
            );
          })}
      </ul>
      <div className={styles.names}>{renderAuthorNames()}</div>
    </div>
  );
};

export default AuthorBox;
