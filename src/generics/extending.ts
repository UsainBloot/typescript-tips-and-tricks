function buildHandler(callback: (event: Event) => void) {
  return function(event: Event) {
    callback(event);
  };
}
const onClick = buildHandler((event) => {
  event.relatedTarget; // Only on mouse events
});
const onKeyDownEvent = buildHandler((event) => {
  event.keyCode; // Only on keyboard events
});

export {};
