class Circle {
    constructor(color){
        this.color = color;
    }
    generateSVG(){
        svgContent = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" style="fill:${color};"/>
            <text x="10" y="50" fill="white">${text}</text>
          </svg>`;
    }
}
class Triangle {
    constructor(color){
        this.color = color;
    }
    generateSVG(){
        svgContent = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,0 0,100 100,100" style="fill:${color};"/>
        <text x="10" y="50" fill="white">${text}</text>
      </svg>`
    }
}
class Square {
    constructor(color){
        this.color = color;
    }
    generateSVG(){
        svgContent = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" style="fill:${color};"/>
        <text x="10" y="50" fill="white">${text}</text>
      </svg>`
    }
}

module.exports = {
    Circle, 
    Triangle,
    Square,
};