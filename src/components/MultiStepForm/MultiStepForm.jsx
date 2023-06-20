import PropTypes from 'prop-types';
import { useReducer } from 'react';
import { initialState, stepsReducer } from './stepsReducer';

export default function MultiStepForm ({ steps }) {
    const [state, dispatch] = useReducer(stepsReducer, initialState);
    const currentStep = state.currentStep;
    const currentComponent = steps.find((c) => c.props.stepId === currentStep);

    return (
        <>
        <div id={'current-step'}>
            {currentComponent}
        </div>
        <div id={'steps-nav'}>
            {currentStep > 0 ? <button onClick={() => dispatch({ type: 'previous_step' })}>Previous Step</button> : null}
            {currentStep == steps.slice(-1).stepId ? null : <button onClick={() => dispatch({ type: 'next_step' })}>Next Step</button>}
        </div>
        </>
    );
}

MultiStepForm.propTypes = {
    steps: PropTypes.arrayOf(PropTypes.node).isRequired
}

MultiStepForm.defaultProps = {
    steps: []
}
