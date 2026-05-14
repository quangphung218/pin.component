import { Template } from "@scalable.software/component";
import { Pin, Tag, CSS, Attributes, Visibility, State, Operation, Event, Status, Gesture } from "@quangphung218/pin";
// Configuration
configuration(Configuration.TAG, () => {
    and("Pin imported", () => {
        then("Pin is defined", () => {
            expect(Pin).toBeDefined();
        });
        and("Pin is defined", () => {
            then("Pin.Tag static getter is defined", () => {
                expect(Pin.Tag).toBeDefined();
            });
            and("Pin.Tag static getter is defined", () => {
                then("Pin.Tag is Tag", () => {
                    expect(Pin.Tag).toBe(Tag);
                });
            });
        });
    });
});
configuration(Configuration.ATTRIBUTES, () => {
    and("Pin imported", () => {
        then("Pin is defined", () => {
            expect(Pin).toBeDefined();
        });
        and("Pin is defined", () => {
            then("Pin.Attributes static getter is defined", () => {
                expect(Pin.Attributes).toBeDefined();
            });
            and("Pin.Attributes static getter is defined", () => {
                then("Pin.Attributes is Attributes", () => {
                    expect(Pin.Attributes).toBe(Attributes);
                });
            });
        });
    });
});
// Utilities
utility(Utilities.TEMPLATE, () => {
    then("Pin.Template static property is defined", () => {
        expect(Pin.Template).toBeDefined();
    });
    and("Pin.Template static property is defined", () => {
        then("Pin.Template is a Template", () => {
            expect(Pin.Template).toBeInstanceOf(Template);
        });
    });
});
// Compositions
composition(Composition.TEMPLATE, () => {
    given("Pin is defined in custom element registry", () => {
        beforeEach(() => {
            define(Pin.Tag, Pin);
        });
        and("HTML Template is added to DOM", () => {
            let template;
            beforeEach(async () => {
                template = (await Pin.Template.load("pin.template.html"));
            });
            afterEach(() => {
                remove(Pin.Tag);
            });
            then("template is defined", () => {
                expect(template).toBeDefined();
            });
            and("a new pin is added to DOM", () => {
                let pin;
                beforeEach(() => {
                    pin = add(Pin.Tag);
                });
                afterEach(() => {
                    pin.remove();
                });
                then("pin.root contents contains template contents", () => {
                    expect(pin.root.innerHTML).toContain(template.innerHTML);
                });
                then("`pin.root` contains `div.icon`", () => {
                    const div = pin.root.querySelector("div.icon");
                    expect(div).not.toBeNull();
                });
                when("`pin.root` contains `div.icon`", () => {
                    let div;
                    beforeEach(() => {
                        div = pin.root.querySelector("div.icon");
                    });
                    then("`div.icon` contains `svg.unpinned`", () => {
                        const svg = div.querySelector("svg.unpinned");
                        expect(svg).not.toBeNull();
                    });
                    then("`div.icon` contains `svg.pinned`", () => {
                        const svg = div.querySelector("svg.pinned");
                        expect(svg).not.toBeNull();
                    });
                    then("`pin.elements.icon` is a cached reference to the `div` with class `icon`", () => {
                        expect(pin.elements.icon).toBe(div);
                    });
                });
            });
        });
    });
});
composition(Composition.CSS, () => {
    given("Pin is defined in custom element registry", () => {
        beforeEach(() => {
            define(Pin.Tag, Pin);
        });
        and("HTML Template is added to DOM", () => {
            beforeEach(async () => {
                await Pin.Template.load("pin.template.html");
            });
            afterEach(() => {
                remove(Pin.Tag);
            });
            and("a new pin is added to DOM", () => {
                let pin;
                beforeEach(() => {
                    pin = add(Pin.Tag);
                });
                afterEach(() => {
                    pin.remove();
                });
                then("pin.root contents contains a link to stylesheet", () => {
                    expect(pin.root.innerHTML).toContain("stylesheet");
                });
                and("pin.root contents contains a link to stylesheet", () => {
                    then("the stylesheet file's name is correct", () => {
                        expect(pin.root.innerHTML).toContain(CSS);
                    });
                });
            });
        });
    });
});
// State
state(State.VISIBILITY, () => {
    given("Pin is defined in custom element registry", () => {
        beforeEach(() => {
            define(Pin.Tag, Pin);
        });
        and("HTML Template is added to DOM", () => {
            beforeEach(async () => {
                await Pin.Template.load("pin.template.html");
            });
            afterEach(() => {
                remove(Pin.Tag);
            });
            and("a new pin is added to DOM", () => {
                let pin;
                beforeEach(() => {
                    pin = add(Pin.Tag);
                });
                afterEach(() => {
                    pin.remove();
                });
                then("`pin.visibility` getter exists", () => {
                    expect(pin.visibility).toBeDefined();
                });
                when("`pin.visibility` getter exists", () => {
                    then("`pin.visibility` is `Visibility.VISIBLE`", () => {
                        expect(pin.visibility).toBe(Visibility.VISIBLE);
                    });
                });
                then("`pin.visibility` setter exists", () => {
                    expect(hasSetter(pin, "visibility")).toBeTrue();
                });
                and("`pin.visibility` setter exists", () => {
                    when("`pin.visibility` is set to `Visibility.HIDDEN`", () => {
                        beforeEach(() => {
                            pin.visibility = Visibility.HIDDEN;
                        });
                        afterEach(() => {
                            pin.visibility = Visibility.VISIBLE;
                        });
                        then("`pin.visibility` is `Visibility.HIDDEN`", () => {
                            expect(pin.visibility).toBe(Visibility.HIDDEN);
                        });
                        then("pin `visibility` attribute is `Visibility.HIDDEN`", () => {
                            expect(pin.getAttribute(Attributes.VISIBILITY)).toBe(Visibility.HIDDEN);
                        });
                    });
                    when("`pin.visibility` is set to `null`", () => {
                        beforeEach(() => {
                            pin.visibility = null;
                        });
                        afterEach(() => {
                            pin.visibility = Visibility.VISIBLE;
                        });
                        then("`pin.visibility` is `Visibility.VISIBLE`", () => {
                            expect(pin.visibility).toBe(Visibility.VISIBLE);
                        });
                    });
                    when("`visibility` attribute is set to `Visibility.HIDDEN`", () => {
                        beforeEach(() => {
                            pin.setAttribute(Attributes.VISIBILITY, Visibility.HIDDEN);
                        });
                        afterEach(() => {
                            pin.removeAttribute(Attributes.VISIBILITY);
                        });
                        then("`pin.visibility` is `Visibility.HIDDEN`", () => {
                            expect(pin.visibility).toBe(Visibility.HIDDEN);
                        });
                    });
                    when("`pin.visibility` is set to `invalid`", () => {
                        let error;
                        beforeEach(() => {
                            try {
                                pin.visibility = "invalid";
                            }
                            catch (err) {
                                error = err;
                            }
                        });
                        afterEach(() => {
                            pin.visibility = Visibility.VISIBLE;
                        });
                        then("an error is thrown", () => {
                            expect(error).toBeDefined();
                        });
                        then("error message contains 'Invalid visibility value: invalid'", () => {
                            expect(error.message).toBe("Invalid visibility value: invalid");
                        });
                    });
                });
            });
        });
    });
});
state(State.STATUS, () => {
    given("Pin is defined in custom element registry", () => {
        beforeEach(() => {
            define(Pin.Tag, Pin);
        });
        and("HTML Template is added to DOM", () => {
            beforeEach(async () => {
                await Pin.Template.load("pin.template.html");
            });
            afterEach(() => {
                remove(Pin.Tag);
            });
            and("a new pin is added to DOM", () => {
                let pin;
                beforeEach(() => {
                    pin = add(Pin.Tag);
                });
                afterEach(() => {
                    pin.remove();
                });
                then("`pin.status` getter exists", () => {
                    expect(pin.status).toBeDefined();
                });
                when("`pin.status` getter exists", () => {
                    then("`pin.status` is `Status.UNPINNED`", () => {
                        expect(pin.status).toBe(Status.UNPINNED);
                    });
                });
                then("`status` attribute exists", () => {
                    expect(pin.hasAttribute(Attributes.STATUS)).toBeTrue();
                });
                then("`status` attribute is `Status.UNPINNED`", () => {
                    expect(pin.getAttribute(Attributes.STATUS)).toBe(Status.UNPINNED);
                });
                then("`pin.status` setter exists", () => {
                    expect(hasSetter(pin, "status")).toBeTrue();
                });
                and("`pin.status` setter exists", () => {
                    when("`pin.status` is set to `Status.PINNED`", () => {
                        beforeEach(() => {
                            pin.status = Status.PINNED;
                        });
                        afterEach(() => {
                            pin.status = Status.UNPINNED;
                        });
                        then("`pin.status` is `Status.PINNED`", () => {
                            expect(pin.status).toBe(Status.PINNED);
                        });
                        then("pin `status` attribute is `Status.PINNED`", () => {
                            expect(pin.getAttribute(Attributes.STATUS)).toBe(Status.PINNED);
                        });
                    });
                    when("`status` attribute is set to `Status.PINNED`", () => {
                        beforeEach(() => {
                            pin.setAttribute(Attributes.STATUS, Status.PINNED);
                        });
                        afterEach(() => {
                            pin.setAttribute(Attributes.STATUS, Status.UNPINNED);
                        });
                        then("`pin.status` is `Status.PINNED`", () => {
                            expect(pin.status).toBe(Status.PINNED);
                        });
                    });
                    when("`pin.status` is set to `invalid`", () => {
                        let error;
                        beforeEach(() => {
                            try {
                                pin.status = "invalid";
                            }
                            catch (err) {
                                error = err;
                            }
                        });
                        afterEach(() => {
                            pin.status = Status.UNPINNED;
                        });
                        then("an error is thrown", () => {
                            expect(error).toBeDefined();
                        });
                        then("error message contains 'Invalid status value: invalid'", () => {
                            expect(error.message).toBe("Invalid status value: invalid");
                        });
                    });
                });
            });
        });
    });
});
operation(Operation.PIN, () => {
    and("Pin is defined in custom element registry", () => {
        beforeEach(() => {
            define(Pin.Tag, Pin);
        });
        and("HTML Template is added to DOM", () => {
            beforeEach(async () => {
                await Pin.Template.load("pin.template.html");
            });
            afterEach(() => {
                remove(Pin.Tag);
            });
            and("a new pin is added to DOM", () => {
                let pin;
                beforeEach(() => {
                    pin = add(Pin.Tag);
                });
                afterEach(() => {
                    pin.remove();
                });
                then("`pin.pin` method exists", () => {
                    expect(pin.pin).toBeDefined();
                });
                and("`pin.pin` method exists", () => {
                    when("invoking `pin.pin`", () => {
                        beforeEach(() => {
                            pin.pin();
                        });
                        then("`pin.status` is `Status.PINNED`", () => {
                            expect(pin.status).toBe(Status.PINNED);
                        });
                    });
                });
            });
        });
    });
});
operation(Operation.UNPIN, () => {
    and("Pin is defined in custom element registry", () => {
        beforeEach(() => {
            define(Pin.Tag, Pin);
        });
        and("HTML Template is added to DOM", () => {
            beforeEach(async () => {
                await Pin.Template.load("pin.template.html");
            });
            afterEach(() => {
                remove(Pin.Tag);
            });
            and("a new pin is added to DOM", () => {
                let pin;
                beforeEach(() => {
                    pin = add(Pin.Tag);
                });
                afterEach(() => {
                    pin.remove();
                });
                then("`pin.unpin` method exists", () => {
                    expect(pin.unpin).toBeDefined();
                });
                and("`pin.unpin` method exists", () => {
                    when("`pin.status` is set to `Status.PINNED`", () => {
                        beforeEach(() => {
                            pin.status = Status.PINNED;
                        });
                        when("invoking `pin.unpin`", () => {
                            beforeEach(() => {
                                pin.unpin();
                            });
                            then("`pin.status` is `Status.UNPINNED`", () => {
                                expect(pin.status).toBe(Status.UNPINNED);
                            });
                        });
                    });
                });
            });
        });
    });
});
operation(Operation.TOGGLE, () => {
    and("Pin is defined in custom element registry", () => {
        beforeEach(() => {
            define(Pin.Tag, Pin);
        });
        and("HTML Template is added to DOM", () => {
            beforeEach(async () => {
                await Pin.Template.load("pin.template.html");
            });
            afterEach(() => {
                remove(Pin.Tag);
            });
            and("a new pin is added to DOM", () => {
                let pin;
                beforeEach(() => {
                    pin = add(Pin.Tag);
                });
                afterEach(() => {
                    pin.remove();
                });
                then("`pin.toggle` method exists", () => {
                    expect(pin.toggle).toBeDefined();
                });
                and("`pin.toggle` method exists", () => {
                    when("invoking `pin.toggle`", () => {
                        beforeEach(() => {
                            pin.toggle();
                        });
                        then("`pin.status` is `Status.PINNED`", () => {
                            expect(pin.status).toBe(Status.PINNED);
                        });
                    });
                    when("`pin.status` is `Status.PINNED`", () => {
                        beforeEach(() => {
                            pin.status = Status.PINNED;
                        });
                        when("invoking `pin.toggle`", () => {
                            beforeEach(() => {
                                pin.toggle();
                            });
                            then("`pin.status` is `Status.UNPINNED`", () => {
                                expect(pin.status).toBe(Status.UNPINNED);
                            });
                        });
                    });
                });
            });
        });
    });
});
// Operation
operation(Operation.HIDE, () => {
    and("Pin is defined in custom element registry", () => {
        beforeEach(() => {
            define(Pin.Tag, Pin);
        });
        and("HTML Template is added to DOM", () => {
            beforeEach(async () => {
                await Pin.Template.load("pin.template.html");
            });
            afterEach(() => {
                remove(Pin.Tag);
            });
            and("a new pin is added to DOM", () => {
                let pin;
                beforeEach(() => {
                    pin = add(Pin.Tag);
                });
                afterEach(() => {
                    pin.remove();
                });
                then("`pin.hide` method exists", () => {
                    expect(pin.hide).toBeDefined();
                });
                and("`pin.hide` method exists", () => {
                    when("invoking `pin.hide`", () => {
                        beforeEach(() => {
                            pin.hide();
                        });
                        then("`pin.visibility` is `Visibility.HIDDEN`", () => {
                            expect(pin.visibility).toBe(Visibility.HIDDEN);
                        });
                    });
                });
            });
        });
    });
});
operation(Operation.SHOW, () => {
    and("Pin is defined in custom element registry", () => {
        beforeEach(() => {
            define(Pin.Tag, Pin);
        });
        and("HTML Template is added to DOM", () => {
            beforeEach(async () => {
                await Pin.Template.load("pin.template.html");
            });
            afterEach(() => {
                remove(Pin.Tag);
            });
            and("a new pin is added to DOM", () => {
                let pin;
                beforeEach(() => {
                    pin = add(Pin.Tag);
                });
                afterEach(() => {
                    pin.remove();
                });
                then("`pin.show` method exists", () => {
                    expect(pin.show).toBeDefined();
                });
                and("`pin.show` method exists", () => {
                    when("`pin.visibility` is set to `Visibility.HIDDEN`", () => {
                        beforeEach(() => {
                            pin.visibility = Visibility.HIDDEN;
                        });
                        when("invoking `pin.show`", () => {
                            beforeEach(() => {
                                pin.show();
                            });
                            then("`pin.visibility` is `Visibility.VISIBLE`", () => {
                                expect(pin.visibility).toBe(Visibility.VISIBLE);
                            });
                        });
                    });
                });
            });
        });
    });
});
// Event
events(Event.ON_HIDE, () => {
    and("Pin is defined in custom element registry", () => {
        beforeEach(() => {
            define(Pin.Tag, Pin);
        });
        and("HTML Template is added to DOM", () => {
            beforeEach(async () => {
                await Pin.Template.load("pin.template.html");
            });
            afterEach(() => {
                remove(Pin.Tag);
            });
            and("a new pin is added to DOM", () => {
                let pin;
                beforeEach(() => {
                    pin = add(Pin.Tag);
                });
                afterEach(() => {
                    pin.remove();
                });
                then("`pin.onhide` setter exists", () => {
                    expect(hasSetter(pin, Event.ON_HIDE)).toBeTrue();
                });
                and("`pin.onhide` setter exists", () => {
                    and("`pin.onhide` is set to a listener", () => {
                        let onhide;
                        beforeEach(() => {
                            onhide = jasmine.createSpy("onhide");
                            pin.onhide = onhide;
                        });
                        afterEach(() => {
                            pin.onhide = null;
                        });
                        when("`pin.visibility` is set to `Visibility.HIDDEN`", () => {
                            beforeEach(() => {
                                pin.visibility = Visibility.HIDDEN;
                            });
                            afterEach(() => {
                                pin.visibility = Visibility.VISIBLE;
                            });
                            then("`pin.onhide` listener is called", () => {
                                expect(onhide).toHaveBeenCalled();
                            });
                            then("`pin.onhide` is called with `{ detail: { visibility: Visibility.HIDDEN } }`", () => {
                                expect(onhide).toHaveBeenCalledWith(jasmine.objectContaining({
                                    detail: { visibility: Visibility.HIDDEN }
                                }));
                            });
                        });
                    });
                });
            });
        });
    });
});
events(Event.ON_SHOW, () => {
    and("Pin is defined in custom element registry", () => {
        beforeEach(() => {
            define(Pin.Tag, Pin);
        });
        and("HTML Template is added to DOM", () => {
            beforeEach(async () => {
                await Pin.Template.load("pin.template.html");
            });
            afterEach(() => {
                remove(Pin.Tag);
            });
            and("a new pin is added to DOM", () => {
                let pin;
                beforeEach(() => {
                    pin = add(Pin.Tag);
                });
                afterEach(() => {
                    pin.remove();
                });
                then("`pin.onshow` setter exists", () => {
                    expect(hasSetter(pin, Event.ON_SHOW)).toBeTrue();
                });
                and("`pin.onshow` setter exists", () => {
                    and("`pin.visibility` is set to `Visibility.HIDDEN`", () => {
                        beforeEach(() => {
                            pin.visibility = Visibility.HIDDEN;
                        });
                        and("`pin.onshow` is set to a listener", () => {
                            let onshow;
                            beforeEach(() => {
                                onshow = jasmine.createSpy("onshow");
                                pin.onshow = onshow;
                            });
                            afterEach(() => {
                                pin.onshow = null;
                            });
                            when("`pin.visibility` is set to `Visibility.VISIBLE`", () => {
                                beforeEach(() => {
                                    pin.visibility = Visibility.VISIBLE;
                                });
                                then("`pin.onshow` listener is called", () => {
                                    expect(onshow).toHaveBeenCalled();
                                });
                                then("`pin.onshow` is called with `{ detail: { visibility: Visibility.VISIBLE } }`", () => {
                                    expect(onshow).toHaveBeenCalledWith(jasmine.objectContaining({
                                        detail: { visibility: Visibility.VISIBLE }
                                    }));
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
events(Event.ON_PIN, () => {
    and("Pin is defined in custom element registry", () => {
        beforeEach(() => {
            define(Pin.Tag, Pin);
        });
        and("HTML Template is added to DOM", () => {
            beforeEach(async () => {
                await Pin.Template.load("pin.template.html");
            });
            afterEach(() => {
                remove(Pin.Tag);
            });
            and("a new pin is added to DOM", () => {
                let pin;
                beforeEach(() => {
                    pin = add(Pin.Tag);
                });
                afterEach(() => {
                    pin.remove();
                });
                then("`pin.onpin` setter exists", () => {
                    expect(hasSetter(pin, Event.ON_PIN)).toBeTrue();
                });
                and("`pin.onpin` setter exists", () => {
                    and("`pin.onpin` is set to a listener", () => {
                        let onpin;
                        beforeEach(() => {
                            onpin = jasmine.createSpy("onpin");
                            pin.onpin = onpin;
                        });
                        afterEach(() => {
                            pin.onpin = null;
                        });
                        when("`pin.status` is set to `Status.PINNED`", () => {
                            beforeEach(() => {
                                pin.status = Status.PINNED;
                            });
                            afterEach(() => {
                                pin.status = Status.UNPINNED;
                            });
                            then("`pin.onpin` listener is called", () => {
                                expect(onpin).toHaveBeenCalled();
                            });
                            then("`pin.onpin` is called with `{ detail: { status: Status.PINNED } }`", () => {
                                expect(onpin).toHaveBeenCalledWith(jasmine.objectContaining({
                                    detail: { status: Status.PINNED }
                                }));
                            });
                        });
                    });
                });
            });
        });
    });
});
events(Event.ON_UNPIN, () => {
    and("Pin is defined in custom element registry", () => {
        beforeEach(() => {
            define(Pin.Tag, Pin);
        });
        and("HTML Template is added to DOM", () => {
            beforeEach(async () => {
                await Pin.Template.load("pin.template.html");
            });
            afterEach(() => {
                remove(Pin.Tag);
            });
            and("a new pin is added to DOM", () => {
                let pin;
                beforeEach(() => {
                    pin = add(Pin.Tag);
                });
                afterEach(() => {
                    pin.remove();
                });
                then("`pin.onunpin` setter exists", () => {
                    expect(hasSetter(pin, Event.ON_UNPIN)).toBeTrue();
                });
                and("`pin.onunpin` setter exists", () => {
                    and("`pin.status` is set to `Status.PINNED`", () => {
                        beforeEach(() => {
                            pin.status = Status.PINNED;
                        });
                        and("`pin.onunpin` is set to a listener", () => {
                            let onunpin;
                            beforeEach(() => {
                                onunpin = jasmine.createSpy("onunpin");
                                pin.onunpin = onunpin;
                            });
                            afterEach(() => {
                                pin.onunpin = null;
                            });
                            when("`pin.status` is set to `Status.UNPINNED`", () => {
                                beforeEach(() => {
                                    pin.status = Status.UNPINNED;
                                });
                                then("`pin.onunpin` listener is called", () => {
                                    expect(onunpin).toHaveBeenCalled();
                                });
                                then("`pin.onunpin` is called with `{ detail: { status: Status.UNPINNED } }`", () => {
                                    expect(onunpin).toHaveBeenCalledWith(jasmine.objectContaining({
                                        detail: { status: Status.UNPINNED }
                                    }));
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
gesture(Gesture.CLICK, () => {
    given("Pin is defined in custom element registry", () => {
        beforeEach(() => {
            define(Pin.Tag, Pin);
        });
        and("HTML Template is added to DOM", () => {
            beforeEach(async () => {
                await Pin.Template.load("pin.template.html");
            });
            afterEach(() => {
                remove(Pin.Tag);
            });
            and("a new pin is added to DOM", () => {
                let pin;
                beforeEach(() => {
                    pin = add(Pin.Tag);
                });
                afterEach(() => {
                    pin.remove();
                });
                when("`Gesture.CLICK` on `div` with class `icon` once", () => {
                    beforeEach(() => {
                        const icon = pin.root.querySelector("div.icon");
                        icon.dispatchEvent(new MouseEvent("click", { bubbles: true }));
                    });
                    then("`pin.status` is `Status.PINNED`", () => {
                        expect(pin.status).toBe(Status.PINNED);
                    });
                });
                when("`pin.status` is `Status.PINNED` and `div.icon` is clicked", () => {
                    beforeEach(() => {
                        pin.status = Status.PINNED;
                        const icon = pin.root.querySelector("div.icon");
                        icon.dispatchEvent(new MouseEvent("click", { bubbles: true }));
                    });
                    then("`pin.status` is `Status.UNPINNED`", () => {
                        expect(pin.status).toBe(Status.UNPINNED);
                    });
                });
            });
        });
    });
});
//# sourceMappingURL=pin.test.js.map