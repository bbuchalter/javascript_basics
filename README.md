# Front-End Web Developer Nanodegree

## JavaScript Basics Project

### Resources Used
* [JavaScript Basics @ Udacity](https://www.udacity.com/course/ud804)
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

### Honor Statement
I hereby confirm that this submission is my work. I have cited above the origins of any parts of the submission that were taken from Websites, books, forums, blog posts, github repositories, etc. By including this in my email, I understand that I will be expected to explain my work in a video call with a Udacity coach before I can receive my verified certificate.

### Reflection Questions
#### We use HTML to deliver content on web pages and CSS to style those web pages. Where does JavaScript fit in? What can JavaScript do that HTML/CSS cannot?
JavaScript is a full fledged programming language data types and flow control. This allows developers to create logic which adds interactivity to an otherwise static web.  
#### JavaScript, much like many other programming languages, utilizes functions. What is the advantage to using functions over 'spaghetti code'?
Encapsulating logic into functions allows for testability, reusability, and readability. 'Spaghetti code' requires developers to understand a much larger amount of code at once, adding complexity to a developers job.
#### Application Programming Interfaces (APIs) are a great resource for any web developer. Explain in your own words what an API is, why it is important, and talk about any APIs you've explored or plan to use.
APIs define a contract between a producer and a consumer. The producer of the API generally wants to expose some function to a consumer, such as geolocation of an IP address. 
The producer documents how the consumer can interact with the function by describing what arguments the function requires the consumer to submit and the structure and types of data the function will return.
I've consumed APIs from Google Maps, ZenDesk, Facebook, and many others. I've yet to be a producer of an API. One day!

### Problem Set
All problems are unit tested. To run tests:
```
npm -g mocha
mocha
```

#### Relationship Directions v.2
We learned about relational operators and how they can classify the relationship between two values. Your job is to write the function getRelationship(x,y) function, which should return a string representing whether x is >, < or = y. For example:
```javascript
var rel = getRelationship(2, 3);
console.log(rel);
```
If one or both of the values aren't numbers, your function should output:
```
"Can't compare relationships because [this value] and [that value] [is]/[are] not [a] number[s]."
```
where `[this value]` and `[that value]` are replaced with the non-numerical values. The sentence should be grammatically correct by outputting either is or are and pluralizing number if necessary.

For example:
```javascript
var rel1 = getRelationship("this", 2);
console.log(rel1); // "Can't compare relationships because "this" is not a number."

var rel2 = getRelationship("that");
console.log(rel2) // "Can't compare relationships because "that" and undefined are not numbers."
```
Notice in the second example, because the y value was missing, the output said that undefined was not a number.

Adapted from UVa [problem 11172](http://uva.onlinejudge.org/external/111/11172.html).

#### Alphabetizer
Twelve people have walked on the Moon. They are:

Neil Armstrong
Buzz Aldrin
Pete Conrad
Alan Bean
Alan Shepard
Edgar Mitchell
David Scott
James Irwin
John W Young
Charles Duke
Eugene Cernan
Harrison Schmitt
You'll notice that these names are listed in the order that they first stepped on the Moon, not alphabetical order. To alphabetize them, it would make sense to write their names as lastname, firstname. For example: Neil Armstrong becomes Armstrong, Neil.

Finish the alphabetizer(_names) function, which takes in a names array (of length N) containing strings of names and returns an alphabetized array of names in lastname, firstname format.

#### PageSpeed Insights
Google's PageSpeed Insights (PSI) scores websites on their speed. A perfect score is 100 and the worst score is 0. Alongside the score, PSI provides relevant advice for improvements.

By integrating an automated PSI score into a suite of front-end unit tests, you can periodically check a website's overall speed.

Let's assume you're building the front-end testing framework and you make a call to the PSI [API](https://developers.google.com/speed/docs/insights/v1/getting_started). You receive the JSON below as a response.

Create a `totalBytes(psiResults)` function that iterates through `pageStats` in the `psiResults` object and returns the total number of bytes to load the website.

Then, create a `ruleList(psiResults)` function that iterates through the `localizedRuleNames` in ruleResults and returns an array of their strings.

```javascript
var psiResults;

psiResults = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
   "AvoidBadRequests": {
    "localizedRuleName": "Avoid bad requests",
    "ruleImpact": 0.0
   },
   ...
   "MinifyJavaScript": {
    "localizedRuleName": "Minify JavaScript",
    "ruleImpact": 0.1417,
    "urlBlocks": [
     {
      "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       ...
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   ...
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
}
```

See the example [here](https://developers.google.com/speed/docs/insights/v1/getting_started).
