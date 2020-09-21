class BlockT1 {
    constructor() {
        this.name = 'blockT';
        this.bodyUp = [{
                x: 1,
                y: 1
            },
            {
                x: 2,
                y: 1
            },
            {
                x: 3,
                y: 1
            },
            {
                x: 2,
                y: 2
            }
        ];
        this.bodyRight = [{
                x: 2,
                y: 0
            },
            {
                x: 1,
                y: 1
            },
            {
                x: 2,
                y: 1
            },
            {
                x: 2,
                y: 2
            }
        ];
        this.bodyDown = [{
                x: 1,
                y: 1
            },
            {
                x: 2,
                y: 1
            },
            {
                x: 3,
                y: 1
            },
            {
                x: 2,
                y: 0
            }
        ];
        this.bodyLeft = [{
                x: 2,
                y: 0
            },
            {
                x: 3,
                y: 1
            },
            {
                x: 2,
                y: 1
            },
            {
                x: 2,
                y: 2
            }
        ];
        this.currPosition = this.bodyUp
    }

};

class BlockCub1 {
    constructor() {
        this.name = 'blockCub';
        this.bodyUp = [{
                x: 1,
                y: 1
            },
            {
                x: 2,
                y: 2
            },
            {
                x: 1,
                y: 2
            },
            {
                x: 2,
                y: 1
            }
        ];
        this.currPosition = this.bodyUp
    }
};

class BlockStick1 {
    constructor() {
        this.name = 'blockStick';
        this.bodyUp = [{
                x: 1,
                y: 1
            },
            {
                x: 1,
                y: 2
            },
            {
                x: 1,
                y: 3
            },
            {
                x: 1,
                y: 4
            }
        ];
        this.bodyRight = [{
                x: 1,
                y: 2
            },
            {
                x: 2,
                y: 2
            },
            {
                x: 3,
                y: 2
            },
            {
                x: 4,
                y: 2
            }
        ];
        this.currPosition = this.bodyUp
    }

};

class BlockZr1 {
    constructor() {
        this.name = 'blockZr';
        this.bodyUp = [{
                x: 2,
                y: 1
            },
            {
                x: 2,
                y: 2
            },
            {
                x: 1,
                y: 2
            },
            {
                x: 1,
                y: 3
            }
        ];
        this.bodyRight = [{
                x: 0,
                y: 1
            },
            {
                x: 1,
                y: 1
            },
            {
                x: 1,
                y: 2
            },
            {
                x: 2,
                y: 2
            }
        ];
        this.currPosition = this.bodyUp
    }
};

class BlockZl1 {
    constructor() {
        this.name = 'blockZl';
        this.bodyUp = [{
                x: 1,
                y: 1
            },
            {
                x: 1,
                y: 2
            },
            {
                x: 2,
                y: 2
            },
            {
                x: 2,
                y: 3
            }
        ];
        this.bodyRight = [{
                x: 2,
                y: 1
            },
            {
                x: 1,
                y: 1
            },
            {
                x: 1,
                y: 2
            },
            {
                x: 0,
                y: 2
            }
        ];
        this.currPosition = this.bodyUp
    }
};

class BlockGr1 {
    constructor() {
        this.name = 'blockGr';
        this.bodyUp = [{
                x: 3,
                y: 1
            },
            {
                x: 2,
                y: 1
            },
            {
                x: 2,
                y: 2
            },
            {
                x: 2,
                y: 3
            }
        ];
        this.bodyRight = [{
                x: 1,
                y: 2
            },
            {
                x: 2,
                y: 2
            },
            {
                x: 3,
                y: 2
            },
            {
                x: 3,
                y: 3
            }
        ];
        this.bodyDown = [{
                x: 2,
                y: 1
            },
            {
                x: 2,
                y: 2
            },
            {
                x: 2,
                y: 3
            },
            {
                x: 1,
                y: 3
            }
        ];
        this.bodyLeft = [{
                x: 1,
                y: 1
            },
            {
                x: 1,
                y: 2
            },
            {
                x: 2,
                y: 2
            },
            {
                x: 3,
                y: 2
            }
        ];
        this.currPosition = this.bodyUp
    }
};

class BlockGl1 {
    constructor() {
        this.name = 'blockGl';
        this.bodyUp = [{
                x: 1,
                y: 1
            },
            {
                x: 2,
                y: 1
            },
            {
                x: 2,
                y: 2
            },
            {
                x: 2,
                y: 3
            }
        ];
        this.bodyRight = [{
                x: 1,
                y: 2
            },
            {
                x: 2,
                y: 2
            },
            {
                x: 3,
                y: 2
            },
            {
                x: 3,
                y: 1
            }
        ];
        this.bodyDown = [{
                x: 2,
                y: 1
            },
            {
                x: 2,
                y: 2
            },
            {
                x: 2,
                y: 3
            },
            {
                x: 3,
                y: 3
            }
        ];
        this.bodyLeft = [{
                x: 1,
                y: 3
            },
            {
                x: 1,
                y: 2
            },
            {
                x: 2,
                y: 2
            },
            {
                x: 3,
                y: 2
            }
        ];
        this.currPosition = this.bodyUp
    }
}