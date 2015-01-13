ThorJs [![Build Status](https://travis-ci.org/renie/thorJs.svg?branch=master)](https://travis-ci.org/renie/thorJs)
======
This IS NOT and DO NOT INTENDED TO BE a jQuery/ExtJs/something like. 
It's just a tools pack to simplify some boring everyday work.

### Bug and suggestions
Bugs and suggestions should be sent to renie[dot]webdev[at]gmail[dot]com.


### License
This software is licensed under the MPL 2.0 License. For more
information, read [MPL 2.0](http://www.mozilla.org/MPL/2.0/)

------------------------
------------------------

### FAQ - USER

#### How to use?
If you want to just use, you can download full project from github and use 'thor.min.js' located in 'compiled' folder.

#### Where is documentation?
Here [https://github.com/renie/thorJs/wiki] .

#### Why is your documentation on Github? Why not an standalone website?
For a while, this is just a personal project. But people enjoy it, I'll think about
a more professional documentation.

#### Why don't you use object orientation on your code?
~~One of the proposals of ThorJS is high performance, and object notation reduces performance. 
Ok it does not reduces that much, and for code organization it would be better. But I prefer to get best performance on ThorJS, thus when other people were using this it will never be the cause of bad performance.
BTW, we will have some changes about this soon ;)~~

UPDATE (Sep 9th '14)

Now it's extending String and Element objects, and creating ValidationHelper as well. 

BUT it will be like this just for  dev purposes. 

I'll create a builder for converting this to several patterns. Including, obviously, that 'procedural' way.


UPDATE (Jan 12th '15)
Builder project
(https://github.com/renie/thorJS-builder).


#### Why so many simple functions?
Exactly because of simplicity, it should be simple and fast. Many people used to import
big javascript libraries just to use this kind of functions. This results in large requests 
and performance below that it could be.

#### Are you telling me I shouldn't use libs like jQuery?
Not at all. But you should used this libraries when there is a really advantage of this use.
Import almost 90kb and loose lots of performance(comparisons links: [getting styles](http://jsperf.com/style-getter), [getting styles setted on stylesheets](http://jsperf.com/style-getter-stylesheet), [selectors](http://jsperf.com/default-selectors), [id selectors](http://jsperf.com/simple-id-selection)) just to verifing existence/toggle classes and use selectors doesn't seem to be a nice choice. 

#### You're an idiot trying to reinvent the wheel!!
I like you too =D.


### FAQ - CONTRIBUTOR

#### I have a good feature or an idea for a feature. How can I suggest you to add this on Thor?
You can fork my project here on Github or you can send me an e-mail.

#### What do I get for contributing?
My thanks. That awesome feeling of helping other. May be your name here in the project =)

#### Do you use and IDE? Witch one?
Yes I do. I've been using Sublime Text for some time, but recently [JetBrains](http://www.jetbrains.com/) granted a free license for this opensource project.
Btw, thanks [JetBrains](http://www.jetbrains.com/)
