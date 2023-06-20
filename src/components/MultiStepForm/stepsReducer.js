export const initialState = {
    currentStep: 0
}

export function stepsReducer(state, action) {
    switch (action.type) {
        case 'next_step': {
            return {
                ...state,
                currentStep: state.currentStep++
            }
        }
        case 'previous_step': {
            return {
                ...state,
                currentStep: state.currentStep--
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}