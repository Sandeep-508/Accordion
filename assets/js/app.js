let accord_items = document.querySelectorAll(".boxes");


accord_items.forEach(element => {
    let svg_icon = element.querySelector(".svg");
    let box = element.querySelector(".accord");
    let text = element.querySelector(".disp_text");
    text.style.display = "none";
    // let border_prop = element.querySelector(".border_none");
    // let brdr = element.querySelector(".brdr");
    // border_prop.style.border = "1px solid black";

    element.addEventListener("click", () => {
        let currentTransform = getComputedStyle(svg_icon).transform;
        if (currentTransform === "none" || currentTransform === "matrix(1, 0, 0, 1, 0, 0)") {
            svg_icon.style.transform = "rotate(180deg)";
        } else {
            svg_icon.style.transform = "rotate(0deg)";
        }

        if (text.style.display === "none") {
            text.style.display = "block";
            // border_prop.style.border = "none";
            // brdr.style.border = "1px solid black";
        } else {
            // border_prop.style.border = "none";
            text.style.display = "none";
        }
    });
});
