/* eslint-disable */

function accordion(el) {
    const btns = el.querySelectorAll("[aria-controls]");
    let selected;
    let isFocused = false;

    const keyup = (e) => {
        if (!el.contains(document.activeElement)) {
            document.removeEventListener("keydown", keydown);
            document.removeEventListener("keyup", keyup);
            isFocused = false;
        }
    };

    const keydown = (e) => {
        let dir = 0;
        let index = 0;
        if (e.key === "ArrowUp") dir = dir - 1;
        if (e.key === "ArrowDown") dir = dir + 1;

        btns.forEach((btn, i) => {
            if (btn === document.activeElement) index = i;
        });

        if (dir === -1 || dir === 1) {
            index = index + dir;
            if (index < 0) index = btns.length - 1;
            if (index > btns.length - 1) index = 0;
            btns[index].focus();
            selected = btns[index];
        }
    };

    const open = () => {
        btns.forEach((btn) => {
            btn === selected
                ? btn.setAttribute("aria-expanded", true)
                : btn.setAttribute("aria-expanded", false);
        });
    };

    const close = () => {
        selected.setAttribute("aria-expanded", false);
    };

    const onclick = () => {
        selected.getAttribute("aria-expanded") === "true" ? close() : open();
    };

    for (let btn of btns) {
        btn.onclick = (e) => {
            selected = btn;
            e.preventDefault();
            onclick();
        };
        btn.onfocus = () => {
            if (!isFocused) {
                document.addEventListener("keydown", keydown);
                document.addEventListener("keyup", keyup);
            }
            isFocused = true;
        };
    }
}

export default accordion;
