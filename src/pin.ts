/**
 * @module Pin
 */

// Base Component
import { Component, Template } from "@scalable.software/component";
import { type Configuration } from "@scalable.software/component";

// Component Metadata
import { Tag, CSS, Attributes, Visibility, Event, Status, Gesture } from "./pin.meta.js";
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
  protected elements: { icon?: HTMLDivElement } = {};

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

  private _onpin: EventListener | null = null;

  public set onpin(handler: EventListener | null) {
    this._onpin && this.removeEventListener(Event.ON_PIN, this._onpin);
    this._onpin = handler;
    this._onpin && this.addEventListener(Event.ON_PIN, this._onpin);
  }

  private _onunpin: EventListener | null = null;

  public set onunpin(handler: EventListener | null) {
    this._onunpin && this.removeEventListener(Event.ON_UNPIN, this._onunpin);
    this._onunpin = handler;
    this._onunpin && this.addEventListener(Event.ON_UNPIN, this._onunpin);
  }

  /**
   * The pin status of the component
   * @category State
   */
  public get status(): Status {
    return this._status;
  }

  public set status(status: Status) {
    status = Validate.status(status);
    if (this._status === status) return;
    this._status = status;
    this.setAttribute(Attributes.STATUS, status);
    const statusEvent = { detail: { status } };
    status === Status.PINNED && this._dispatchEvent(Event.ON_PIN, statusEvent);
    status === Status.UNPINNED && this._dispatchEvent(Event.ON_UNPIN, statusEvent);
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

  public pin = () => (this.status = Status.PINNED);

  public unpin = () => (this.status = Status.UNPINNED);

  public toggle = () =>
    (this.status = this._status === Status.PINNED ? Status.UNPINNED : Status.PINNED);

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
    [Attributes.STATUS]: (value: Status) => (this.status = value),
  };

  /**
   * Cache element references to improve performance
   * @category Configuration
   * @hidden
   */
  protected _cache = () => {
    this.elements.icon = this.root.querySelector("div.icon") as HTMLDivElement;
  };

  protected _handleClick = () => this.toggle();

  /**
   * Initialize component attributes with default values
   * @category Configuration
   * @hidden
   */
  protected _initialize = () => {
    this.setAttribute(Attributes.STATUS, Status.UNPINNED);
  };

  /**
   * Called by the connectedCallback prototypical method
   * @category Configuration
   * @hidden
   */
  protected _addEventListeners = () => {
    this.elements.icon?.addEventListener(Gesture.CLICK, this._handleClick);
  };

  /**
   * Called by the disconnectedCallback prototypical method
   * @category Configuration
   * @hidden
   */
  protected _removeEventListeners = () => {
    this.elements.icon?.removeEventListener(Gesture.CLICK, this._handleClick);
  };
}
