//What is the purpose of a promise object?
// to receive data from an external source without stopping the whole program from running
// to keep site going while knowing data is coming later
//to save time: it acts as a stand in for the actual requested data and lets the rest of the program run while it waits for data

// what method determines what happens when a promise is resolved?
// .then


// what method determines what happens when a promise is rejected
// .catch

// what is the difference between synchronous and asynchronous
// Async is multi-thread, which means operations or programs can run in parallel. Sync is single-thread, so only one operation or program will run at a time. Async is non-blocking, which means it will send multiple requests to a server.
// synchronous is the program runs linear whereas asynchronous allows the functions to continue running even if one function hasnt completed yet



//variable for api key
const apiKey = "9efda93b"

//variable for base url
const baseURL = "https://www.omdbapi.com/"


// function that does movie search
function movieSearch(title){
    //constructurig url for request 
    const url = `${baseURL}?t=${title}&apiKey=${apiKey}`
    
    //make our request 
    $.ajax(url)//url is the arg for the function, return the promise object
    .then((movie)=> {
        console.log(movie)

        //render the movie
        const $main = $("main")
        $main.empty()//empty out main

        $main.html(`<h1>${movie.Title}</h1>
        <h3>Genre: ${movie.Genre}</h3>
        <h3>Language: ${movie.Language}</h3>
        <p>Plot: ${movie.Plot}</p>
        <img src="${movie.Poster}">
        `)
       
        
    })
}

//grab the submit button and put the a click event on it
$("input[type=submit]").on("click", (event) => {

    //prevent refresh
    event.preventDefault();

    //grab text from input box 
    const inputText = $("input[type=text]").val()

    //update the screen
    movieSearch(inputText)


}) 
