import React, {useState} from "react";
import {StepperField} from "@aws-amplify/ui-react";
import RatingConfig from "../../../../../types/RatingConfig";
import './RatingsStepperField.scss';

interface StepperFieldProps {
    name: string
    label: string
    startingValue: number
    hidden:boolean
}

export default function RatingsStepperField({name, label, startingValue, hidden}: StepperFieldProps): React.ReactElement|null {
    const [stepperValue, setStepperValue] = useState<number>(startingValue ?? 0)

    if(hidden){ return null }
    return (
        <StepperField
            className='RatingsStepperField'
            name={name}
            max={RatingConfig.MAX_RATING}
            min={0}
            step={1}
            value={stepperValue}
            variation="quiet"
            onStepChange={(newValue: number) => setStepperValue(newValue)}
            label={label}
        />
    );
}