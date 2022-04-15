// const element = (
//   <div id="foo">
//     <a>bar</a>
//     <b />
//   </div>
// )
const createElement = (type, props, ...children) => {
  return {
    type,
    props: {
      ...props,
      children
    }
  }
}

const elementObj = createElement('div', { id: 'foo' }, createElement('a', null, 'bar'), createElement('b'))
console.log(elementObj)
const container = document.getElementById("root")

// const element = <h1 title="foo">Hello</h1>
