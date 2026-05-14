/**
 * @module Pin
 */

import { Visibility } from "./pin.meta.js";

export class Validate {
  public static visibility = (value: string) => {
    const valid = Object.values(Visibility).includes(value as Visibility);
    if (!valid) throw new Error(`Invalid visibility value: ${value}`);
    return value as Visibility;
  };
}
