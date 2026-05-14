import { Validate, State, Status } from "@quangphung218/pin";
validation(State.VISIBILITY, () => {
    given("Validate imported", () => {
        then("Validate is defined", () => {
            expect(Validate).toBeDefined();
        });
        and("Validate is defined", () => {
            then("`Validate.visibility` static method is defined", () => {
                expect(Validate.visibility).toBeDefined();
            });
            and("`value` is `invalid`", () => {
                let value;
                beforeEach(() => {
                    value = "invalid";
                });
                when("`Validate.visibility(value)` is called", () => {
                    let error;
                    beforeEach(() => {
                        try {
                            Validate.visibility(value);
                        }
                        catch (err) {
                            error = err;
                        }
                    });
                    then("an error is thrown", () => {
                        expect(error).not.toBeUndefined();
                    });
                    and("an error is thrown", () => {
                        then("error message contains 'Invalid visibility value: invalid'", () => {
                            expect(error.message).toEqual("Invalid visibility value: invalid");
                        });
                    });
                });
            });
        });
    });
});
validation(State.STATUS, () => {
    given("Validate imported", () => {
        then("Validate is defined", () => {
            expect(Validate).toBeDefined();
        });
        and("Validate is defined", () => {
            then("`Validate.status` static method is defined", () => {
                expect(Validate.status).toBeDefined();
            });
            when("`Validate.status(value)` accepts `Status.PINNED`", () => {
                let value;
                beforeEach(() => {
                    value = Status.PINNED;
                });
                then("`Validate.status(value)` returns `Status.PINNED`", () => {
                    expect(Validate.status(value)).toBe(Status.PINNED);
                });
            });
            when("`Validate.status(value)` accepts `Status.UNPINNED`", () => {
                let value;
                beforeEach(() => {
                    value = Status.UNPINNED;
                });
                then("`Validate.status(value)` returns `Status.UNPINNED`", () => {
                    expect(Validate.status(value)).toBe(Status.UNPINNED);
                });
            });
            and("`value` is `invalid`", () => {
                let value;
                beforeEach(() => {
                    value = "invalid";
                });
                when("`Validate.status(value)` is called", () => {
                    let error;
                    beforeEach(() => {
                        try {
                            Validate.status(value);
                        }
                        catch (err) {
                            error = err;
                        }
                    });
                    then("an error is thrown", () => {
                        expect(error).not.toBeUndefined();
                    });
                    and("an error is thrown", () => {
                        then("error message contains 'Invalid status value: invalid'", () => {
                            expect(error.message).toEqual("Invalid status value: invalid");
                        });
                    });
                });
            });
        });
    });
});
//# sourceMappingURL=pin.validation.test.js.map