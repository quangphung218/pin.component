/**
 * @module Pin
 */
import { Visibility } from "./pin.meta.js";
export class Validate {
    static visibility = (value) => {
        const valid = Object.values(Visibility).includes(value);
        if (!valid)
            throw new Error(`Invalid visibility value: ${value}`);
        return value;
    };
}
//# sourceMappingURL=pin.validation.js.map