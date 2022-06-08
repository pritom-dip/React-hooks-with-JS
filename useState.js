const React = (function () {
    let indexed = [];
    let idx = 0;
    function useState(initVal) {
        const state = indexed[idx] || initVal;
        const _idx = idx;
        setState = newVal => {
            indexed[_idx] = newVal;
        };
        idx++;
        return [state, setState];
    }

    function render(Component) {
        idx = 0;
        const C = Component();
        C.render();
        return C;
    }
    return { useState, render };
})();

function Component() {
    const [count, setCount] = React.useState(1);
    const [text, setText] = React.useState("pritom");
    return {
        render: () => console.log({ count, text }),
        click: () => setCount(count + 1),
        type: word => setText(word),
    };
}

var App = React.render(Component);
App.click();
var App = React.render(Component);
App.click();
App.type("dip");
var App = React.render(Component);
