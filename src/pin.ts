/**
 * @module Pin
 */

// Base Component
import { Component, Template } from "@scalable.software/component";
import { type Configuration } from "@scalable.software/component";

// Component Metadata
import { Tag, CSS, Attributes, Visibility, Event, Status } from "./pin.meta.js";
import { Validate } from "./pin.validation.js";

/**
 * Optional Configuration: required for components with custom layout and style
 * @category Configuration
 */
export const configuration: Configuration = {
  url: import.meta.url,
  template: {
    id: Tag
  },
  css: {
    name: CSS
  }
} as const;

/**
 * @category Component
 */
export class Pin extends Component {
  /**
   * The tag name of the component
   * @category Configuration
   */
  public static get Tag() {
    return Tag;
  }

  /**
   * Only attributes defined the Attributes object will be observed in DOM
   * @category State
   */
  public static get Attributes(): Attributes {
    return Attributes;
  }

  /**
   * Helper function to load the component template into DOM
   * @category Utility
   */
  public static Template = new Template(import.meta.url);

  /**
   * Cache element references to improve performance
   * @category State
   * @hidden
   */
  protected elements: {} = {};

  private _visibility: Visibility = Visibility.VISIBLE;

  private _status: Status = Status.UNPINNED;

  private _onhide: EventListener | null = null;

  public set onhide(handler: EventListener | null) {
    this._onhide && this.removeEventListener(Event.ON_HIDE, this._onhide);
    this._onhide = handler;
    this._onhide && this.addEventListener(Event.ON_HIDE, this._onhide);
  }

  private _onshow: EventListener | null = null;

  public set onshow(handler: EventListener | null) {
    this._onshow && this.removeEventListener(Event.ON_SHOW, this._onshow);
    this._onshow = handler;
    this._onshow && this.addEventListener(Event.ON_SHOW, this._onshow);
  }

  /**
   * The pin status of the component
   * @category State
   */
  public get status(): Status {
    return this._status;
  }

  /**
   * The visibility state of the component
   * @category State
   */
  public get visibility(): Visibility {
    return this._visibility;
  }

  /**
   * Set the visibility state of the component
   * @category State
   */
  public set visibility(visibility: Visibility) {
    visibility = visibility ?? Visibility.VISIBLE;
    visibility = Validate.visibility(visibility);
    if (this._visibility === visibility) return;
    this._visibility = visibility;
    visibility === Visibility.VISIBLE && this.removeAttribute(Attributes.VISIBILITY);
    visibility === Visibility.HIDDEN && this.setAttribute(Attributes.VISIBILITY, visibility);
    const event = { detail: { visibility } };
    visibility === Visibility.HIDDEN && this._dispatchEvent(Event.ON_HIDE, event);
    visibility === Visibility.VISIBLE && this._dispatchEvent(Event.ON_SHOW, event);
  }

  public hide = () => (this.visibility = Visibility.HIDDEN);

  public show = () => (this.visibility = Visibility.VISIBLE);

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
  protected _attributeHandlers = {
    [Attributes.VISIBILITY]: (value: Visibility) => (this.visibility = value),
  };

  /**
   * Cache element references to improve performance
   * @category Configuration
   * @hidden
   */
  protected _cache = () => {};

  /**
   * Initialize component attributes with default values
   * @category Configuration
   * @hidden
   */
  protected _initialize = () => {};

  /**
   * Called by the connectedCallback prototypical method
   * @category Configuration
   * @hidden
   */
  protected _addEventListeners = () => {};

  /**
   * Called by the disconnectedCallback prototypical method
   * @category Configuration
   * @hidden
   */
  protected _removeEventListeners = () => {};
}
