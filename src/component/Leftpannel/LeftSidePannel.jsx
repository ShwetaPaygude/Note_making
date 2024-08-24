import React, { useState, useEffect } from "react";
import NotesGroup from "../NotesGroup/NotesGroup";
import styles from "./LeftSidePannel.module.css";

const LeftSidePannel = ({ handleClick, handleUserIdClicked, groupName, color, create }) => {
  const [clickedButton, setClickedButton] = useState(null);

  // Retrieve and parse stored data
  const storedData = JSON.parse(localStorage.getItem("groupNamesData")) || [];

  // Define new group data
  const newData = {
    id: storedData.length ? storedData[storedData.length - 1].id + 1 : 1,
    groupName,
    color,
    create,
  };

  // Check if a new group should be added
  const submitCheck = () => groupName !== "" && create;

  useEffect(() => {
    if (submitCheck()) {
      const updatedData = [...storedData, newData];
      localStorage.setItem("groupNamesData", JSON.stringify(updatedData));
    }
  }, [groupName, create]);

  // Update clicked button state
  const handleButtonClick = (buttonId) => setClickedButton(buttonId);

  // Determine button style based on state
  const buttonStyle = (buttonId) => ({
    backgroundColor: clickedButton === buttonId ? "#F7ECDC" : "transparent",
    color: "white",
    minWidth: "100%",
    minHeight: "61px",
    display: "flex",
    justifyContent: "flex-start",
    borderRadius: "2rem 0 0 2rem",
  });

  return (
    <div className={styles.leftSidePannel}>
      <h1>Pocket Notes</h1>
      <div className={styles.center}>
        
          <img src="assests/plus.png" alt="plusimg" style={{ minWidth: "21px" }} onClick={() => handleClick(true)}  /> 
        
        <div>
          <div style={{ display: "flex", flexDirection: "column-reverse" }}>
            {storedData
              .filter((group) => group.create)
              .map((group) => (
                <div key={group.id} className={styles.notesGroupSelected}>
                  <span
                    className={styles.act}
                    style={buttonStyle(group.id)}
                    onClick={() => {
                      handleUserIdClicked(group.id);
                      handleButtonClick(group.id);
                    }}
                  >
                    <NotesGroup groupName={group.groupName} color={group.color} />
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidePannel;
