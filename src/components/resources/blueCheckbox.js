import React from "react";
import "../../App.css";
import { withStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import Checkbox from "@material-ui/core/Checkbox";

const BlueCheckbox = withStyles({
    root: {
        color: blue[400],
        "&$checked": {
            color: blue[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default BlueCheckbox;