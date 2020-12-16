SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `comments` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `post_id` int NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `comments` (`id`, `user_id`, `post_id`, `message`) VALUES
(3, 4, 1, 'La soie... vraiment je vois pas.. '),
(41, 4, 9, 'c\'est carrément cool\n');

CREATE TABLE `posts` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `title` varchar(255) NOT NULL,
  `image_url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `posts` (`id`, `user_id`, `title`, `image_url`) VALUES
(1, 2, 'Ma ville préféré ! Devinez !', 'http://localhost:3000/images/historic-center-5030692_1920.jpg1607785833762.jpg'),
(9, 4, 'Ecoute', 'http://localhost:3000/images/historic-center-5030692_1920.jpg1608130967113.jpg'),
(16, 4, 'ggg', 'http://localhost:3000/images/historic-center-5030692_1920.jpg1608130891626.jpg');

CREATE TABLE `roles` (
  `id` int NOT NULL,
  `name` varchar(10) NOT NULL,
  `code` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `roles` (`id`, `name`, `code`) VALUES
(1, 'MEMBER', 'MBR'),
(2, 'ADMIN', 'ADM');

CREATE TABLE `users` (
  `id` int NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role_id` varchar(2) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `users` (`id`, `lastname`, `firstname`, `email`, `password`, `role_id`) VALUES
(1, 'Responsable', 'communication', 'com@groupomania.com', '$2b$10$TuBVVZjPl5hRWler04oLaeUPpgMHjnMF8nyYYwxvmaRQ1Z31tT4B2', '2'),
(2, 'White', 'Walter', 'walterwhite@groupomania.com', '$2b$10$9Ynd0Ta7HLm./XtJHqSWqeeoZ.ZTinivQ5zp/SkWP4hiAGQO6HHkK', '1'),
(4, 'Doe', 'John', 'johndoe@groupomania.com', '$2b$10$vCrQNGMe4GrYaPVc3/5NU.QZCADUe8KwQc3je3OmnXEnSP7GgV2Bq', '1'),
(10, 'gh', 'fg', 'dtczelo@gmail.com', '$2b$10$PwFRL062MllM.FdNp1bbFebu5cYk6Y4pLXcPACzpXEOJktGucJBUG', '1');


ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `user_id` (`user_id`);

ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `comments`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

ALTER TABLE `posts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

ALTER TABLE `roles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;


ALTER TABLE `comments`
  ADD CONSTRAINT `posts_comments` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_comments` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `posts`
  ADD CONSTRAINT `users_posts` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
