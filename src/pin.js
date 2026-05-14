/**
 * @module Pin
 */
// Base Component
import { Component, Template } from "@scalable.software/component";
// Component Metadata
import { Tag, CSS, Attributes, Visibility } from "./pin.meta.js";
/**
 * Optional Configuration: required for components with custom layout and style
 * @category Configuration
 */
export const configuration = {
    url: import.meta.url,
    template: {
        id: Tag
    },
    css: {
        name: CSS
    }
};
/**
 * @category Component
 */
export class Pin extends Component {
    /**
     * The tag name of the component
     * @category Configuration
     */
    static get Tag() {
        return Tag;
    }
    /**
     * Only attributes defined the Attributes object will be observed in DOM
     * @category State
     */
    static get Attributes() {
        return Attributes;
    }
    /**
     * Helper function to load the component template into DOM
     * @category Utility
     */
    static Template = new Template(import.meta.url);
    /**
     * Cache element references to improve performance
     * @category State
     * @hidden
     */
    elements = {};
    _visibility = Visibility.VISIBLE;
    /**
     * The visibility state of the component
     * @category State
     */
    get visibility() {
        return this._visibility;
    }
    /**
     * Set the visibility state of the component
     * @category State
     */
    set visibility(visibility) {
        visibility = visibility ?? Visibility.VISIBLE;
        this._visibility = visibility;
    }
    /**
     * @hidden
     */
    constructor() {
        super(configuration);
    }
    /**
     * List operations to perform for selected attributes being observed in the DOM.
     * @category Configuration
     * @hidden
     */
    _attributeHandlers = {};
    /**
     * Cache element references to improve performance
     * @category Configuration
     * @hidden
     */
    _cache = () => { };
    /**
     * Initialize component attributes with default values
     * @category Configuration
     * @hidden
     */
    _initialize = () => { };
    /**
     * Called by the connectedCallback prototypical method
     * @category Configuration
     * @hidden
     */
    _addEventListeners = () => { };
    /**
     * Called by the disconnectedCallback prototypical method
     * @category Configuration
     * @hidden
     */
    _removeEventListeners = () => { };
}
//# sourceMappingURL=pin.js.map