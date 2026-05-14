import {
  Tag,
  Attributes,
  State,
  Operation,
  Event,
  Gesture,
  Visibility,
  Status
} from "@quangphung218/pin";
import * as PinModule from "@quangphung218/pin";

// Tag
metadata(Metadata.TAG, () => {
  when("Tag imported", () => {
    then("Tag is defined", () => {
      expect(Tag).toBeDefined();
    });
  });
});

// Attributes
metadata(Metadata.ATTRIBUTES, () => {
  and("Attribute imported", () => {
    then("Attributes is defined", () => {
      expect(Attributes).toBeDefined();
    });

    when("Attributes is defined", () => {
      then("Attributes is an object", () => {
        expect(typeof Attributes).toBe("object");
      });
    });
  });
});

// State
metadata(State.VISIBILITY, () => {
  and("Attributes imported", () => {
    then("`Attributes.VISIBILITY` is defined", () => {
      expect((Attributes as any).VISIBILITY).toBeDefined();
    });

    and("`Attributes.VISIBILITY` is defined", () => {
      then("`State.VISIBILITY` is defined", () => {
        expect((State as any).VISIBILITY).toBeDefined();
      });
    });
  });
});

metadata(State.STATUS, () => {
  and("PinModule imported", () => {
    then("`Status` exists", () => {
      expect((PinModule as any).Status).toBeDefined();
    });
  });
});

metadata(State.STATUS, () => {
  and("Status imported", () => {
    then("`Status.PINNED` exists", () => {
      expect((Status as any).PINNED).toBeDefined();
    });

    then("`Status.UNPINNED` exists", () => {
      expect((Status as any).UNPINNED).toBeDefined();
    });
  });
});

metadata(State.VISIBILITY, () => {
  and("Visibility imported", () => {
    then("Visibility is defined", () => {
      expect(Visibility).toBeDefined();
    });

    and("Visibility is defined", () => {
      then("Visibility is an object", () => {
        expect(typeof Visibility).toBe("object");
      });

      when("Visibility is an object", () => {
        then("`Visibility.VISIBLE` exists", () => {
          expect((Visibility as any).VISIBLE).toBeDefined();
        });

        then("`Visibility.HIDDEN` exists", () => {
          expect((Visibility as any).HIDDEN).toBeDefined();
        });
      });
    });
  });
});

// State (continued)
metadata(Metadata.STATE, () => {
  and("Attributes imported", () => {
    then("`Attributes.STATUS` is defined", () => {
      expect((Attributes as any).STATUS).toBeDefined();
    });

    and("`Attributes.STATUS` is defined", () => {
      then("`State.STATUS` is defined", () => {
        expect((State as any).STATUS).toBeDefined();
      });
    });
  });
});

metadata(Metadata.STATE, () => {
  and("State imported", () => {
    then("State is defined", () => {
      expect(State).toBeDefined();
    });

    when("State is defined", () => {
      then("State is an object", () => {
        expect(typeof State).toBe("object");
      });
    });
  });
});

// Operation
metadata(Metadata.OPERATION, () => {
  and("Operation imported", () => {
    then("Operation is defined", () => {
      expect(Operation).toBeDefined();
    });

    when("Operation is defined", () => {
      then("Operation is an object", () => {
        expect(typeof Operation).toBe("object");
      });

      when("Operation is an object", () => {
        then("`Operation.HIDE` exists", () => {
          expect((Operation as any).HIDE).toBeDefined();
        });

        then("`Operation.SHOW` exists", () => {
          expect((Operation as any).SHOW).toBeDefined();
        });

        then("`Operation.PIN` exists", () => {
          expect((Operation as any).PIN).toBeDefined();
        });

        then("`Operation.UNPIN` exists", () => {
          expect((Operation as any).UNPIN).toBeDefined();
        });

        then("`Operation.TOGGLE` exists", () => {
          expect((Operation as any).TOGGLE).toBeDefined();
        });
      });
    });
  });
});

// Event
metadata(Metadata.EVENT, () => {
  and("Event imported", () => {
    then("Event is defined", () => {
      expect(Event).toBeDefined();
    });

    when("Event is defined", () => {
      then("Event is an object", () => {
        expect(typeof Event).toBe("object");
      });

      when("Event is an object", () => {
        then("`Event.ON_HIDE` exists", () => {
          expect((Event as any).ON_HIDE).toBeDefined();
        });

        then("`Event.ON_SHOW` exists", () => {
          expect((Event as any).ON_SHOW).toBeDefined();
        });

        then("`Event.ON_PIN` exists", () => {
          expect((Event as any).ON_PIN).toBeDefined();
        });

        then("`Event.ON_UNPIN` exists", () => {
          expect((Event as any).ON_UNPIN).toBeDefined();
        });
      });
    });
  });
});

// Gesture
metadata(Metadata.GESTURE, () => {
  and("Gesture imported", () => {
    then("Gesture is defined", () => {
      expect(Gesture).toBeDefined();
    });

    when("Gesture is defined", () => {
      then("Gesture is an object", () => {
        expect(typeof Gesture).toBe("object");
      });

      when("Gesture is an object", () => {
        then("`Gesture.CLICK` exists", () => {
          expect((Gesture as any).CLICK).toBeDefined();
        });
      });
    });
  });
});
