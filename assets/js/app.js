let accord_items = document.querySelectorAll(".boxes");


accord_items.forEach(element => {
    let svg_icon = element.querySelector(".svg");
    let box = element.querySelector(".accord");
    let text = element.querySelector(".disp_text");
    text.style.display = "none";

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
        } else {
            svg_icon.style.transform = "rotate(0deg)";
        }

        if (text.style.display === "none") {
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    });
});