//http://osherove.com/tdd-kata-1/

'use strict';

function calculatorFn() {

    function inputToArray(numbers: string, delimeter : string) : Array<string> {
        return numbers.split(delimeter).join(',')
            .split('\n').join(',')
            .split(',');
    }
        
    this.Add = (input: string) : number => {
        if (input == '') {
            return 0;
        }
        
        let delimeter : string = ',';
        if (input[0] == ('/') && input[1] == ('/')) {
            delimeter = input[2];
            input = input.substring(4);
        }
        
        let numbers: Array<number> = inputToArray(input, delimeter)
            .map((strNum : string) => {
                return parseInt(strNum);
            });
        
        let negatives: Array<number> = numbers.filter((num) => {
            return num < 0;
        });
        
        if (negatives.length > 0) {
            throw new Error('Negatives not allowed: ' + negatives);
        }

        return numbers.reduce((a, b) => a + b);
    }

}

angular
    .module('calculatorModule', [])
    .service('calculatorService', calculatorFn);
