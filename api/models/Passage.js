import { v4 as uuid } from "uuid";
import { analyzePassage } from "../services/watson.js";

export default class Passage {
    constructor(input) {
        this.uuid = uuid()
        this.text = input.textInput
        this.entities = null
        this.keywords = null
        this.topics = null
        this.categories = null

        this.populateAnalysis();
    }

    async populateAnalysis() {
        const { keywords, entities, concepts, classifications, categories, warnings } = await Promise.resolve(analyzePassage(this.text))

        if (warnings) {
            warnings.forEach(warning => console.warn("[ibm-watson][natural-language-understanding-api-v1]", warning))
        }

        this.entities = entities
        this.keywords = keywords
        this.topics = concepts
        this.categories = categories
        this.classifications = classifications

        // use classifications to build emotional score of the passage
    }


}