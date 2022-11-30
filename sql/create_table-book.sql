CREATE TABLE `books`
(
    `id`         INT(11)                              NOT NULL auto_increment,
    `title`      VARCHAR(255)                         NOT NULL,
    `author`     VARCHAR(255)                         NOT NULL,
    `published`  BOOLEAN                              NOT NULL DEFAULT false,
    `created_at` DATETIME                             NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE `idx_title_unique` (`title`(255))
)
    engine = innodb
    charset = utf8mb4
    COLLATE utf8mb4_general_ci;