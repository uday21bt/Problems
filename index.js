//1st program
let colorChange=document.getElementById("red")

if(colorChange) { 
    colorChange.style.backgroundColor= "red"
}else{
    prompt("Element with ID 'colorChange' not found.")
}

//2 nd problems

let newParagraph=document.createElement("p")

let text=document.createTextNode("Skill safari");newParagraph.appendChild(text)

let existingDiv=content;
 existingDiv.appendChild(newParagraph)

 //3rd 

//  let parentElement=document.getElementById(parent);
//  let childElement=document.querySelector(".remove")

//  if(childElement){
//     parentElement.removeChild(childElement)
//  }else{
//     console.prompt("child no found")
//  }


//4th one
 

let button=document.createElement("button");

button.textContent="click me";

button.addEventListener("click", function(){
    console.log("Button clicked!")
});

let existingContent=document.getElementById("four");

existingContent.appendChild(button);

//5th one

let textInput=document.getElementById("textInput")

textInput.addEventListener("keydown",function(event){
    if(event.keyCode === 13){
        alert ("Enter pressed")
    }
})

//6th one

let colorButton=document.getElementById("colorButton")

let originalColor="#3498db";

colorButton.addEventListener("click",function(){
    colorButton.style.backgroundColor=originalColor;
})

colorButton.addEventListener("dblclick",function(){
    colorButton.style.backgroundColor="#e74c3c";
})

//7th one
 

let input=document.getElementById("input")

let displayText=document.getElementById("displayText")

input.addEventListener("blur",function(){
    displayText.textContent="Entered Text" + input.value;
})


// ERROR HANDLING

//9th one

 
const checkParameter=(parameter)=>{
    if(parameter<0){
        throw Error("parameter must be greater than or equal to 0")
    }else{
        console.log("Parameter is valid",parameter)
    }
}

try{
    checkParameter(-5)

}catch (error){
    console.error(error.message)
}

//Asynchronous Programming:

//10 th one


    
    function delay(milliseconds) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve("Promise resolved after " + milliseconds + " milliseconds");
            }, milliseconds);
        });
    }

    
    async function exampleAsyncFunction() {
        try {
            // Call the delay function with 2000 milliseconds (2 seconds)
            const result = await delay(1000);
            console.log(result); // Log the resolved message
        } catch (error) {
            console.error("Error:", error.message);
        }
    }

    // Call the async function
    exampleAsyncFunction();


    // 11th one
    
  const API='https://api.themoviedb.org/3/movie/popular?api_key=ccffe410f1d6f178e81465d38f36dd40&language=en-US&page=1'

  fetch(API).then(response =>{
      if(!response.ok){
        throw new Error('Network response was not ok: ' + response.statusText);
      }
      return response.json();
  })
  .then (data=>{
    console.log(data)
  })
  .catch(error=>{
    console.error(error.message)
  })

  //Arrow function & Destructuring

// 12th one

const sum = (a,b)=>{
    return a+b;
    
} 

add=sum(4,5)

console.log(add)

//13th one


const numbersArray = [10, 20, 30, 40, 50];

const [a, b] = numbersArray;


console.log('Value of a:', a); 
console.log('Value of b:', b);

//14 th one

const userName=(obj)=>{
    const {name='Anonymous'}=obj;
    console.log('Name:',name);
}

//ex:
const person1={age:25,country:'india',}
userName(person1)

const person2={
    name:'jhon',
    age:33,
    country:'Australia'
}
userName(person2)













