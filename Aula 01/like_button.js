function MyComponent() {
  return React.createElement(
    "buton",
    { onClick: () => alert("ok"), style: { backgroundColor: "red" } },
    "Like"
  );
}

const domContainer = document.querySelector("#like_button_container");
const root = ReactDOM.createRoot(domContainer);
root.render(MyComponent());
