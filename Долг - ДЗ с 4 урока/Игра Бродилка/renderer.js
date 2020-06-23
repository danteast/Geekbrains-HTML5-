let renderer = {
    map: '',
    /**
     * Отображает игру в консоли 
     */
    render() {
        for (let row = 0; row < config.rawsNumber; row++) {
            for (let col = 0; col < config.colsNumber; col++) {
                if (player.y === row && player.x === col) {
                    this.map += 'o '
                } else {
                    this.map += 'х '
                }
            }
            this.map += '\n'
        }
        console.log(this.map)
    },
    clear() {
        console.clear();
        this.map = ''
    }
}