import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{
        width: "60vw",
        clear: "both",
        padding: 20,
        textAlign: "center",
        flexDirection: "row",
        justifyContent: "flex-start",
        margin: "auto",
        backgroundColor: "white",
        borderRadius: 5,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: "grey",
        shadowOpacity: 1.0
      }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
