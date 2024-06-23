#!/usr/bin/env node

const yargs = require('yargs');
const argv = yargs.argv;

const currentDate = new Date();
let dateFlag = true;

if (argv.y || argv.year) {
  dateFlag = false;
  console.log(`Текущий год: ${currentDate.getFullYear()}`);
}

if (argv.m || argv.month) {
  dateFlag = false;
  console.log(`Текущий месяц: ${currentDate.toLocaleString('ru-ru', { month: 'long' })}`);
}

if (argv.d || argv.date) {
  dateFlag = false;
  console.log(`Дата в календарном месяце: ${currentDate.getDate()}`);
}

if (dateFlag) {
  console.log(`Текущая дата и время в формате ISO: ${currentDate}`);
}