let accord_items = document.querySelectorAll(".boxes");

let index_item = 0;
let text_disp = accord_items[index_item].querySelector(".disp_text");
let svg_disp = accord_items[index_item].querySelector(".svg");
svg_disp.style.transform = "rotate(180deg)";
text_disp.style.display = "block";


accord_items.forEach(element => {
    let svg_icon = element.querySelector(".svg");
    let box = element.querySelector(".accord");
    let text = element.querySelector(".disp_text");
    element.addEventListener("click", () => {
        accord_items.forEach(otherElement => {
            if (otherElement !== element) {
                let otherText = otherElement.querySelector(".disp_text");
                let otherSvgIcon = otherElement.querySelector(".svg");
                otherText.style.display = "none";
                otherSvgIcon.style.transform = "rotate(0deg)";
            }
        });

        let currentTransform = getComputedStyle(svg_icon).transform;
        if (currentTransform === "none" || currentTransform === "matrix(1, 0, 0, 1, 0, 0)") {
            svg_icon.style.transform = "rotate(180deg)";
            text.style.display = "block";
        } else {
            svg_icon.style.transform = "rotate(0deg)";
            text.style.display = "none";
        }
    });
});

