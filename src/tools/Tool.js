export default class Tool {
    constructor(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext("2d")
        this.destroyEvents()
    }
    // цвет заполнения фигуры
    set fillColor(color) {
        this.ctx.fillStyle = color
    }

    // цвет обводки
    set strokeColor(color) {
        this.ctx.strokeStyle = color
    }
    // Толщина линии
    set lineWidth(width) {
        this.ctx.lineWidth = width
    }

    destroyEvents() {
        this.canvas.onmousemove = null;
        this.canvas.onmousedown =  null;
        this.canvas.onmouseup = null;
    }

}