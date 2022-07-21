import { IMAGELAYERS } from '../shared/HUMANIMAGELAYERS';

export const selectGender = (gender) => {
    return IMAGELAYERS.filter((img) => img.layer === gender);
}