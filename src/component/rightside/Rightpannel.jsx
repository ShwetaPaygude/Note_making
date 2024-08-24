import StyleRightpannel from "./Rightpannel.module.css";

const Rightpannel = () => {
  return (
    <>
      <div className={StyleRightpannel.Rightpannel}>
        <div className={StyleRightpannel.image}>
          <img
            src="assests/NoteDefaultImageOnPageLoad.png"
            alt="NoteDefaultImageOnPageLoad"
            style={{ width: "50vw" }}
          />
          <div>
            <div className={StyleRightpannel.imageText1}>Pocket Notes</div>
            <div className={StyleRightpannel.imageText2}>
              Send and receive messages without keeping your phone online.
              <br />
              Use Pocket Notes on up to 4 linked devices and 1 mobile phone
            </div>
          </div>
          <div className={StyleRightpannel.endToEnd}><img src="assests/endToEndEncryptedImage.png" alt="endToEndEncryptedImage"/> end-to-end encrypted</div>
        </div>
          </div>
    </>
  );
};

export default Rightpannel;