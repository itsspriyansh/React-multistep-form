import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import List from "material-ui/List/List";
import ListItem from "material-ui/List/ListItem";
import { AppBar } from "material-ui";
import classes from "./styles.module.css"
import RaisedButton from "material-ui/RaisedButton/RaisedButton";

export default class Confirm extends React.Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render () {
        const {firstName, lastName, email, occupation, city, bio} = this.props.values
        return (
            <MuiThemeProvider>
                <AppBar title="Confirm" />
                <div className={classes.container}>
                    <div>
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={firstName}
                            />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={lastName}
                            />
                        <ListItem
                            primaryText="Email"
                            secondaryText={email}
                            />
                        <ListItem
                            primaryText="Occupation"
                            secondaryText={occupation}
                            />
                        <ListItem
                            primaryText="City"
                            secondaryText={city}
                            />
                        <ListItem
                            primaryText="Bio"
                            secondaryText={bio}
                            />
                    </List>
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                        />
                    <RaisedButton
                        label="Confirm"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button : {
        "margin" : "15px"
    }
}

