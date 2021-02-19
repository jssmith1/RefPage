import "../../App.css";
import { withStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const BlueCheckbox = withStyles({
    root: {
        color: blue[400],
        "&$checked": {
            color: blue[600],
        },
    },
    checked: {},
})

export default BlueCheckbox;