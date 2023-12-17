//heading constant
//creating element h1
//{} - attributes of h1 tag

//const heading = React.createElement("h1",{},"Hello World from React :)");

//h1 is a type of object with the following props
//children : Hello from React
//id: heading 
//scope1 constant
//creates a root or a code inside the div id "root"

//const scope1 = ReactDOM.createRoot(document.getElementById("root"));


//and injects / puts 'heading' inside that root
//scope1.render(heading);

//CREATING NESTED DIV STRUCTURE
/*
<div id = root>
    <div id = parent>
        <div id = child>
            <h1>I am an h1 tag</h1>
        </div>
    </div>
</div>
*/
  
// const parent = React.createElement
// ("div",{id:"parent"},React.createElement
// ("div",{id:"child"},React.createElement
// ("h1",{},"I am an h1 tag")));

// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

//CREATING SIBLINGs
/*
<div id = root>
    <div id = parent>
        <div id = child>
            <h1>I am an h1 tag</h1>   // THESE TWO
            <h2>I am an h2 tag</h2>  // ARE SIBLINGS
        </div>
    </div>
</div>
*/

const parent = React.createElement
("div",{id:"parent"},React.createElement
("div",{id:"child"},
[React.createElement("h1",{},"I am an h1 tag"),
React.createElement("h2",{},"I am an h2 tag")]));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);