#!/usr/local/bin/coffee

soundex=require './soundex'
program=require 'commander'

program
  .version('0.1.0')
  .option('-w , --words [string]' , 'texte à convertir')
  .option('-l , --lang <string>'  , 'language (defaut fr)', /^(en|fr)$/i, 'fr')
  .parse process.argv

if !process.argv.slice(2).length
  program.outputHelp()

try
  hash=soundex program.words, program.lang
  console.log hash
catch e
  console.error e
