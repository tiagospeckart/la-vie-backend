-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema clinica_desafio3
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema clinica_desafio3
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `clinica_desafio3` DEFAULT CHARACTER SET utf8mb3 ;
USE `clinica_desafio3` ;

-- -----------------------------------------------------
-- Table `clinica_desafio3`.`pacientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `clinica_desafio3`.`pacientes` (
  `id_pacientes` INT NOT NULL AUTO_INCREMENT,
  `nome_pac` VARCHAR(200) NOT NULL,
  `email_pac` VARCHAR(100) NOT NULL,
  `idade` DATE NOT NULL,
  PRIMARY KEY (`id_pacientes`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `clinica_desafio3`.`psicologos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `clinica_desafio3`.`psicologos` (
  `id_psicologos` INT NOT NULL AUTO_INCREMENT,
  `nome_psi` VARCHAR(200) NOT NULL,
  `email_psi` VARCHAR(100) NOT NULL,
  `senha` VARCHAR(100) NOT NULL,
  `apresentacao` TEXT NOT NULL,
  PRIMARY KEY (`id_psicologos`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `clinica_desafio3`.`atendimentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `clinica_desafio3`.`atendimentos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `pacientes_id` INT NOT NULL,
  `data_atendimento` DATE NOT NULL,
  `observacao` TEXT NOT NULL,
  `psicologos_id_psicologos` INT NOT NULL,
  INDEX `fk_atendimentos_pacientes_idx` (`pacientes_id` ASC) VISIBLE,
  INDEX `fk_atendimentos_psicologos1_idx` (`psicologos_id_psicologos` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_atendimentos_pacientes`
    FOREIGN KEY (`pacientes_id`)
    REFERENCES `clinica_desafio3`.`pacientes` (`id_pacientes`),
  CONSTRAINT `fk_atendimentos_psicologos1`
    FOREIGN KEY (`psicologos_id_psicologos`)
    REFERENCES `clinica_desafio3`.`psicologos` (`id_psicologos`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
