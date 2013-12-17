describe("Testing THOR String functions:", function () {  
    /*TRIM*/
    it("TRIM - multiple and variable spaces", function () {  
        var result = trim(' t  e s   t i  n g ');
        expect(result).toEqual('testing');  
    });
    it("TRIM - empty string", function () {  
        var result = trim('');
        expect(result).toEqual('');  
    });
    it("TRIM - no spaces at begin and end of string", function () {  
        var result = trim('t  e s   t i  n g');
        expect(result).toEqual('testing');  
    });
    it("TRIM - no spaces", function () {  
        var result = trim('testing');
        expect(result).toEqual('testing');  
    });
    it("TRIM - number", function () {  
        var result = function(){
            trim(1);
        } 
        expect(result).toThrow(new Error('String expected!'));  
    });
    it("TRIM - null", function () {  
        var result = function(){
            trim(null);
        } 
        expect(result).toThrow(new Error('String expected!'));  
    });
    it("TRIM - undefined", function () {  
        var result = function(){
            trim(undefined);
        } 
        expect(result).toThrow(new Error('String expected!'));  
    });


    /*LEFT TRIM*/
    it("LEFT TRIM - multiple and variable spaces", function () {  
        var result = ltrim('   t  e s t i  n g   ');
        expect(result).toEqual('t  e s t i  n g   ');  
    });
    it("LEFT TRIM - no spaces on left side", function () {  
        var result = ltrim('t  e s t i  n g   ');
        expect(result).toEqual('t  e s t i  n g   ');  
    });
    it("LEFT TRIM - no spaces on right side", function () {  
        var result = ltrim('   t  e s t i  n g');
        expect(result).toEqual('t  e s t i  n g');  
    });
    it("LEFT TRIM - empty string", function () {  
        var result = ltrim('');
        expect(result).toEqual('');  
    });
    it("LEFT TRIM - no spaces", function () {  
        var result = trim('testing');
        expect(result).toEqual('testing');  
    });
    it("LEFT TRIM - number", function () {  
        var result = function(){
            ltrim(1);
        } 
        expect(result).toThrow(new Error('String expected!'));  
    });
    it("LEFT TRIM - null", function () {  
        var result = function(){
            ltrim(null);
        } 
        expect(result).toThrow(new Error('String expected!'));  
    });
    it("LEFT TRIM - undefined", function () {  
        var result = function(){
            ltrim(undefined);
        } 
        expect(result).toThrow(new Error('String expected!'));  
    });

    /*RIGHT TRIM*/
    it("RIGHT TRIM - multiple and variable spaces", function () {  
        var result = rtrim('   t  e s t i  n g   ');
        expect(result).toEqual('   t  e s t i  n g');  
    });
    it("RIGHT TRIM - no spaces on left side", function () {  
        var result = rtrim('t  e s t i  n g   ');
        expect(result).toEqual('t  e s t i  n g');  
    });
    it("RIGHT TRIM - no spaces on right side", function () {  
        var result = rtrim('   t  e s t i  n g');
        expect(result).toEqual('   t  e s t i  n g');  
    });
    it("RIGHT TRIM - empty string", function () {  
        var result = rtrim('');
        expect(result).toEqual('');  
    }); 
    it("RIGHT TRIM - no spaces", function () {  
        var result = rtrim('testing');
        expect(result).toEqual('testing');  
    });
    it("RIGHT TRIM - number", function () {  
        var result = function(){
            rtrim(1);
        } 
        expect(result).toThrow(new Error('String expected!'));  
    });
    it("RIGHT TRIM - null", function () {  
        var result = function(){
            rtrim(null);
        } 
        expect(result).toThrow(new Error('String expected!'));  
    });
    it("RIGHT TRIM - undefined", function () {  
        var result = function(){
            rtrim(undefined);
        } 
        expect(result).toThrow(new Error('String expected!'));  
    });


    /*IS EMPTY*/
    it("IS EMPTY - string with spaces", function () {  
        var result = isEmpty(' t  e s   t i  n g ');
        expect(result).toEqual(false);  
    });
    it("IS EMPTY - no string or space", function () {  
        var result = isEmpty('');
        expect(result).toEqual(true);  
    });
    it("IS EMPTY - just spaces", function () {  
        var result = isEmpty('   ');
        expect(result).toEqual(true);  
    });
    it("IS EMPTY - number", function () {  
        var result = function(){
            isEmpty(1);
        } 
        expect(result).toThrow(new Error('String expected!'));  
    });
    it("IS EMPTY - null", function () {  
        var result = function(){
            isEmpty(null);
        } 
        expect(result).toThrow(new Error('String expected!'));  
    });
    it("IS EMPTY - undefined", function () {  
        var result = function(){
            isEmpty(undefined);
        } 
        expect(result).toThrow(new Error('String expected!'));  
    });
});
