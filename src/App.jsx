import React from "react";
import Button from "../Button";

const App = () => {
  return (
    <React.Fragment>
      <h1
        style={{ textAlign: "center", fontSize: "17px", marginBottom: "2rem" }}
      >
        Buttons
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "5px",
          flexDirection: "column",
        }}
      >
        <Button size="def" variant="primary">
          {" "}
          BUTTON
        </Button>
        <Button size="def" variant="secondary">
          {" "}
          BUTTON
        </Button>
        <Button size="def" variant="disabled">
          {" "}
          BUTTON
        </Button>
        <Button size="def" variant="ghost">
          {" "}
          BUTTON
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "5px",
          flexDirection: "column",
        }}
      >
        <Button size="lg" variant="primary">
          {" "}
          BUTTON
        </Button>
        <Button size="lg" variant="secondary">
          {" "}
          BUTTON
        </Button>
        <Button size="lg" variant="disabled">
          {" "}
          BUTTON
        </Button>
        <Button size="lg" variant="ghost">
          {" "}
          BUTTON
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "5px",
          flexDirection: "column",
        }}
      >
        <Button size="sm" variant="primary">
          {" "}
          BUTTON
        </Button>
        <Button size="sm" variant="secondary">
          {" "}
          BUTTON
        </Button>
        <Button size="sm" variant="disabled">
          {" "}
          BUTTON
        </Button>
        <Button size="sm" variant="ghost">
          {" "}
          BUTTON
        </Button>
      </div>
    </React.Fragment>
  );
};

export default App;
