import { useEffect, useRef } from "react";

/* This JavaScript code defines a CheckOutsideClick function that can be used to detect when a user clicks outside of a specified element. The function uses the useRef and useEffect hooks from the React library to attach an event listener to the document that listens for clicks. When a click is detected, the function checks if the target element of the click is outside of the specified element, and if it is, it calls the onClickOutside function passed to the CheckOutsideClick function as a prop.

The CheckOutsideClick function takes a props object as an argument, which should contain a onClickOutside function and a children element. The onClickOutside function will be called when a click outside of the specified element is detected, and the children element will be rendered inside of a div element that the event listener is attached to.

Overall, this code provides a convenient way to detect clicks outside of a specified element, which can be useful in a variety of situations, such as when implementing dropdown menus or modal dialogs in a React application.

*/

function CheckOutsideClick(props) {
  const ref = useRef(null);
  const { onClickOutside, children } = props;

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onClickOutside && onClickOutside();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  if (!children) {
    return null;
  }
  return <div ref={ref}> {children} </div>;
}

export default CheckOutsideClick;
