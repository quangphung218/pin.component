import { Pin } from "@quangphung218/pin";

await Pin.Template.load("pin.template.html");

customElements.define(Pin.Tag, Pin);
