import styles from "./TeamMemberModal.module.scss";
import Image from "next/image";
import { Divider } from "@material-ui/core";
import SocialStack from "../social-stack";
import CancelOutlined from "../icons/CancelOutlined";
import { useModal } from "../layout/modal";
import { useRouter } from "next/router";

const TeamMemberModal = ({ member }) => {
  const { name, headshot, title, bio, socials } = member;
  const router = useRouter();
  const { closeModal } = useModal();

  const handleCancelClick = () => {
    closeModal();
    router.push("/company/team");
  };

  return (
    <div className={styles.container}>
      <button className={styles.closeButton} onClick={handleCancelClick}>
        <CancelOutlined color="gray" size="20px" />
      </button>
      <div className={styles.imageContainer}>
        <div className={styles.headshot}>
          <Image
            objectFit="contain"
            src={headshot}
            objectPosition="bottom"
            layout="fill"
            alt={`Headshot of ${name}`}
          />
        </div>
      </div>
      <div className={styles.textContainer}>
        <h3>{name}</h3>
        <p className={styles.title}>{title}</p>
        <SocialStack fill="gray" size="25px" type="rounded" links={socials} />
        <Divider style={{ marginTop: "5px" }} />
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default TeamMemberModal;
