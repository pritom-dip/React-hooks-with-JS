const React = (function () {
    let indexes = [];
    let idx = 0;
    function useState(initVal) {
        const state = indexes[idx] || initVal;
        const _idx = idx;
        setState = newVal => {
            indexes[_idx] = newVal;
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
    function useEffect(callback, depArr) {
        const oldDeps = indexes[idx];
        let hasChanged = true;
        if (oldDeps) {
            hasChanged = depArr.some((dep, i) => !Object.is(dep, oldDeps[i]));
        }
        if (hasChanged) {
            callback();
        }
        indexes[idx] = depArr;
        idx++;
    }
    return { useState, render, useEffect };
})();

function Component() {
    const [count, setCount] = React.useState(1);
    const [text, setText] = React.useState("pritom");

    React.useEffect(() => {
        console.log("hello from useEffect");
    }, [count]);

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
var App = React.render(Component);
App.type("dip");
