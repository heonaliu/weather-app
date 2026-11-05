# Weather App

## Description
- See the weather in your area with adorable personalized graphics

## Purpose of Building
- I need to work more with APIs in general - I never usually do and I wanted to make something fun and simple to practice my skills of linking API with front end and fetching data

## Challenges
- I rarely work with APIs in general so for this project I had to research open-meteo.com which is a free weather API
- I had to learn how to call from an API
- I learned open-mateo has different weather codes for different descriptions - goal of this project is to retrieve the code and match it to the description which matches it to the right icon
- ran in to several errors trying to show the Weather Art component. I checked the console and it due to reading underfined name.
- nothing on the art was rendering and all the css if left aligned - it was quite frustrating to find out where my syntax errors are.
- I had to reimport the images differently rather than directly calling the file within the array.

## Parts I'm Proud Of:
- as I was writing the submit fields - i recognized e.preventDefault() to prevent the refreshing of page.

## Learning:
- async functions are special functions that run in the background -- it returns a promise (of completion or failure) of a task
- learned that res=await fetch(url) makes a requet to the server -- whatever comes back is resolved into a "Response" object
- res.ok is a "read-only" property that evaluates to true if the HTTP status code is within a certain range. Otherwise it evaluates to false
- after fetching data, when formatting it if it has curly braces, that means we're extrating a specific property named "whatever is inside the curly bracket"
- I knew that there was always try and catch however I didn't realize that you could also use finally in there too.
- Object.keys(obj) is a method that returns an array of given objects. Obj is the array you want to extract the "keys" from.