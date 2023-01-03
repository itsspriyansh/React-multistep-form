import React from "react";
import FormPersonalDetails from "./FormPersonalDetails";
import FormUserDetails from "./FormUserDetails";

export default class UserForm extends React.Component {

    state = {
        step : 1,
        firstName : "",
        lastName : "",
        email : "",
        occupation : "",
        city : "",
        bio : ""
    }

    nextStep = () => {
        const {step} = this.state
        this.setState({step : step + 1})
    }

    prevStep = () => {
        const {step} = this.state
        this.setState({step : step - 1})
    }

    handleChange = input => e => {
        this.setState ({ [input] : e.target.value })
    }


    render () {
        const {step, firstName, lastName, email, occupation, city, bio} = this.state
        const values = {firstName, lastName, email, occupation, city, bio}
        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 2:
                return (
                    <FormPersonalDetails 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 3:
                return (
                    <h1>Confirm</h1>
                )
            case 4:
                return (
                    <h1>Success</h1>
                )
        }
    }
}

