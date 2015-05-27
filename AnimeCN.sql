-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generaciÃ³n: 27-05-2015 a las 18:27:59
-- VersiÃ³n del servidor: 5.5.38-0ubuntu0.14.04.1
-- VersiÃ³n de PHP: 5.5.9-1ubuntu4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `AnimeCN`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `AnimeEsEs`
--

CREATE TABLE IF NOT EXISTS `AnimeEsEs` (
  `idAnime` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `cover` varchar(255) NOT NULL COMMENT 'URL imagen',
  `year` int(11) NOT NULL,
  `totalChapters` int(11) NOT NULL,
  `summary` varchar(255) NOT NULL,
  `extendedSummary` varchar(1000) NOT NULL,
  `director` varchar(100) NOT NULL,
  `studio` varchar(100) NOT NULL,
  `mainCharacter1` varchar(500) NOT NULL,
  `mainCharacter2` varchar(500) DEFAULT NULL,
  `mainCharacter3` varchar(500) DEFAULT NULL,
  `mainCharacter4` varchar(500) DEFAULT NULL,
  `seiyuuMC1` varchar(200) NOT NULL,
  `seiyuuMC2` varchar(200) DEFAULT NULL,
  `seiyuuMC3` varchar(200) DEFAULT NULL,
  `seiyuuMC4` varchar(200) DEFAULT NULL,
  `opening` varchar(1000) NOT NULL,
  `score` decimal(10,2) NOT NULL,
  `type` varchar(30) NOT NULL,
  PRIMARY KEY (`idAnime`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Volcado de datos para la tabla `AnimeEsEs`
--

INSERT INTO `AnimeEsEs` (`idAnime`, `name`, `cover`, `year`, `totalChapters`, `summary`, `extendedSummary`, `director`, `studio`, `mainCharacter1`, `mainCharacter2`, `mainCharacter3`, `mainCharacter4`, `seiyuuMC1`, `seiyuuMC2`, `seiyuuMC3`, `seiyuuMC4`, `opening`, `score`, `type`) VALUES
(1, 'Death Note', 'death_note.jpg', 2006, 37, 'La historia es protagonizada por Light Yagami, uno de los mejores estudiantes de japon. En un dÃ­a normal como cualquier otro encuentra un cuaderno con extraÃ±os poderes llamado Death Note...', 'La historia es protagonizada por Light Yagami, uno de los mejores estudiantes de japon. En un dÃ­a normal como cualquier otro encuentra un cuaderno con extraÃ±os poderes llamado Death Note el cual le permite matar a cualquier persona simplemente apuntando su nombre y pensando en su cara. A partir de aquÃ­ Light luchara por realizar un mundo ideal limpiando el mundo de criminales mientras intenta despistar a la policÃ­a.', 'Tetsuro Araki', 'Madhouse', 'Light "Kira" Yagami;;Uno De los estudiantes mas prometederes de todo japÃ³n y el primer humano en conseguir el poder de los Shinigamis. Light que mas tarde se ara conocer por el publico como "Kira" (mala interpretacion de Killer del ingles) comenzara a intentar eliminar el mundo de todo la "escoria" que sobra de este mundo.;;deathNote/characters/light.jpg', 'L Lawliet;;El mejor detective del mundo y una de las personas mas inteligentes del mundo, intentara atrapar a Light.;;deathNote/characters/L.jpg', 'Ryuk;;Primer Shinigami en la historia en bajar al mundo humano. SeguirÃ¡ a Light durante toda la historia por el simple hecho de que le divierte su forma de pensar aunque no le ayudara prÃ¡cticamente en nada.;;deathNote/characters/ryuk.jpg', 'Misa Amane;;Misa es una modelo famosa en japÃ³n que sigue fielmente a Kira pues este elimino a los asesinos de sus padres. Mas tarde adquirirÃ¡ los mismos poderes que Kira he intentara ayudarle a la ver que enamorarlo.;;deathNote/characters/misa.jpg', 'Miyano, Mamoru', 'Yamaguchi, Kappei', 'Nakamura, Shidou', 'Hirano, Aya', '#1: "the WORLD" - Nightmare;;#2: "What''s up, people?!" - Maximum the Hormone', 10.00, 'TV'),
(2, 'Full Metal Alchemist Brotherhood', 'full_metal_alchemist_brotherhood.jpg', 2009, 64, 'La historia es protagonizada por dos hermanos que perdieren a su madre por una enfermedad. En un mundo donde existe la alquimia (el intercambio equivalente de las cosas) intentaron resucitar a su madre y ese dia lo cambio todo.', 'La historia es protagonizada por dos hermanos que perdieren a su madre por una enfermedad. En un mundo donde existe la alquimia (el intercambio equivalente de las cosas) intentaron resucitar a su madre y ese dÃ­a lo cambio todo. Uno de los hermanos perdiÃ³ su cuerpo y el otro perdiÃ³ una pierna y sacrifico su brazo para reencarnar a su hermano en una armadura. Desde ese dÃ­a intentaran encontrar la manera de devolver sus cuerpos a la normalidad.', 'Yasuhiro Irie', 'BONES', 'Edward Elric;;Edward Elric, uno de los dos hermanos que intentaron revivir a su madre, mediante este intento de transmutaciÃ³n se le arriban las puertas de la transmutaciÃ³n y sera una pieza clave en el plan de "padre";;fma/characters/edward_elric.jpg', 'Alphonse Elric;;Alphonse Elric, el otro hermano que intentaro revivir a su madre, perdio su cuerpo en esta trasmutacion y su hermano tuvo que reencarnar su alma en una armadura. Intenta junto a su hermano recuperar su cuerpo y sera, al igual que su hermano, una pieza clave en el plan de "padre";;fma/characters/alphonse.jpg', 'Homunculus "Father";;Fue un ser creado por una antigua civilizacion , la cual mediante la busqueda de la inmortalidad para su rey fue destruida y comvertida en piedra filosofal. En el ansia de poder de "Father" intentando ser mas que un misero ser inmortal buscara hacer una nueva trasmutacion para convertirse en dio a cambio de una gran parte de la humanidad.;;fma/characters/father.jpg', 'Roy Mustang;;Roy Mustang, uno de los alquimistas que participo en la masacre de Isbal sera otro de los elegidos de padre en su plan.;;fma/characters/mustang.jpg', 'Park, Romi', 'Kugimiya, Rie', 'Kayumi, Iemasa', 'Miki, Shinichiro', '#1: "again" - YUI;;#2: "Hologram - NICO Touches the Walls;;#3: "Golden Time Lover - Sukima Switch;;#4: "Period" - Chemistry;;#5: "Rain - SID', 10.00, 'TV'),
(3, 'Tengen Toppa Gurren Laggan', 'tengen_toppa_gurren_lagann.jpg', 2007, 27, 'Los humanos son reducidos a vivir bajo tierra por los hombres-bestia, una raza que lucha con mechas y que dominan la superficie. Un dÃ­a un joven y su hermano encontraran un extraÃ±o mecha que les permitirÃ¡ luchar...', 'Los humanos son reducidos a vivir bajo tierra por los hombres-bestia, una raza que lucha con mechas y que dominan la superficie. Un dÃ­a un joven y su hermano encontraran extraÃ±o mecha que les permitirÃ¡ comenzar con un robot que cayo de la superficie a su pueblo junto con una chica y su rifle. Desde ese dÃ­a los hermanos y la chica intentara poder volver a vivir en la superficie.', 'Hiroyuki Imaishi', 'Gainax', 'Kamina;; Kamina es un joven que quiere sueÃ±a con vivir en la superficie y desde que el y su hermano encuentren un mecha formaran una brigada que intentara que los humanos sean libres otra vez.;;ttgl/characters/kamina.jpg', 'Simon ;; Simon es un joven timido que no tiene el mismo coraje que su hermano par la batalla pero aun asi intentara ayudarle en lo maximo que pueda.;;ttgl/characters/simon.jpg', 'Yoko Littner;; Yoko es una joven que cae de la superficie junto con un robot el cual junto a los dos hermanos deberan derrotar. Gracias a ella los hermanos reciben la informacion de que se puede vivir en la superficie y una vez que estos deciden iniciar la brigada se unira a ellos para luchar.;;ttgl/characters/yoko.jpg', NULL, 'Konishi, Katsuyuki', 'Sugou, Takayuki', 'Inoue, Marina', NULL, '#1: "Sorairo Days" - Shoko Nakagawa', 10.00, 'TV'),
(4, 'Another', 'another.jpg', 2012, 12, 'La historia trata sobre una clase que fue maldita hace mas de 25 aÃ±os. Cada aÃ±o los estudiantes de esta clase mueren en misteriosos accidentes ...', 'La historia trata sobre una clase que fue maldita hace mas de 25 aÃ±os. Cada aÃ±o los estudiantes de esta clase mueren en misteriosos accidentes y eso no incumbe solo a esos estudiantes, se extiende a maestros y familiares de estos. Los estudiantes de este aÃ±o trataran de evitar la catÃ¡strofe a toda costa pero la maldiciÃ³n es inevitable', 'Tsutomu Mizushima', 'P.A. Works', 'Mei Misaki;;Misaki es una chica bastante extraÃ±a. Vive con su tia en una casa llena de muÃ±ecas escalofriantes, porta siempre un parche en el ojo y se presente a si misma como alguien que no existe pues sus compaÃ±eros la ignoran como medida para intentar evitar la maldiciÃ³n.;;another/characters/misaki.jpg', 'Kouichi Sakakibara;;Sakakibara es un estudiante de intercambio pues su padre cambia de trabajo amenudo y se queda a vivir con sus abuelos obligandolo a cambiarse de escuela. Los primeros dias de clase no va a causa de una enfermadad y a causa de esto no se entera de las medidas contra la maldicion y habla con misaki con lo que todos piensan ue la maldiciÃ³n comienza por esta causa.;;another/characters/sakakibara.jpg', NULL, NULL, 'Takamori, Natsumi', 'Abe, Atsushi', NULL, NULL, '#1: "Kyoumu Densen" - ALI PROJECT', 8.50, 'TV'),
(5, 'Pokemon: The Origin', 'pokemon_the_origin.jpg', 2013, 4, 'La historia trata sobre los videojuegos originales de Pokemon Red & Green y sus dos protagonistas Red personaje encarnado por el jugador y Green su rival...', 'La historia trata sobre los videojuegos originales de Pokemon Red & Green y sus dos protagonistas Red personaje encarnado por el jugador y Green su rival. En esta historia veremos de forma rÃ¡pida todo lo ocurrido en los primeros juegos cosa que puede llenar de nostalgia a muchos por ser uno de los juegos de su infancia-', 'Daiki Tomiyasu', 'OLM, Production I.G. y XEBEC', 'Red;;Personaje que los jugadores de pokemon encarnan. Un joven el cual tiene un potencial increible y que se convertira en el campeon de la liga pokemon;;pokemonTheOrigin/characters/red.jpg', 'Green;;El eterno rival de Red y una vez que este le derrota ex-campeon de la liga pokemon. Es otro joven con mucho potencial;;pokemonTheOrigin/characters/green.jpg', NULL, NULL, 'Takeuchi, Junko', 'Eguchi, Takuya', NULL, NULL, 'No tiene.', 7.90, 'Special'),
(6, 'Code Geass: Hangyaku no Lelouch', 'code_geass.jpg', 2006, 25, 'Britannia es una potencia militar que domina la mayor parte del mundo mediante unos mechas denominados Knitghmares. Entre los paises dominados se encuentra ...', 'Britannia es una potencia militar que domina la mayor parte del mundo mediante unos mechas denominados Knitghmares. Entre los paises dominados se encuentra JapÃ³n que pierde todos sus derechos cambiando el nombre del pais a Zona 11 y sus habitantes a ser conocidos como Elevens. En este mundo un joven llama Lelouch Lamperouge luchara por descubrir quien de la familia real mato a su madre y se unirÃ¡ a los grupos terroristas japoneses para que le ayuden mediante un gran poder denominado "Geass" o "poder de reyes"', 'Goro Taniguchi', 'Sunrise', 'C.C.;; Nada mas comenzar el anime los terroristas japoneses (o fuerte de liberaciÃ³n japonesa) han robado una bomba o eso dicen. Dentro de esta se encuentra C.C. un ser practicamente inmortal capaz de entregar mediante un contrato el poder del "geass" AcompaÃ±ara a Lelouch durante la duracion de la serie.;;codeGeass/characters/CC.jpg', 'Suzaku Kururugi;; Es un soldado de las fuerzas de Britannia que fue hijo de uno de los generales Japoneses en la guerra. Conduce el Lancerot el principal dolor de cabeza para Lelouch o Zero.;;codeGeass/characters/kururugi.jpg', 'Lelouch "Lelouch vi Britannia, Zero" Lamperouge;; Descendiente de el emperador de Britannia fue expulsado al intentar reclamar a su padre los nombres de los asesinos de su madre. A partir de ese dia juro venganza contra su padre y toda la familia imperial e intentara destruirla mientras busca al asesino de su madre. Para ello se une a al frente de liberacion japones para destruir al imperio de Britannia.;;codeGeass/characters/lelouch.jpg', 'Kallen "Red Lotus, Karen Kouzuki" Stadtfeld;; Uno de los miembros mas importantes del frente de liberaciÃ³n japonesa pues su hermano fue el cabecilla. Mitad Britannia mitad japonesa luchara en memoria de su hermano para liberar JapÃ³n de Brittania Sera la primera en contactar con Zero y pronto sera su numero 1 pilotando el Guren MK-II un temible mecha con un arma en la mano izquierda capaz de no dejar ni rastro de sus victimas;;codeGeass/characters/karen.jpg', 'Konishi, Katsuyuki', 'Sugou, Takayuki', 'Inoue, Marina', NULL, '#1: "COLORS" - FLOW;;#2: "Kaidoku Funou" - Jinn;;#3: "Hitomi no Tsubasa" - Access', 10.00, 'TV');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `UsuarioList`
--

CREATE TABLE IF NOT EXISTS `UsuarioList` (
  `idUsuario` int(11) NOT NULL,
  `idAnime` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `score` decimal(10,2) NOT NULL,
  `type` varchar(30) NOT NULL,
  `chaptersViewed` int(11) NOT NULL,
  `chaptersTotal` int(11) NOT NULL,
  PRIMARY KEY (`idUsuario`,`idAnime`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `UsuarioList`
--

INSERT INTO `UsuarioList` (`idUsuario`, `idAnime`, `name`, `score`, `type`, `chaptersViewed`, `chaptersTotal`) VALUES
(10, 1, 'Death Note', 10.00, 'TV', 37, 37),
(10, 2, 'Full Metal Alchemist Brotherhood', 10.00, 'TV', 64, 64),
(10, 3, 'Tengen Toppa Gurren Laggan', 10.00, 'TV', 27, 27),
(10, 4, 'Another', 8.50, 'TV', 12, 12),
(10, 5, 'Pokemon: The Origin', 7.90, 'Special', 4, 4),
(10, 6, 'Code Geass: Hangyaku no Lelouch', 10.00, 'TV', 25, 25);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Usuarios`
--

CREATE TABLE IF NOT EXISTS `Usuarios` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `Usuario` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE KEY `Usuario` (`Usuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Volcado de datos para la tabla `Usuarios`
--

INSERT INTO `Usuarios` (`idUsuario`, `Usuario`, `Email`, `Password`) VALUES
(9, 'test', 'gmail@gmail.com', 'test'),
(10, 'cnsaks', 'cnsaks@gmail.com', '123'),
(12, 'test2', 'test2@gmail.com', 'test2'),
(13, 'test3', 'test3@gmail.com', 'test3');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
