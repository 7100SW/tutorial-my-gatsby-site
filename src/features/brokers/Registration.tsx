import React from 'react';
import useMergeState from "../../hooks/useMergeState";
import {UserDetails} from "./UserDetails";
import {PersonalDetails} from "./PersonalDetails";
import {Confirmation} from "./Confirmation";
import {Success} from "./Success";

const Registration = () => {

    const [data, setData] = useMergeState({step: 1});

    const goBack = () => {
        const {step} = data;
        setData({step: step - 1});
    }

    const goNext = () => {
        const {step} = data;
        setData({step: step + 1});
    }

    const handleChange = (input: any) => (e: { target: { value: any; }; }) => {
        setData({[input]: e.target.value});
    }

    const {step} = data;

    switch (step) {
        case 1:
            return (
                <UserDetails
                    nextStep={goNext}
                    handleChange={handleChange}
                    values={data}
                />
            )
        case 2:
            return (
                <PersonalDetails
                    prevStep={goBack}
                    nextStep={goNext}
                    handleChange={handleChange}
                    values={data}
                />
            )
        case 3:
            return (
                <Confirmation
                    prevStep={goBack}
                    nextStep={goNext}
                    values={data}
                />
            )
        case 4:
            return (
                <Success/>
            )
        default:
        // do nothing
    }
};

export default Registration;