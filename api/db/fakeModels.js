import { Passage } from '../models';
import { passageModels } from './passageModels';

export const seedFakeModels = () => {
    const passages = passageModels.map(m => new Passage(m))
}