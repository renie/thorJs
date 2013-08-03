var thor_string = require( './thor.string.min.js' );
var thor_validation = require( './thor.validation.min.js' );

var Test = function(){};
Test.prototype = {

    expectedResult : "", 
    givenResult : "", 
    testedParameter : "", 
    section : "",
    functionToTest : function(){},

    runTest : function(){
        this.givenResult = this.functionToTest(this.testedParameter);
        if(this.givenResult === this.expectedResult){
            console.log("Passed!");
            return true;
        }else{
            console.log("Error!", this);
            return false;
        }

    }

};

var runTests = function(){
    var tests = [];
    tests = tests.concat(stringTests());
    tests = tests.concat(validationTests());


    var successCount = 0;
    var errorsCount = 0;
    console.log("\n------\n---Starting ThorJS tests\n------\n\n\n");
    
    for (var i = 0 ; i < tests.length ; i++) {
        if(i>0 && tests[i].section !== tests[i-1].section)
        {
            console.log("End of "+tests[i-1].section+" module tests.\n");
            console.log("Starting "+tests[i].section+" module tests.\n");
        }else if( i === 0 ){
            console.log("Starting "+tests[i].section+" module tests.\n");
        }

        console.log("Running test "+(i+1)+" from "+tests.length+"...");
        if(tests[i].runTest())
            successCount++;
        else
            errorsCount++;

        console.log("\n");

        if( i == tests.length-1 ){
            console.log("End of "+tests[i].section+" module tests.\n");
        }
    }

    console.log("\nTests number: "+tests.length+"\nTests passed: "+successCount+"\nTests failed: "+errorsCount);
    console.log("\n\n\n------\n---Ending ThorJS tests\n------\n");
    
};


/**
* String test section
*/
var stringTests = function(){
    
    var trimTest = new Test();
    trimTest.expectedResult = "TESTING";
    trimTest.testedParameter = " T E S T I N G ";
    trimTest.functionToTest = thor_string.trim;

    var ltrimTest = new Test();
    ltrimTest.expectedResult = "T E S T I N G ";
    ltrimTest.testedParameter = "    T E S T I N G ";
    ltrimTest.functionToTest = thor_string.ltrim;

    var rtrimTest = new Test();
    rtrimTest.expectedResult = " T E S T I N G";
    rtrimTest.testedParameter = " T E S T I N G    ";
    rtrimTest.functionToTest = thor_string.rtrim;

    var isEmptyTest = new Test();
    isEmptyTest.expectedResult = true;
    isEmptyTest.testedParameter = "";
    isEmptyTest.functionToTest = thor_string.isEmpty;

    var isEmptyTest2 = new Test();
    isEmptyTest2.expectedResult = true;
    isEmptyTest2.testedParameter = "    ";
    isEmptyTest2.functionToTest = thor_string.isEmpty;

    var isEmptyTest3 = new Test();
    isEmptyTest3.expectedResult = true;
    isEmptyTest3.testedParameter = null;
    isEmptyTest3.functionToTest = thor_string.isEmpty;

    var isEmptyTest4 = new Test();
    isEmptyTest4.expectedResult = true;
    isEmptyTest4.testedParameter = undefined;
    isEmptyTest4.functionToTest = thor_string.isEmpty;

    var tests = [trimTest, ltrimTest, rtrimTest, isEmptyTest, isEmptyTest2, isEmptyTest3, isEmptyTest4];

    for (var i = 0 ; i < tests.length ; i++) {
        tests[i].section = "String";
    }

    return tests;
};


/**
* Validation test section
*/
var validationTests = function(){
    var tests = [];
    
    var cpfTest = new Test();
    cpfTest.expectedResult = true;
    cpfTest.testedParameter = "07008854986";
    cpfTest.functionToTest = thor_validation.validateCpf;

    var cpfTest2 = new Test();
    cpfTest2.expectedResult = false;
    cpfTest2.testedParameter = "07008854985";
    cpfTest2.functionToTest = thor_validation.validateCpf;

    var cpfTest3 = new Test();
    cpfTest3.expectedResult = true;
    cpfTest3.testedParameter = "070.088.549-86";
    cpfTest3.functionToTest = thor_validation.validateCpf;

    var cpfTest4 = new Test();
    cpfTest4.expectedResult = false;
    cpfTest4.testedParameter = "00000000000";
    cpfTest4.functionToTest = thor_validation.validateCpf;

    var cnpjTest = new Test();
    cnpjTest.expectedResult = true;
    cnpjTest.testedParameter = "67.683.768/0001-88";
    cnpjTest.functionToTest = thor_validation.validateCnpj;
    
    var cnpjTest2 = new Test();
    cnpjTest2.expectedResult = true;
    cnpjTest2.testedParameter = "67683768000188";
    cnpjTest2.functionToTest = thor_validation.validateCnpj;

    var cnpjTest3 = new Test();
    cnpjTest3.expectedResult = false;
    cnpjTest3.testedParameter = "68683768000188";
    cnpjTest3.functionToTest = thor_validation.validateCnpj;

    var cnpjTest4 = new Test();
    cnpjTest4.expectedResult = false;
    cnpjTest4.testedParameter = "00000000000000";
    cnpjTest4.functionToTest = thor_validation.validateCnpj;


    var tests = [cpfTest, cpfTest2, cpfTest3, cpfTest4, cnpjTest, cnpjTest2, cnpjTest3, cnpjTest4];

    for (var i = 0 ; i < tests.length ; i++) {
        tests[i].section = "Validation";
    }

    return tests;
};

runTests();