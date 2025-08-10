let newClient;
let currentStep = 1;
let elementSelected;

const button1 = document.querySelector("#button-1");
const button2 = document.querySelector("#button-2");
const button3 = document.querySelector("#button-3");

const pages = Array.from(document.querySelectorAll("section"));
const allCardBodies = Array.from(document.querySelectorAll('.card-body'));

//pg 1 variables
let nameinInput = "";
let emailinINput = "";

let NameSpanInPage3 = document.getElementById("NameSpanInPage3");
let EmailSpanInPage3 = document.getElementById("EmailSpanInPage3");

//pg 2 variables
let checkboxes = Array.from(document.querySelectorAll(".SelectInputs"));
let checkboxLabels = Array.from(document.querySelectorAll(".checkboxLabels"));

//pg 3 variables
const checkboxUlInPage3 = document.querySelector('.checkbox-ul');

function initialize(){
    allCardBodies.forEach((e)=>{
        e.addEventListener('click', function(event){
            if (currentStep === 1) {
                if(event.target.matches("button")){
                    nameinInput = document.getElementById("Input-Name").value;
                    emailinINput = document.getElementById("Input-Email").value;
                    Button1();
                    console.log('button 1 clicked');
                } else {
                    return;
                }
            }
            else if (currentStep === 2) {
                inputSelection();
                if(event.target.matches("button")){
                    Button2();
                    console.log('button 2 clicked');
                }
            }
            else if (currentStep === 3) {
                if(event.target.matches("button")){
                    Button3();
                    console.log('button 3 clicked');
                }
            
            }
            else{
                console.log('couldn\'t do it');
            }
        });
    })
}

function emptyCheck(){
    if(nameinInput.trim() == ""){
        document.getElementById("Name").innerHTML = "**Please fill the name field";
        return false;
    }
    if(emailinINput.trim() == ""){
        document.getElementById("emailids").innerHTML = "**Please fill the email field";
        return false; 
    }
    if(emailinINput.indexOf("@") <= 0){
        document.getElementById("emailids").innerHTML = "**Please enter a valid email";
        return false;
    }
    if((emailinINput.charAt(emailinINput.length - 4) != ".") && (emailinINput.charAt(emailinINput.length - 3) != ".")){
        document.getElementById("emailids").innerHTML = '**Your email is invalid. \n **Use a format like this: abcd@gmail.com';
        return false;
    }
    return true;
}

function page1Content (name,email) {
    this.name = name;
    this.email = email;
}
function nameAndEmailSaveInPage3(myClient){
    EmailSpanInPage3.innerHTML = myClient.email.trim();
    NameSpanInPage3.innerHTML = myClient.name.trim();
}

function Button1(){
    if(emptyCheck() === true){
        document.getElementById("Name").innerHTML = "";
        document.getElementById("emailids").innerHTML = "";
        let Name = document.getElementById("Input-Name").value;
        let Email = document.getElementById("Input-Email").value;
        
        newClient = new page1Content(Name, Email);
        changePage1to2();
        // currentStep++; 
        nameAndEmailSaveInPage3(newClient);
        return newClient;
        
    } else {
        document.getElementById("Name").innerHTML = "";
        document.getElementById("emailids").innerHTML = "";
        emptyCheck();
    }
}

function inputSelection(){
    checkboxLabels.forEach((element) => {
        element.addEventListener('click', ()=>{
            element.children[1].classList.toggle("selectedSpan");
        });
    });
}
function inputSelectionCheck(){
    elementSelected = [];
    // console.log(elementSelected);
    checkboxes.forEach((inputElement)=>{
        if(inputElement.nextElementSibling.classList == 'checkboxspan selectedSpan'){
            elementSelected.push(inputElement.nextElementSibling.innerHTML);
        }
    })
    // console.log(elementSelected);
    return elementSelected;
}
function checkBoxesSaveInPage3(){
    elementSelected.forEach((element)=>{
        //make li from element in checkboxUlInPage3
        let newLi = document.createElement("li");
        newLi.append(element);
        checkboxUlInPage3.appendChild(newLi);
        console.log(element);
    })
}
function Button2(){
    inputSelectionCheck();
    if(elementSelected.length != 0){ //yani chizi select shode
        checkBoxesSaveInPage3();
        changePage2to3();
        console.log("in button2");
        console.log(elementSelected);
        return elementSelected;
    } else { //yani chizi select nashode
        // console.log(elementSelected);
        alert("Please select at least one option!!");
    }
    
}

function Button3(){
    alert('✅Success');
}
function changePage1to2(){
    pages[0].style.display = 'none';
    pages[1].style.display = 'block';
    currentStep = 2;
    return currentStep;
}
function changePage2to3(){
    pages[1].style.display = 'none';
    pages[2].style.display = 'block';
    currentStep = 3;

    console.log("in function changePage2to3");
    return currentStep;
}

initialize();













// button2.addEventListener('click', function(){
//     document.querySelector('.page-3').style.display = 'block';
//     document.querySelector('.page-2').style.display = 'none';
// });

// initialize();