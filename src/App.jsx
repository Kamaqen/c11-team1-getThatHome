import React from "react";
import Button, { Blayout, Icon, IconBell } from "../Button";
import { RiNotification2Fill, RiNotification2Line } from "react-icons/ri";

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
        <Button size="def" variant="Primary">
          {" "}
          <span>BUTTON</span>
        </Button>
        <Button size="def" variant="Secundary">
          {" "}
          BUTTON
        </Button>
        <Button size="def" variant="Disabled">
          {" "}
          BUTTON
        </Button>
        <Button size="def" variant="Ghost">
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
        <Button size="lg" variant="Primary">
          {" "}
          BUTTON
        </Button>
        <Button size="lg" variant="Secundary">
          {" "}
          BUTTON
        </Button>
        <Button size="lg" variant="Disabled">
          {" "}
          BUTTON
        </Button>
        <Button size="lg" variant="Ghost">
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
        <Button size="sm" variant="Primary">
          {" "}
          BUTTON
        </Button>
        <Button size="sm" variant="Secundary">
          {" "}
          BUTTON
        </Button>
        <Button size="sm" variant="Disabled">
          {" "}
          BUTTON
        </Button>
        <Button size="sm" variant="Ghost">
          {" "}
          BUTTON
        </Button>
      </div>
      <div>
        <IconBell>
          <RiNotification2Line />
        </IconBell>

        <IconBell>
          <RiNotification2Fill />
        </IconBell>
      </div>
    </React.Fragment>
  );
};

//onClick={() => handleToggle(id)}

export default App;
