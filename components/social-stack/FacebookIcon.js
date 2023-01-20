import styles from "./SocialStack.module.scss";

export default function FacebookIcon({ fill, link, type, size = "20px" }) {
  const renderIcon = () => {
    if (type == "rounded") {
      return (
        <svg
          className={styles.socialIcon}
          fill={fill}
          height={size}
          viewBox="0 0 152 152"
          width={size}
        >
          <g id="Layer_2">
            <g id="_01.facebook">
              <path d="m76 0a76 76 0 1 0 76 76 76 76 0 0 0 -76-76zm19.26 68.8-1.26 10.59a2 2 0 0 1 -2 1.78h-11v31.4a1.42 1.42 0 0 1 -1.4 1.43h-11.2a1.42 1.42 0 0 1 -1.4-1.44l.06-31.39h-8.33a2 2 0 0 1 -2-2v-10.58a2 2 0 0 1 2-2h8.27v-10.26c0-11.87 7.07-18.33 17.4-18.33h8.47a2 2 0 0 1 2 2v8.91a2 2 0 0 1 -2 2h-5.19c-5.62.09-6.68 2.78-6.68 6.8v8.85h12.32a2 2 0 0 1 1.94 2.24z" />
            </g>
          </g>
        </svg>
      );
    } else if (type === "square") {
      return (
        <svg
          className={styles.socialIcon}
          fill={fill}
          height={size}
          viewBox="0 0 512 512"
          width={size}
        >
          <path d="m475.074219 0h-438.148438c-20.394531 0-36.925781 16.53125-36.925781 36.925781v438.148438c0 20.394531 16.53125 36.925781 36.925781 36.925781h236.574219v-198h-66.5v-77.5h66.5v-57.035156c0-66.140625 40.378906-102.140625 99.378906-102.140625 28.257813 0 52.542969 2.105469 59.621094 3.046875v69.128906h-40.683594c-32.101562 0-38.316406 15.253906-38.316406 37.640625v49.359375h76.75l-10 77.5h-66.75v198h121.574219c20.394531 0 36.925781-16.53125 36.925781-36.925781v-438.148438c0-20.394531-16.53125-36.925781-36.925781-36.925781zm0 0" />
        </svg>
      );
    } else {
      return (
        <svg
          id="Layer_1"
          className={styles.socialIcon}
          enableBackground="new 0 0 100 100"
          height={size}
          viewBox="0 0 100 100"
          width={size}
          fill={fill}
        >
          <g id="_x30_1._Facebook">
            <path
              height={size}
              width={size}
              id="Icon_11_"
              d="m40.4 55.2c-.3 0-6.9 0-9.9 0-1.6 0-2.1-.6-2.1-2.1 0-4 0-8.1 0-12.1 0-1.6.6-2.1 2.1-2.1h9.9c0-.3 0-6.1 0-8.8 0-4 .7-7.8 2.7-11.3 2.1-3.6 5.1-6 8.9-7.4 2.5-.9 5-1.3 7.7-1.3h9.8c1.4 0 2 .6 2 2v11.4c0 1.4-.6 2-2 2-2.7 0-5.4 0-8.1.1-2.7 0-4.1 1.3-4.1 4.1-.1 3 0 5.9 0 9h11.6c1.6 0 2.2.6 2.2 2.2v12.1c0 1.6-.5 2.1-2.2 2.1-3.6 0-11.3 0-11.6 0v32.6c0 1.7-.5 2.3-2.3 2.3-4.2 0-8.3 0-12.5 0-1.5 0-2.1-.6-2.1-2.1 0-10.5 0-32.4 0-32.7z"
            />
          </g>
        </svg>
      );
    }
  };

  return (
    <a rel="noopener noreferrer" target="_blank" href={link}>
      {renderIcon()}
    </a>
  );
}
