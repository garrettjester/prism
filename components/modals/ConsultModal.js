import { useState } from "react";

import styles from "./ConsultModal.module.scss";
import {
  Grid,
  makeStyles,
  Select,
  CircularProgress,
  FormControl,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import InputField from "../input-field";
import ArrowButton from "../arrow-button";
import { useForm } from "@formspree/react";
import { SuccessIcon } from "../icons";
import Modal from "../layout/modal/Modal";

const useStyles = makeStyles({
  select: {
    "&:after": {
      // focused
      borderBottom: `2px solid #08AEEA`,
    },
  },
  inputLabel: {
    "&.Mui-focused": {
      color: `#08AEEA`,
    },
  },
});

export default function ConsultModal() {
  const [state, handleSubmit] = useForm("mgerzjdq");
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({ service: "general" });
  const [emailError, setEmailError] = useState(false);
  const classes = useStyles();

  const validEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!validEmail(formState.email)) {
      setEmailError(true);
      return;
    } else {
      setLoading(true);
      handleSubmit(formState);
      return;
    }
  };

  const renderContent = () => {
    if (state.succeeded) {
      return (
        <div className={styles.successMessage}>
          <SuccessIcon />
          <p>Your consult request has been submitted.</p>
        </div>
      );
    } else if (loading) {
      return (
        <div style={{ textAlign: "center", padding: "30px 20px 0px 0px" }}>
          <CircularProgress style={{ color: "#08AEEA" }} />
        </div>
      );
    }

    return (
      <form className={styles.consultForm} onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <InputField
              required
              value={formState.name}
              name="name"
              fullWidth
              size="large"
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
              color="#000"
              id="standard-basic"
              label="Name"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputField
              name="email"
              required
              value={formState.email}
              error={emailError}
              fullWidth
              helperText={emailError ? "Please enter a valid email." : null}
              onChange={(e) => {
                setEmailError(false);
                setFormState({ ...formState, email: e.target.value });
              }}
              id="standard-basic"
              label="Email"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputField
              name="companyName"
              required
              value={formState.companyName}
              fullWidth
              onChange={(e) => {
                setFormState({ ...formState, companyName: e.target.value });
              }}
              id="standard-basic"
              label="Company"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputField
              name="website"
              value={formState.website}
              fullWidth
              onChange={(e) => {
                setFormState({ ...formState, website: e.target.value });
              }}
              id="standard-basic"
              label="Website"
              placeholder="www.example.com"
            />
          </Grid>
          <Grid
            style={{ paddingTop: "30px", paddingBottom: "30px" }}
            item
            xs={12}
          >
            <FormControl fullWidth>
              <InputLabel
                className={classes.inputLabel}
                id="demo-simple-select-label"
              >
                {"I'm interested in..."}
              </InputLabel>
              <Select
                className={classes.select}
                fullWidth
                label="Service inquiry"
                value={formState.service}
                onChange={(e) =>
                  setFormState({ ...formState, service: e.target.value })
                }
              >
                <MenuItem value="general">General consult</MenuItem>
                <MenuItem value="brandDesign">Brand design</MenuItem>
                <MenuItem value="contentGeneration">
                  Content generation
                </MenuItem>
                <MenuItem value="automation">Automation</MenuItem>
                <MenuItem value="webDevelopment">Web development</MenuItem>
                <MenuItem value="marketingStrategy">Strategy</MenuItem>
                <MenuItem value="executiveCoaching">
                  Executive coaching
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={0} sm={6}></Grid>
          <Grid item xs={12} sm={6}>
            <button
              className={styles.submitButton}
              style={{
                float: "right",
                border: "none",
                width: "auto",
                height: "auto",
              }}
              type="submit"
            >
              <ArrowButton type="solid">Submit</ArrowButton>
            </button>
          </Grid>
        </Grid>
      </form>
    );
  };

  return (
    <Modal>
        <div className={styles.text}>
          <h4>Schedule a consult.</h4>
          <p>Request a free 15-min consult with a Prism associate</p>
        </div>
      {renderContent()}
    </Modal>
  );
}
