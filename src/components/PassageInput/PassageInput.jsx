import { useId } from 'react';
import PropTypes from 'prop-types';
import './styles.module.css';

export function PassageInput ({ handleSubmit }) {
    const passageId = useId();
    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Type or paste in a passage of text to analyze.
            </label>
            <textarea
                id={passageId}
                rows={10}
                cols={300}
            />
            <button>Analyze This!</button>
        </form>
        )
}

PassageInput.propTypes = {
    handleSubmit: PropTypes.func
}

PassageInput.defaultProps = {
    handleSubmit: () => {}
}
