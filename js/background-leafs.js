const levels = 6;
const height = document.body.scrollHeight;
const width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
const mobile = width < 768;
const sidesWidth = 10;

var leafs = document.querySelectorAll(".background-leaf");

function calculateWidth(level) {
    return mobile ? level + levels : (level + levels) / 2;
}

if (mobile) {
    leafs.forEach(leaf => {
        leaf.style.display = "none";
    });
} else {
    const maximumWidth = calculateWidth(levels / 2 + 1);
    
    leafs.forEach(leaf => {
        var right = Math.random() > 0.5;
    
        // var x;
        // if (mobile) {
        //     x = Math.random() * (100 - maximumWidth);
        // } else {
        x = (right ? (100 - sidesWidth - maximumWidth) : 0) + Math.random() * 10;
        // }
    
        var y = Math.random() * 100;
        var z = -Math.round(Math.random() * levels / 2 + 1);
        
        z = Math.random() > 0.5 ? z : -z;
    
        leaf.style.cssText = `top: ${y}%; left: ${x}vw; z-index: ${z - levels};`;
        leaf.style.width = `${calculateWidth(z)}vw`
        leaf.dataset.rellaxSpeed = z;
        leaf.dataset.rellaxPercentage = y/100;
    });
}
