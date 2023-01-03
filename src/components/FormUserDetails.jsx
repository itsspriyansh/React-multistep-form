import React from "react";
import RaisedButton from "material-ui/RaisedButton"
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import classes from "./styles.module.css"

export default class FormUserDetails extends React.Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render () {
        const {values, handleChange} = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="User Details"></AppBar>
                    <div className={classes.container}>
                        <div>
                    <TextField
                        hintText="Enter Your First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange("firstName")}
                        defaultValue={values.firstName}
                        />
                    <br />
                    <TextField
                        hintText="Enter Your Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange("lastName")}
                        defaultValue={values.lastName}
                        />
                    <br />
                    <TextField
                        hintText="Enter Your Email"
                        floatingLabelText="Email"
                        onChange={handleChange("email")}
                        defaultValue={values.email}
                        />
                    <br />
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
        "margin" : "15px"
    }
}
