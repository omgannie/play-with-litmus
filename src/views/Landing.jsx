import { useState } from 'react';
import PassageInput from 'src/components/PassageInput';


const Landing = () => {
    
    function triggerAnalysisProcess() {
        
    }
    
    return (
        <>
            <PassageInput
                handleSubmit={triggerAnalysisProcess}
            />
        </>
    )
}