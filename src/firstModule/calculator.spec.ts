"use strict";

describe("Calculator Service", function () {
    var target;

    beforeEach(function () {
        module("calculatorModule");

        inject(function (_calculatorService_) {
            target = _calculatorService_;
        });
    });

    describe("add", function () {
        it('empthy', function () {
            //Arrange
            var expected;

            //Act
            expected = target.Add('');

            //Assert
            expect(expected).toBe(0);
        });
        
         it('1', function () {
            //Arrange
            var expected;

            //Act
            expected = target.Add('1');

            //Assert
            expect(expected).toBe(1);
        });
        
        it('1,2', function () {
            //Arrange
            var expected;

            //Act
            expected = target.Add('1,2');

            //Assert
            expect(expected).toBe(3);
        });
        
        it('1,2,3', function () {
            //Arrange
            var expected;

            //Act
            expected = target.Add('1,2,3');

            //Assert
            expect(expected).toBe(6);
        });
        
        it('1\n2,3', function () {
            //Arrange
            var expected;

            //Act
            expected = target.Add('1\n2,3');

            //Assert
            expect(expected).toBe(6);
        });
        
        it('//;\n1;2', function () {
            //Arrange
            var expected;

            //Act
            expected = target.Add('//;\n1;2');

            //Assert
            expect(expected).toBe(3);
        });
        
        it('-3', function () {
            //Arrange
            var expected;

            //Act
            //Assert
            expect( function(){target.Add('-3'); } ).toThrow(new Error("Negatives not allowed: -3"));
        });        

        it('-3, -2', function () {
            //Arrange
            var expected;

            //Act
            //Assert
            expect( function(){target.Add('-3, -2'); } ).toThrow(new Error("Negatives not allowed: -3,-2"));
        });  
        
    });
});
