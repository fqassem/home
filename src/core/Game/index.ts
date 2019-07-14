class Game {
    private canvas: HTMLCanvasElement;
	private context: CanvasRenderingContext2D;
    
    constructor(width: number = window.innerWidth, height: number = window.innerHeight) {
        this.canvas = <HTMLCanvasElement>document.getElementById('game');
        this.context = this.canvas.getContext("2d");
		this.canvas.width = width;
		this.canvas.height = height;
    }

    update(timestamp: number): void {
        console.log('Updating...');
    }

    render() {
        this.context.fillStyle = "gray";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

export default Game;