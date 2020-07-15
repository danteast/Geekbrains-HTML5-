"use strict";
const goods = [
  {
    photo: "img/Hublot2.jpg",
    title: "Hublot",
    price: "1500 $",
  },
  {
    photo: "img/Maurice.jpg",
    title: "Maurice",
    price: "1700 $",
  },
  {
    photo: "img/Omega.jpg",
    title: "Omega",
    price: "1350 $",
  },
];
const renderGoodsItem = (
  photo,
  productType = "Наручные часы",
  title,
  price
) => {
  return `<div class="goods-item"><img src='${photo}' alt = 'pic'><h3>${productType}: ${title}</h3><p>${price}</p>
    <button class='buy-btn'>Купить</button></div>`;
};
const renderGoodsList = (list) => {
  let goodsList = list.map((item) =>
    renderGoodsItem(item.photo, item.productType, item.title, item.price)
  );
  goodsList.forEach((element) => {
    document.querySelector(".goods-list").innerHTML += element;
  });
  // Запятые получаются, т.к. свойство innerHTML читает содержимое массива goodsList "как есть", т.е. с запятыми,
  // разделяющими его элементы. Чтобы избежать этого предлагаю перебрать массив и добавить каждый элемент
  // поотдельности
};
renderGoodsList(goods);
