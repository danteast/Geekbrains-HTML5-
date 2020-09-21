-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июл 06 2020 г., 04:44
-- Версия сервера: 8.0.19
-- Версия PHP: 7.2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `sql2`
--

-- --------------------------------------------------------

--
-- Структура таблицы `cart`
--

CREATE TABLE `cart` (
  `id` int NOT NULL,
  `user` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `product` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `count` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `price` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `session` text COLLATE utf8mb4_general_ci NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `cart`
--

INSERT INTO `cart` (`id`, `user`, `product`, `count`, `price`, `session`, `date`) VALUES
(142, 'info@info.ru', '25', '3', '16990', '', '2020-07-05 22:49:54'),
(143, NULL, '27', '2', '10700', 'o5ceve032ut1vo076khgi5vom2fd20ma', '2020-07-05 22:52:07');

-- --------------------------------------------------------

--
-- Структура таблицы `orders`
--

CREATE TABLE `orders` (
  `id` int NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `email` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `product` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `count` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `status` text COLLATE utf8mb4_general_ci NOT NULL,
  `price` text COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `orders`
--

INSERT INTO `orders` (`id`, `date`, `name`, `email`, `product`, `count`, `status`, `price`) VALUES
(189, '2020-07-05 22:39:19', '222', '222@mail.ru', '26', '2', 'оформлен', '6700'),
(190, '2020-07-05 22:39:19', '222', '222@mail.ru', '25', '1', 'оформлен', '16990'),
(191, '2020-07-05 22:39:20', '222', '222@mail.ru', '28', '1', 'оформлен', '17700'),
(192, '2020-07-05 22:40:06', NULL, '222@mail.ru', '27', '4', 'оформлен', '10700'),
(193, '2020-07-05 22:40:18', NULL, '222@mail.ru', '26', '5', 'оформлен', '6700'),
(194, '2020-07-05 22:48:34', NULL, 'info@info.ru', '27', '1', 'оформлен', '10700'),
(195, '2020-07-05 22:48:35', NULL, 'info@info.ru', '26', '3', 'оформлен', '6700'),
(196, '2020-07-05 22:48:35', NULL, 'info@info.ru', '24', '1', 'оформлен', '12990');

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `alias` text COLLATE utf8mb4_general_ci NOT NULL,
  `price` int NOT NULL,
  `small_desc` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `full_desc` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `filename` text COLLATE utf8mb4_general_ci NOT NULL,
  `pathsmall` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `pathbig` text COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `title`, `alias`, `price`, `small_desc`, `full_desc`, `filename`, `pathsmall`, `pathbig`) VALUES
(23, 'Samsung Galaxy A51', 'Samsung_Galaxy_A51', 16899, 'Смартфон Samsung A51 обладает 4 основными камерами 48+12+5+5 Мп, позволяющими делать фотографии с высокой детализацией, отличные панорамные снимки, портреты с эффектом боке, а также записывать видео 4К, вести ночную и макросъёмку. Благодаря фронтальной камере 32 Мп у вас получатся отличные селфи. Мощный 8-ядерный процессор обеспечит высокую производительность устройства.', 'Смартфон Samsung A51 обладает 4 основными камерами 48+12+5+5 Мп, позволяющими делать фотографии с высокой детализацией, отличные панорамные снимки, портреты с эффектом боке, а также записывать видео 4К, вести ночную и макросъёмку. Благодаря фронтальной камере 32 Мп у вас получатся отличные селфи. Мощный 8-ядерный процессор обеспечит высокую производительность устройства.\r\n<h4>Общие характеристики</h4>\r\nТип: смартфон<br>\r\nТип корпуса:классический<br>\r\nУправление: экранные кнопки<br>\r\nУровень SAR: 0.37<br>\r\nКоличество SIM-карт:2<br>\r\nТип SIM-карты: nano SIM<br>\r\nРежим работы нескольких SIM-карт: попеременный<br>\r\nБесконтактная оплата: есть<br>\r\nВес: 172 г<br>\r\nРазмеры (ШxВxТ): 73.6x158.5x7.9 мм<br>\r\nЭкран/Тип экрана: цветной AMOLED, 16.78 млн цветов, сенсорный<br>\r\nТип сенсорного экрана: мультитач, емкостный<br>\r\nДиагональ:6.5 дюйм.<br>\r\nРазмер изображения: 2400x1080<br>\r\nЧисло пикселей на дюйм (PPI): 405<br>\r\nСоотношение сторон: 20:9<br>\r\nАвтоматический поворот экрана: есть<br>\r\nСтрана производства: Южная Корея', 's1.jpg', '/lesson6/images/small/', '/lesson6/images/big/'),
(24, 'Samsung Galaxy A21s', 'Samsung_Galaxy_A21s', 12990, 'Galaxy A21s оснащен быстрым процессором и вместительным хранилищем, поэтому можно не переживать о нехватке места. Новый восьмиядерный процессор и оперативная память 3/4 ГБ обеспечат плавную и эффективную работу игр и приложений.', 'Galaxy A21s оснащен быстрым процессором и вместительным хранилищем, поэтому можно не переживать о нехватке места. Новый восьмиядерный процессор и оперативная память 3/4 ГБ обеспечат плавную и эффективную работу игр и приложений.\r\n<h4>Основные параметры</h4>\r\nТип устройствасмартфон<br>\r\nВерсия ОС на начало продаж Android 10<br>\r\nТип корпуса классический<br>\r\nКоличество SIM-карт 2<br>\r\nТип SIM-карты nano SIM<br>\r\nРежим работы нескольких SIM-картпо переменный<br>\r\nБесконтактная оплата есть<br>\r\nВес 192 г<br>\r\nРазмеры (ШxВxТ) 75.3x163.7x8.9 мм<br>', 's2.jpg', '/lesson6/images/small/', '/lesson6/images/big/'),
(25, 'Samsung Galaxy A31', 'Samsung_Galaxy_A31', 16990, 'В Galaxy A31 есть все, что ты хочешь получить от смартфона. Корпус толщиной всего 8.6мм оснащен невероятно мощным аккумулятором емкостью 5000 мАч . Galaxy A31 оснащен высокотехнологичной биометрической системой идентификации пользователя. Экранный сканер отпечатков распознает твой уникальный отпечаток пальца. Разблокируй смартфон всего одним движением и не переживай за сохранность своей информации.', 'В Galaxy A31 есть все, что ты хочешь получить от смартфона. Корпус толщиной всего 8.6мм оснащен невероятно мощным аккумулятором емкостью 5000 мАч . Galaxy A31 оснащен высокотехнологичной биометрической системой идентификации пользователя. Экранный сканер отпечатков распознает твой уникальный отпечаток пальца. Разблокируй смартфон всего одним движением и не переживай за сохранность своей информации.\r\n<h4>Заводские данные о товаре</h4>\r\nМодель Galaxy A31 128GB Black (SM-A315F)<br>\r\nБренд Samsung<br>\r\nАртикул производителя SM-A315FZKVSER<br>\r\nОсновные характеристики<br>\r\nОперационная система Android 10<br>\r\nДиагональ экрана, в дюймах 6.4<br>\r\nРазрешение экрана, в пикселях 2400x1080<br>\r\nВстроенная память, в Гб 128<br>\r\nОперативная память, в Гб 4<br>\r\nЕмкость аккумулятора, в мА-ч 5000<br>\r\nКоличество основных камер четыре<br>\r\nМодель процессора MT6768<br>\r\nКоличество ядер процессора 8<br>\r\nГрафический процессор Mali-G52<br>\r\nСтандарт связи 2G; 3G; 4G(LTE); GPRS<br>\r\nКоличество SIM-карт 2<br>\r\nФормат SIM-карт nano-sim<br>\r\nПоддержка карт памяти Micro SDHC<br>\r\nМаксимальная емкость карты памяти, в Гб 512<br>\r\nУстановка карты памяти в отдельный слот<br>', 's3.jpg', '/lesson6/images/small/', '/lesson6/images/big/'),
(26, 'Samsung Galaxy A01', 'Samsung_Galaxy_A01', 6700, 'Представляем новинку зимы 2020 года от южнокорейского бренда — доступный и производительный смартфон Samsung Galaxy A01 с большим экраном, двойной камерой и шустрым 8-ядерным процессором. Практичный минимализм. Samsung Galaxy A01 получил тонкий и лёгкий скруглённый корпус, смартфон приятно держать в руке.', 'Представляем новинку зимы 2020 года от южнокорейского бренда — доступный и производительный смартфон Samsung Galaxy A01 с большим экраном, двойной камерой и шустрым 8-ядерным процессором. Практичный минимализм. Samsung Galaxy A01 получил тонкий и лёгкий скруглённый корпус, смартфон приятно держать в руке.\r\n<h4>Общие характеристики</h4>\r\nТип смартфон<br>\r\nОперационная система Android<br>\r\nТип корпуса классический<br>\r\nКоличество SIM-карт 2<br>\r\nТип SIM-карты nano SIM<br>\r\nРежим работы нескольких SIM-карт попеременный<br>\r\nВес 149 г<br>\r\nРазмеры (ШxВxТ) 70.9x146.2x8.3 мм', 's4.jpg', '/lesson6/images/small/', '/lesson6/images/big/'),
(27, 'Samsung Galaxy A20', 'Samsung_Galaxy_A20', 10700, 'Samsung Galaxy A20 (2019) оснащен 6.4-дюймовым U-дисплеем Super AMOLED, который отлично подойдёт для просмотра фильмов и игр. Мощный 8-ядерный процессор позволяет работать с несколькими приложениями одновременно. Смартфон поддерживает две SIM-карты, поэтому вы сможете выбрать одного из двух операторов связи в нужный момент.', 'Samsung Galaxy A20 (2019) оснащен 6.4-дюймовым U-дисплеем Super AMOLED, который отлично подойдёт для просмотра фильмов и игр. Мощный 8-ядерный процессор позволяет работать с несколькими приложениями одновременно. Смартфон поддерживает две SIM-карты, поэтому вы сможете выбрать одного из двух операторов связи в нужный момент.\r\n<h4>Общие характеристики</h4>\r\nТип смартфон<br>\r\nОперационная система (на начало продаж) Android<br>\r\nТип корпуса классический<br>\r\nУправление экранные кнопки<br>\r\nКоличество SIM-карт 2<br>\r\nТип SIM-карты nano SIM<br>\r\nРежим работы нескольких SIM-карт попеременный<br>\r\nРазмеры (ШxВxТ) 74.7x158.4x7.8 мм', 's5.jpg', '/lesson6/images/small/', '/lesson6/images/big/'),
(28, 'Samsung Galaxy A50', 'Samsung_Galaxy_A50', 17700, 'Смартфон Samsung Galaxy A50 (2019) обладает большим 6,4-дюймовым безрамочным дисплеем Super AMOLED, который отлично подойдёт для просмотра фильмов и игр. Мощный 8-ядерный процессор позволяет работать с несколькими приложениями одновременно.', 'Смартфон Samsung Galaxy A50 (2019) обладает большим 6,4-дюймовым безрамочным дисплеем Super AMOLED, который отлично подойдёт для просмотра фильмов и игр. Мощный 8-ядерный процессор позволяет работать с несколькими приложениями одновременно. \r\n<h4>Общие характеристики</h4>\r\nТип смартфон<br>\r\nОперационная система (на начало продаж) Android 9.0<br>\r\nТип корпуса классический<br>\r\nКоличество SIM-карт 2<br>\r\nРежим работы нескольких SIM-карт попеременный<br>\r\nВес 166 г<br>\r\nРазмеры (ШxВxТ) 74.7x158.5x7.7 мм<br>\r\nТип экрана цветной AMOLED, 16.78 млн цветов, сенсорный<br>\r\nТип сенсорного экрана мультитач, емкостный<br>\r\nДиагональ 6.4 дюйм.', 's6.jpg', '/lesson6/images/small/', '/lesson6/images/big/');

-- --------------------------------------------------------

--
-- Структура таблицы `testmonials`
--

CREATE TABLE `testmonials` (
  `id` int NOT NULL,
  `name` text COLLATE utf8mb4_general_ci NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `otziv` text COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `testmonials`
--

INSERT INTO `testmonials` (`id`, `name`, `date`, `otziv`) VALUES
(1, 'Василий', '2020-06-30 11:32:53', 'Отличный интернет магазин, всем советую.'),
(2, 'ООО Интерол', '2020-06-30 11:32:53', 'Постоянно заказываем товары, очень удобно и практично. Спасибо Вам за удобный функционал.'),
(8, 'Руслан', '2020-07-30 11:15:17', 'Здравствуйте! Не хочу спамить, напишу кратко. Обожаю эту компанию!'),
(14, 'Михаил', '2020-07-01 20:10:20', 'Тестовый отзыв для проверки сортировки по дате');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` text COLLATE utf8mb4_general_ci NOT NULL,
  `email` text COLLATE utf8mb4_general_ci NOT NULL,
  `pass` text COLLATE utf8mb4_general_ci NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `login` text COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `pass`, `date`, `login`) VALUES
(68, 'Тестовый пользователь', 'info@info.ru', '6wBmGSCsBE202cb962ac59075b964b07152d234b706wBmGSCsBE', '2020-07-05 01:13:47', ''),
(82, 'Администратор', '', '6wBmGSCsBE202cb962ac59075b964b07152d234b706wBmGSCsBE', '2020-07-05 23:00:53', 'admin');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `testmonials`
--
ALTER TABLE `testmonials`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=147;

--
-- AUTO_INCREMENT для таблицы `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=197;

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT для таблицы `testmonials`
--
ALTER TABLE `testmonials`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
