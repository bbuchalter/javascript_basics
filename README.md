# Front-End Web Developer Nanodegree

## JavaScript Basics Project

### Resources Used
* [JavaScript Basics @ Udacity](https://www.udacity.com/course/ud804)

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


### Relationship Directions v.2
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
Notice in the second example, because the y value was missing, the output said that undefined was not a number.
```

Adapted from UVa [problem 11172](http://uva.onlinejudge.org/external/111/11172.html).
