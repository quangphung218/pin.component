/**
 * @module Pin
 */
/**
 * @category Configuration
 */
export const Tag = "pin-button";
/**
 * @category Configuration
 */
export const CSS = "pin.style.css";
/**
 * HTML Attributes available to set
 * @category Metadata
 * @enum
 */
export const Attributes = {
    VISIBILITY: "visibility",
    STATUS: "status",
};
/**
 * HTML Attributes available to set
 * @category Metadata
 * @enum
 */
export const State = {
    ...Attributes
};
/**
 * @category Metadata
 * @enum
 */
export const Visibility = {
    VISIBLE: "visible",
    HIDDEN: "hidden",
};
/**
 * @category Metadata
 * @enum
 */
export const Status = {
    PINNED: "pinned",
    UNPINNED: "unpinned",
};
/**
 * @category Metadata
 * @enum
 */
export const Operation = {
    HIDE: "hide",
    SHOW: "show",
    PIN: "pin",
    UNPIN: "unpin",
    TOGGLE: "toggle",
};
/**
 * @category Metadata
 * @enum
 */
export const Event = {
    ON_HIDE: "onhide",
    ON_SHOW: "onshow",
    ON_PIN: "onpin",
    ON_UNPIN: "onunpin",
};
/**
 * @category Metadata
 * @enum
 */
export const Gesture = {
    CLICK: "click",
};
//# sourceMappingURL=pin.meta.js.map