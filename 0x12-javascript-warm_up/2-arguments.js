#!/usr/bin/node

let numberOfArguments = process.argv.length ;

if ( numberOfArguments <= 2)

        {
        console.log('Norguments');

        } else if ( numberOfArguments <= 3) {

                console.log('Argument found');

        } else {
                        console.log('Arguments found');
                }
