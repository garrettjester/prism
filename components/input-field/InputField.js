import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: '#08AEEA',
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#08AEEA",
    },
  },
})(TextField);

export default InputField;
