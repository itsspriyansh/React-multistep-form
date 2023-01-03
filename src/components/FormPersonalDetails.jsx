import React from "react";
import RaisedButton from "material-ui/RaisedButton"
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import classes from "./styles.module.css";

export default class FormPersonalDetails extends React.Component {

    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    back = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }

    render () {
        const {values, handleChange} = this.props
        return (
            <MuiThemeProvider>
                <AppBar title="Personal Details"></AppBar>
                <React.Fragment>
                    <div className={classes.container}>
                        <div>

                    <TextField 
                        hintText="Enter Your Occupation"
                        floatingLabelText="Occupation"
                        onChange={handleChange("occupation")}
                        defaultValue={values.occupation}
                        />
                    <br />
                    <TextField 
                        hintText="Enter Your City"
                        floatingLabelText="City"
                        onChange={handleChange("city")}
                        defaultValue={values.city}
                    />
                    <br />
                    <TextField 
                        hintText="Enter Your Bio"
                        floatingLabelText="Bio"
                        onChange={handleChange("bio")}
                        defaultValue={values.bio}
                        />
                    <br />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                        />
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                        </div>
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button : {
        margin : "15px"
    }
}

