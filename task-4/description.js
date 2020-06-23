const productCard = document.querySelector(".product");
let image = null;
let imageHidden;
let textDiv;
let targetLast;
let goalProductCardLast;
const alterCard = document.createElement("div");
alterCard.innerHTML =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga esse sapiente, consequatur nisi delectus sed.";
alterCard.className = "descText";

document.addEventListener("click", function (event) {
  const target = event.target;
  goalProductCard = target.parentNode;
  const image = goalProductCard.querySelector(".productImg");
  if (target.className == "btn" && target !== targetLast) {
    if (goalProductCardLast !== undefined) {
      if (goalProductCardLast.querySelector(".productImg") == null) {
        goalProductCardLast.replaceChild(imageHidden, textDiv);
        targetLast.innerHTML = "Подробнее";
      }
    }

    if (image !== null) {
      goalProductCard.replaceChild(alterCard, image);
      imageHidden = image;
      target.innerHTML = "Отмена";
      textDiv = goalProductCard.querySelector(".descText");
      targetLast = target;
      goalProductCardLast = goalProductCard;
      target.innerHTML = "Подробнее";
    }
  } else {
    if (image !== null) {
      goalProductCard.replaceChild(alterCard, image);
      imageHidden = image;
      target.innerHTML = "Отмена";
      targetLast = target;
      goalProductCardLast = goalProductCard;
    } else {
      textDiv = goalProductCard.querySelector(".descText");
      goalProductCard.replaceChild(imageHidden, textDiv);
      target.innerHTML = "Подробнее";
    }
  }
});
