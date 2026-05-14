import { Validate, State } from "@quangphung218/pin";
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
        });
    });
});
//# sourceMappingURL=pin.validation.test.js.map