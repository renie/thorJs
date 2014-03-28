/* globals getMeta, hasClass, addClass, removeClass, addEvent, isPropertySupported, getStyle */
describe('Testing THOR DOM functions:', function () {
    afterEach(function() {
        document.head.innerHTML = '';
        document.body.innerHTML = '';
    });

	/**
	 * GET META
	 */
    it('GETMETA - there is no meta tag', function () {
        var result = function(){
            getMeta('testingmeta');
        };
        expect(result).toThrow(new Error('There is no meta tags with name: testingmeta'));
    });

    it('GETMETA - get an existing meta value', function () {
        var newMeta = document.createElement('meta');
        newMeta.setAttribute('name','testingmeta');
        newMeta.setAttribute('content','this meta has been tested!');
        document.head.appendChild(newMeta);

        var result = getMeta('testingmeta');
        expect(result).toEqual('this meta has been tested!');
    });
    it('GETMETA - get a non existing meta value', function () {
        var newMeta = document.createElement('meta');
        newMeta.setAttribute('name','testingmeta2');
        newMeta.setAttribute('content','this meta has been tested!');
        document.head.appendChild(newMeta);

        var result = function(){
            getMeta('testingwrongmeta');
        };
        expect(result).toThrow(new Error('There is no meta tags with name: testingwrongmeta'));
    });

    it('GETMETA - empty param', function () {
        var newMeta = document.createElement('meta');
        newMeta.setAttribute('name','testingmeta3');
        newMeta.setAttribute('content','this meta has been tested!');
        document.head.appendChild(newMeta);

        var result = function(){
            getMeta('');
        };
        expect(result).toThrow(new Error('There is no meta tags with name: '));
    });

    it('GETMETA - number param', function () {
        var newMeta = document.createElement('meta');
        newMeta.setAttribute('name','testingmeta4');
        newMeta.setAttribute('content','this meta has been tested!');
        document.head.appendChild(newMeta);

        var result = function(){
            getMeta(0);
        };
        expect(result).toThrow(new Error('String expected!'));
    });

    it('GETMETA - element param', function () {
        var newMeta = document.createElement('meta');
        newMeta.setAttribute('name','testingmeta5');
        newMeta.setAttribute('content','this meta has been tested!');
        document.head.appendChild(newMeta);

        var result = function(){
            getMeta(document.createElement('div'));
        };
        expect(result).toThrow(new Error('String expected!'));
    });

    it('GETMETA - missing param', function () {
        var result = function(){
            getMeta();
        };
        expect(result).toThrow(new Error('String expected!'));
    });




	/**
	 * HAS CLASS
	 */
    it('HASCLASS - element param existing class', function () {
        var newElement = document.createElement('div');
        newElement.className = 'test work';
        document.body.appendChild(newElement);

        var result = hasClass(newElement, 'work');
        expect(result).toEqual(true);
    });

    it('HASCLASS - element param non existing class', function () {
        var newElement = document.createElement('div');
        newElement.className = 'test work';
        document.body.appendChild(newElement);

        var result = hasClass(newElement, 'fun');
        expect(result).toEqual(false);
    });

    it('HASCLASS - missing first parameter', function () {
        var result = function(){
            hasClass(null, 'fun');
        };
        expect(result).toThrow(new Error('Element expected on first parameter!'));
    });

    it('HASCLASS - missing second parameter', function () {
        var newElement = document.createElement('div');
        newElement.className = 'test work';
        document.body.appendChild(newElement);
        var result = function(){
            hasClass(newElement, null);
        };
        expect(result).toThrow(new Error('String expected on second parameter!'));
    });

    it('HASCLASS - missing boh parameter', function () {
        var result = function(){
            hasClass();
        };
        expect(result).toThrow(new Error('Element expected on first parameter!'));
    });




	/**
	 * ADD CLASS
	 */
    it('ADDCLASS - check if it was added', function () {
        var newElement = document.createElement('div');
        document.body.appendChild(newElement);

        addClass(newElement, 'work');
        
        var result = newElement.className.indexOf('work');

        expect(result).toBeGreaterThan(-1);
    });

    it('ADDCLASS - check if any extra spaces after or before were added', function () {
        var newElement = document.createElement('div');
        document.body.appendChild(newElement);

        addClass(newElement, 'work');
        
        var result1 = newElement.className.indexOf('work ');
        var result2 = newElement.className.indexOf(' work');

        expect(result1).toEqual(-1);
        expect(result2).toEqual(-1);
    });

    it('ADDCLASS - check if other class were not affected', function () {
        var newElement = document.createElement('div');
        newElement.className = 'job';
        document.body.appendChild(newElement);

        addClass(newElement, 'work');
        
        var result1 = newElement.className.indexOf(' work');
        var result2 = newElement.className !== 'work';

        expect(result1).toBeGreaterThan(-1);
        expect(result2).toEqual(true);
    });

    it('ADDCLASS - missing first parameter', function () {
        var result = function(){
            addClass(null, 'fun');
        };
        expect(result).toThrow(new Error('Element expected on first parameter!'));
    });

    it('ADDCLASS - missing second parameter', function () {
        var newElement = document.createElement('div');
        document.body.appendChild(newElement);
        var result = function(){
            addClass(newElement, null);
        };
        expect(result).toThrow(new Error('String expected on second parameter!'));
    });

    it('ADDCLASS - missing boh parameter', function () {
        var result = function(){
            addClass();
        };
        expect(result).toThrow(new Error('Element expected on first parameter!'));
    });





	/**
	 * REMOVE CLASS
	 */
    it('REMOVECLASS - check if it was removed', function () {
        var newElement = document.createElement('div');
        newElement.className = 'foo';
        document.body.appendChild(newElement);

        removeClass(newElement, 'foo');
        
        var result = newElement.className.indexOf('foo');

        expect(result).toEqual(-1);
    });

    it('REMOVECLASS - check if other class were not affected', function () {
        var newElement = document.createElement('div');
        newElement.className = 'job work';
        document.body.appendChild(newElement);

        removeClass(newElement, 'work');
        
        var result1 = newElement.className.indexOf('work');
        var result2 = newElement.className === 'job';

        expect(result1).toEqual(-1);
        expect(result2).toEqual(true);
    });

    it('REMOVECLASS - missing first parameter', function () {
        var result = function(){
            removeClass(null, 'fun');
        };
        expect(result).toThrow(new Error('Element expected on first parameter!'));
    });

    it('REMOVECLASS - missing second parameter', function () {
        var newElement = document.createElement('div');
        document.body.appendChild(newElement);
        var result = function(){
            removeClass(newElement, null);
        };
        expect(result).toThrow(new Error('String expected on second parameter!'));
    });

    it('REMOVECLASS - missing both parameter', function () {
        var result = function(){
            removeClass();
        };
        expect(result).toThrow(new Error('Element expected on first parameter!'));
    });




	/**
	 * GET STYLE
	 */
    it('GETSTYLE - get style added by js', function () {
        var newElement = document.createElement('div');
        newElement.style.height = '10px';
        document.body.appendChild(newElement);

        var result = getStyle(newElement, 'height');

        expect(result).toEqual('10px');
    });

    it('GETSTYLE - get style added by js in a styletag', function () {
        var css = 'div { height: 10px; }',
            head = document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        style.type = 'text/css';
        
        if (style.styleSheet)
            style.styleSheet.cssText = css;
        else
            style.appendChild(document.createTextNode(css));
        head.appendChild(style);

        var newElement = document.createElement('div');
        document.body.appendChild(newElement);

        var result = getStyle(newElement, 'height');

        expect(result).toEqual('10px');
    });

    it('GETSTYLE - get style added by js in a styletag, hidden style', function () {
        var css = 'div { height: 10px; display: none; }',
            head = document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        style.type = 'text/css';
        
        if (style.styleSheet)
            style.styleSheet.cssText = css;
        else
            style.appendChild(document.createTextNode(css));
        head.appendChild(style);

        var newElement = document.createElement('div');
        document.body.appendChild(newElement);

        var result = getStyle(newElement, 'height');

        expect(result).toEqual('10px');
    });

    it('GETSTYLE - missing first parameter', function () {
        var result = function(){
            getStyle(null, 'fun');
        };
        expect(result).toThrow(new Error('Element expected on first parameter!'));
    });

    it('GETSTYLE - missing second parameter', function () {
        var newElement = document.createElement('div');
        document.body.appendChild(newElement);
        var result = function(){
            getStyle(newElement, null);
        };
        expect(result).toThrow(new Error('String expected on second parameter!'));
    });

    it('GETSTYLE - missing both parameter', function () {
        var result = function(){
            getStyle();
        };
        expect(result).toThrow(new Error('Element expected on first parameter!'));
    });
});
