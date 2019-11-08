function buildHandler<T extends Event>(callback: (cbEvent: T) => void) {
  return function(event: T) {
    callback(event);
  };
}

const onClick = buildHandler<MouseEvent>((event) => {
  event.relatedTarget; // Only on mouse events
});
const onKeyDownEvent = buildHandler<KeyboardEvent>((event) => {
  event.keyCode; // Only on keyboard events
});

export {};
