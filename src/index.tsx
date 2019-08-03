import * as React from "react";
import * as ReactDOM from "react-dom";

import { ProfileInput } from "./components/ProfileInput";

ReactDOM.render(
    <ProfileInput compiler="TypeScript" framework="React" />,
    document.getElementById("profile")
);