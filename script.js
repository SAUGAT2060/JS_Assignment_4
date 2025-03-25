//Global Variable
const apiUrl = "https://raw.githubusercontent.com/SAUGAT2060/Food_Json/main/Food.json"; 


const fetchData = () => {
  //Concept of promises 
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched Data:", data); 
            renderData(data);
        })
        .catch(error => console.error("Error fetching data:", error));
};


const renderData = (data) => {
    const container = document.getElementById("data-container");
    container.innerHTML = ""; 

    let output = ""; // Store HTML output
    data.forEach(item => {
        output += `
            <div class="food-item">
                <h2>${item.name}</h2>
                <p><strong>Category:</strong> ${item.category}</p>
                <p><strong>Price:</strong> $${item.price.toFixed(2)}</p>
                <img src="https://raw.githubusercontent.com/SAUGAT2060/Food_Json/main/${item.image}" alt="${item.name}" width="200">
            </div>
        `;
    });

    container.innerHTML = output;
};

//Arrow Function
const logMessage = (message) => console.log("LOG:", message);
logMessage("Fetching data from API...");

//Calling the function
fetchData();
