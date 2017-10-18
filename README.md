# React draggable tabs [![npm version](https://badge.fury.io/js/react-draggable-tabs.svg)](https://www.npmjs.com/package/react-draggable-tabs)
The plugin is inspired by [Atom](https://atom.io/) and allows you to use these beautiful tabs in your React App
![screenshot of the tabs](./screenshot.png)

# Install
just download the repo from [npm](https://www.npmjs.com/package/react-draggable-tabs)
```bash
npm install react-draggable-tabs --save
```

# Usage
You can import the Tabs component
```jsx
import Tabs from "react-draggable-tabs"

...

<Tabs />
```

The Tabs component requires 4 props:
- `tabs`: an array of tabs, ever tab is an object and has to contain an id and a content (string or React element), e.g. `tabs = [{id:1, content: "Tab 1"}, {id:2, content: "Tab 2"}]`
- `moveTab(dragIndex, hoverIndex)`: a function handling the drag action, it receives the index in the array of the dragged item and of the landing place
- `selectTab(selectedIndex)`: handles the click event, it receives the index of the clicked tab
- `closeTab(selectedIndex)`: handles the remove event, it receives the index of the closed tab

You can also add children to the Tabs and they will be placed in the right-most position, it's useful if you want to add control buttons, for example to open a new tab.

```jsx
<Tabs {/* ...*/}>
<button>+</button>
</Tabs>
```
# Example
Checkout the live example [here](https://zaninandrea.github.io/react-draggable-tabs)  
[![Edit n0952xxo6p](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/n0952xxo6p)
