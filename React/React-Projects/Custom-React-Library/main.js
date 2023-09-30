const root = document.getElementById("root");

const reactElement = {
    type: 'h1',
    props: {
        className: 'heading'
    },
    children: "This is a heading"
};

root.customRender = function (reactElement) {
    const element = document.createElement(reactElement.type);
    element.innerHTML = reactElement.children;

    for (let prop in reactElement.props) {
        if (prop === 'children') continue;

        element.setAttribute(prop, reactElement.props[prop]);
    }

    this.appendChild(element);
};

root.customRender(reactElement);
