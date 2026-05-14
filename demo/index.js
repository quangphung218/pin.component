import { Pin, Event } from "@quangphung218/pin";

await Pin.Template.load("pin.template.html");

customElements.define(Pin.Tag, Pin);

const logEl = document.getElementById("event-log");
const pin = document.querySelector(Pin.Tag);

/**
 * Append a line to the on-page event log for demo feedback.
 */
const log = (message) => {
  const stamp = new Date().toLocaleTimeString();
  const line = `[${stamp}] ${message}`;
  logEl.textContent = logEl.textContent ? `${line}\n${logEl.textContent}` : line;
};

pin.addEventListener(Event.ON_PIN, (ev) => {
  log(`onpin — status=${ev.detail.status}`);
});

pin.addEventListener(Event.ON_UNPIN, (ev) => {
  log(`onunpin — status=${ev.detail.status}`);
});

log("Ready — click the pin icon to toggle.");
