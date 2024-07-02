import { callApiRoute } from "@blog/api";
import styles from "../popup.module.css";

interface Props {
  id: string;
  showPopup: (show: boolean) => void;
}

export const DeletePopup = ({ id, showPopup }: Props) => {
  const deletePost = async () => {
    const res = await callApiRoute("deleteBlogItem", id);
    console.log("debug: ", res);
    showPopup(false);
  };

  return (
    <>
      <div className={styles.overlay} />
      <div className={styles.popup}>
        <h2>Confirm Blog Post Deletion</h2>
        <p>Are you sure you want to delete this blog post?</p>
        <div className={styles.buttons}>
          <button onClick={deletePost}>Yes</button>
          <button onClick={() => showPopup(false)}>No</button>
        </div>
      </div>
    </>
  );
};
