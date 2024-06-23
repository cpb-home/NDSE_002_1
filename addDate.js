#!/usr/bin/env node

const yargs = require('yargs');
const argv = yargs.argv;

const date = new Date();

if (argv.y || argv.year) {
  date.setFullYear(date.getFullYear() + (argv.y || argv.year));
}

if (argv.m || argv.month) {
  date.setMonth(date.getMonth() + (argv.m || argv.month)).toLocaleString('ru-ru', { month: 'long' });
}

if (argv.d || argv.date) {
  date.setDate(date.getDate() + (argv.d || argv.date));
}

console.log(date);