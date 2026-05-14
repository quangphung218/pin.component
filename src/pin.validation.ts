/**
 * @module Pin
 */

import { Visibility, Status } from "./pin.meta.js";

export class Validate {
  public static visibility = (value: string) => {
    const valid = Object.values(Visibility).includes(value as Visibility);
    if (!valid) throw new Error(`Invalid visibility value: ${value}`);
    return value as Visibility;
  };

  public static status = (value: string) => {
    const valid = Object.values(Status).includes(value as Status);
    if (!valid) throw new Error(`Invalid status value: ${value}`);
    return value as Status;
  };
}
