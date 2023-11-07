import { useEventListener } from "./useEventListener";

/**
 * The `useOnClickOutside` function is a custom hook in JavaScript that allows you to detect when a
 * user clicks outside of a specified element.
 * @param ref - A React ref that points to the element you want to detect clicks outside of.
 * @param handler - The handler is a function that will be called when a click event occurs outside of
 * the specified ref element.
 * @param [mouseEvent=mousedown] - The `mouseEvent` parameter is a string that specifies the type of
 * mouse event to listen for. By default, it is set to "mousedown", but you can pass any valid mouse
 * event type such as "click", "mouseup", etc.
 * @param options - The `options` parameter is an optional object that can be used to configure the
 * behavior of the event listener. It can include the following properties:
 */
export function useOnClickOutside(
	ref,
	handler,
	mouseEvent = "mousedown",
	options
) {
	const useEventListenerWrapper = (eventName, eventHandler) => {
		const target = ref.current;

		const eventListener = (event) => {
			if (!target || target.contains(event.target)) {
				return;
			}
			eventHandler(event);
		};

		useEventListener(eventName, eventListener, ref, options);
	};

	useEventListenerWrapper(mouseEvent, handler);
}
