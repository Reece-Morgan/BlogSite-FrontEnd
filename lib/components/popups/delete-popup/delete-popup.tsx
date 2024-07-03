import styles from "../popup.module.css";

interface Props {
  id: number;
  showPopup: (show: boolean) => void;
  updateList: () => void;
}

export const DeletePopup = ({ id, showPopup, updateList }: Props) => {
  const deletePost = async () => {
    await fetch(`http://localhost:5189/api/blog/delete/${id}`, {
      method: "DELETE",
    });
    updateList();
    showPopup(false);
  };

  return (
    <>
      <div className={styles.overlay} />
      <div className={styles.popup}>
        <h2>Confirm Blog Post Deletion</h2>
        <p>Are you sure you want to delete this blog post?</p>
        <p>{id}</p>
        <div className={styles.buttons}>
          <button onClick={deletePost}>Yes</button>
          <button onClick={() => showPopup(false)}>No</button>
        </div>
      </div>
    </>
  );
};
