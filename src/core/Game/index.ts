class Game {
    createCanvas() {
        const canvas = document.getElementById("game") as HTMLCanvasElement;
        const context = canvas.getContext("2d") as CanvasRenderingContext2D;
        
        context.fillStyle = "gray";
        context.fillRect(0, 0, canvas.width, canvas.height);
    }

    update() {

    }

    render() {

    }
}

export default Game;