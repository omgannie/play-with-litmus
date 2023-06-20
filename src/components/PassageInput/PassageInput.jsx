import { useId } from 'react';
import PropTypes from 'prop-types';
import './styles.module.css';

export default function PassageInput ({ stepId, onChange, handleSubmit, buttonText }) {
    const passageId = useId();
    
    return (
        <form onChange={onChange} onSubmit={handleSubmit}>
            <label>
                Type or paste in a passage of text to analyze.
            </label>
            <textarea
                id={passageId}
                rows={10}
                cols={300}
            />
            <button>{buttonText}</button>
        </form>
        )
}

PassageInput.propTypes = {
    stepId: PropTypes.any,
    onChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    buttonText: PropTypes.string
}

PassageInput.defaultProps = {
    stepId: null,
    onChange: () => {},
    handleSubmit: () => {},
    buttonText: "Submit"
}
