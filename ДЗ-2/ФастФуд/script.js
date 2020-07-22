class Hamburger {
    constructor() {
        this.size = [{
                value: "big",
                price: 100,
                callority: 40,
            },
            {
                value: "small",
                price: 50,
                callority: 20,
            },
        ];
        this.inside = [{
                value: "cheeze",
                price: 10,
                callority: 20,
            },
            {
                value: "salad",
                price: 20,
                callority: 5,
            },
            {
                value: "potato",
                price: 15,
                callority: 10,
            },
        ];
        this.additional = [{
                value: "spice",
                price: 15,
                callority: 0,
            },
            {
                value: "souce",
                price: 20,
                callority: 5,
            },
            {
                price: 0,
                callority: 0,
            },
        ]
    }

    checkSize() {
        let checkedItem = [...document.querySelectorAll(".size")].find(
            (item) => item.checked == true
        );
        switch (checkedItem.value) {
            case "big":
                return this.size[0];
            case "small":
                return this.size[1];
        }
    }

    checkInside() {
        let checkedItem = [...document.querySelectorAll(".inside")].find(
            (item) => item.checked == true
        );
        switch (checkedItem.value) {
            case "cheeze":
                return this.inside[0];
            case "salad":
                return this.inside[1];
            case "potato":
                return this.inside[2];
        }
    }

    checkAdditionalPrice() {
        let price = 0;
        for (let item of this.checkArrCallority()) {
            switch (item.value) {
                case "spice":
                    price += this.additional[0].price;
                    break;
                case "souce":
                    price += this.additional[1].price;
            }
        }
        return price

    }

    checkAdditionalCallority() {
        let callority = 0;
        for (let item of this.checkArrCallority()) {
            switch (item.value) {
                case "spice":
                    callority += this.additional[0].callority;
                    break;
                case "souce":
                    callority += this.additional[1].callority;
            }
        }
        return callority

    }

    checkArrCallority() {
        return [...document.querySelectorAll(".additional")].filter(
            (item) => item.checked == true
        )
    }


    countPrice() {
        return this.checkSize().price + this.checkInside().price + this.checkAdditionalPrice()
    }

    countCallority() {
        return this.checkSize().callority + this.checkInside().callority + this.checkAdditionalCallority()
    }

    renderPrice() {
        const renderedPrice = document.querySelector(".summary");
        return renderedPrice.innerHTML = `<span>Стоимость гамбургера - <span class='red'>${this.countPrice()} рублей</span>,
     его калорийность - <span class = 'red'>${this.countCallority()} ккал</span></span>`;
    }
}

const burger = new Hamburger();
const countBtn = document.querySelector(".finBtn");
countBtn.addEventListener("click", burger.renderPrice.bind(burger));