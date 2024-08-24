import React from "react";
import styles from "./NotesGroup.module.css";

const NotesGroup = ({ id, groupName, color, buttonColorId }) => {
  const isSelected = buttonColorId === id;
  const initials = `${groupName[0]}${groupName[groupName.length - 1]}`;
  
  const notesImageStyle = {
    backgroundColor: color,
    borderRadius: "50%",
    minWidth: "61px",
    minHeight: "61px",
    color: "#FFF",
    fontFamily: "Roboto, sans-serif",
    fontSize: "1.507rem",
    fontWeight: 500,
    lineHeight: "1.473rem", // Approximate value
    letterSpacing: "0.03rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "uppercase"
  };

  return (
    <div className={styles.NotesGroup} style={{ backgroundColor: isSelected ? "#F7ECDC" : "transparent" }}>
      <div style={notesImageStyle}>
        {initials}
      </div>
      <div className={styles.NotesName}>{groupName}</div>
    </div>
  );
};

export default NotesGroup;
