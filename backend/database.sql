-- -----------------------------------------------------

-- Table `checkpoint4`.`admin`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `checkpoint4`.`admin` (
        `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `name` VARCHAR(255) NOT NULL,
        `hashed_password` VARCHAR(255) NOT NULL
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- INSERT INTO `checkpoint4`.`admin`

-- -----------------------------------------------------

INSERT INTO
    `admin`(name, hashed_password)
VALUES (
        'admin',
        '$argon2id$v=19$m=65536,t=5,p=1$lgQhMd6/YI8RXwZQrt1VMA$oBtHiEp7JSwbC+H8aVkORWC2ycR5fln8a2CrKvPT9pQ'
    );

-- -----------------------------------------------------

-- Table `checkpoint4`.`site`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `checkpoint4`.`site` (
        `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `title` VARCHAR(255) NOT NULL,
        `description` VARCHAR(255) NOT NULL,
        `url` VARCHAR(255) NOT NULL,
        `image` VARCHAR(255) NULL
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- INSERT INTO `checkpoint4`.`site`

-- -----------------------------------------------------

INSERT INTO
    site(title, description, url)
VALUES (
        'Google',
        'Le site de google',
        'www.google.fr'
    ), (
        'Orange',
        'Le site de orange',
        'www.orange.fr'
    ), (
        'Sfr',
        'Le site de sfr',
        'www.sfr.fr'
    );