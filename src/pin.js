/**
 * @module Pin
 */
// Base Component
import { Component, Template } from "@scalable.software/component";
// Component Metadata
import { Tag, CSS, Attributes, Visibility, Event, Status } from "./pin.meta.js";
import { Validate } from "./pin.validation.js";
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
    _status = Status.UNPINNED;
    _onhide = null;
    set onhide(handler) {
        this._onhide && this.removeEventListener(Event.ON_HIDE, this._onhide);
        this._onhide = handler;
        this._onhide && this.addEventListener(Event.ON_HIDE, this._onhide);
    }
    _onshow = null;
    set onshow(handler) {
        this._onshow && this.removeEventListener(Event.ON_SHOW, this._onshow);
        this._onshow = handler;
        this._onshow && this.addEventListener(Event.ON_SHOW, this._onshow);
    }
    /**
     * The pin status of the component
     * @category State
     */
    get status() {
        return this._status;
    }
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
        visibility = Validate.visibility(visibility);
        if (this._visibility === visibility)
            return;
        this._visibility = visibility;
        visibility === Visibility.VISIBLE && this.removeAttribute(Attributes.VISIBILITY);
        visibility === Visibility.HIDDEN && this.setAttribute(Attributes.VISIBILITY, visibility);
        const event = { detail: { visibility } };
        visibility === Visibility.HIDDEN && this._dispatchEvent(Event.ON_HIDE, event);
        visibility === Visibility.VISIBLE && this._dispatchEvent(Event.ON_SHOW, event);
    }
    hide = () => (this.visibility = Visibility.HIDDEN);
    show = () => (this.visibility = Visibility.VISIBLE);
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
    _attributeHandlers = {
        [Attributes.VISIBILITY]: (value) => (this.visibility = value),
    };
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
    _initialize = () => {
        this.setAttribute(Attributes.STATUS, Status.UNPINNED);
    };
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