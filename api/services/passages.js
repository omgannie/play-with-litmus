import axios from "axios";

const API_BASE_URL = process.env.api_base_url || "http://localhost:8080"

export const createPassageForAnalysis = async ({ textInput }) => {
    const { data } = await axios.post(
        `${API_BASE_URL}/passages`,
        {
            textInput
        }
    );
    
    return data
}


