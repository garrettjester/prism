import { Select } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const Selection = withStyles({
  root: {
    "&:after": {
      // focused
      borderBottom: `3px solid green`
    },
    "&:hover:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error):before": {
      // hover
      borderBottom: `2px solid purple`
    }
  }
})(Select);

export default Selection;
