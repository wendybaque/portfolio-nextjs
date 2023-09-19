import React from "react";

const Jotform = () => {
  return (
    <div>
      <iframe
        id="JotFormIFrame-232611431637349"
        title="Formulaire de contact portfolio"
        onload="window.parent.scrollTo(0,0)"
        allowtransparency="true"
        allowfullscreen="true"
        allow="geolocation; microphone; camera"
        src="https://form.jotform.com/232611431637349"
        frameborder="0"
        style={{
          minWidth: "100%",
          height: "500px",
          border: "none",
          borderRadius: "10px",
        }}
        scrolling="no"
      >
        {" "}
      </iframe>
    </div>
  );
};

export default Jotform;
