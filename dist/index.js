/** @jsx Didact.createElement */
const createElement = (type, props, ...children) => {
  return {
    type,
    props: { ...props,
      children: children.map(child => {
        return typeof child === 'object' ? child : createTextElement(child);
      })
    }
  };
};

const createTextElement = text => {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: []
    }
  };
};

const render = (element, container) => {
  const dom = element.type == "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(element.type);

  const isProperty = key => key !== "children";

  Object.keys(element.props).filter(isProperty).forEach(name => {
    dom[name] = element.props[name];
  });
  element.props.children.forEach(child => render(child, dom));
  container.appendChild(dom);
};

const Didact = {
  createElement,
  render
};
/** @jsx Didact.createElement */

const element = Didact.createElement("div", {
  id: "foo"
}, Didact.createElement("a", null, "bar"), Didact.createElement("h1", null, "dfdf"));
console.log('element', element);
const container = document.getElementById("root");
Didact.render(element, container);