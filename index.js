
const paninda = document.getElementById("paninda");
const myH1 = document.getElementById("myH1");
const myBtn = document.getElementById("myBtn");
const myP = document.getElementById("myP");


let upperCase;
const inventory = [
    { name: "rc", price: 15, stock: 10 },
    { name: "coke", price: 20, stock: 5 },
    { name: "lemon", price: 18, stock: 0 } // Out of stock
];

function search() {
    let panindaInput = paninda.value.trim().toLowerCase();
    
    console.log(panindaInput);
    paninda.style.borderColor = "";
    myH1.style.color = "";
    myP.textContent = "";

    if (!panindaInput){
          myH1.textContent = `Please Enter a Item to Search!`;
          paninda.style.borderColor = "red";
          myH1.style.color = "Orange";
          return;
    }
   let itemFound = inventory.find(product => product.name === panindaInput);
    if (!itemFound){
         myH1.textContent = `Item "${panindaInput}" not found! `;
            myH1.style.color = "orange"
        
    }
    else{
         formattedName = itemFound.name.charAt(0).toUpperCase() + itemFound.name.slice(1);
        if (itemFound.stock == 0){
            myH1.textContent =  `"${formattedName}" Out of Stock`;
            myH1.style.color = "red"
        }
        else{
         myH1.textContent = `Available Stock! `;
         myH1.style.color = "green";

         myP.textContent = `${formattedName} | Price: ₱${itemFound.price} | Stocks: ${itemFound.stock}`;
        }
    }
  
   
   
}
