let mealtype = [], city = [], restaurants = [], restaurantbyname = [],restaurantbycity=[]

function getmealType() {
    fetch('http://localhost:8989/mealtype', { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            mealtype = data;
            ShowMealData()
        })
}

function ShowMealData() {
    let i = 0
    while (i < mealtype.data.length) {
        let id = document.getElementById(i)
        let name = document.getElementById(`name${i}`)
        let image = document.getElementById(`image${i}`)
        let content = document.getElementById(`content${i}`)
        element = mealtype.data[i]
        name.innerHTML = element.name
        image.src = element.image
        content.innerHTML = element.content
        i++
    }
}

function Loadcity() {
    fetch('http://localhost:8989/cityList', { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            city = data;
            Citydata()
        })
}

function Citydata() {
    let ul = document.getElementById('ul')
    for (let i = 0; i < city.data.length; i++) {
        const element = city.data[i].name;
        let li = document.createElement('li')
        li.innerHTML = element
        li.className = 'dropdown-item'
        ul.appendChild(li)
    }

}

// function LoadRestaurant(){
//     // const search_restaurant= document.getElementById('search-restaurant').value
//     // console.log(search_restaurant);
//     fetch('http://localhost:8989/getAllRestaurants', { method: 'GET' })
//         .then(response => response.json())
//         .then(data => {
//             restaurants = data
//             ShowRestaurant()
//         })
// }

function ShowRestaurant() {
    const name = document.getElementById('search-restaurant').value
    if(name!=""){

        fetch(`http://localhost:8989/getRestaurantByName/${name}`, { method: 'GET' })
        .then(response => response.json())
        .then(data =>
            restaurantbyname = data)
            console.log(restaurantbyname);
        }
    else{
        alert("Please enter restaurant name to search")
    }
}

function getRestaurantByCity() {
    fetch(`http://localhost:8989/getRestaurantsbycity/Delhi`, { method: 'GET' })
    .then(response => response.json())
    .then(data =>{
        restaurantbycity=data
        ShowRestaurantBycity()
    })
}

let i=0
function  ShowRestaurantBycity(){
        let i = 0
        while (i < restaurantbycity.data.length) {
            let element = restaurantbycity.data[i]
            let id=document.getElementById(`product${i}`)
            let image=document.getElementById(`image${i}`)
            let name=document.getElementById(`name${i}`)
            let locality=document.getElementById(`locality${i}`)
            let address=document.getElementById(`address${i}`)
            let cost=document.getElementById(`price${i}`)
            let cuisines = document.getElementById(`cuisines${i}`)
            let cityname=document.getElementById(`cityname${i}`)
            SendData()

            if (element.Cuisine.length>1){
            }
            function SendData() {
                image.src=element.thumb;
                name.innerHTML=element.name;
                locality.innerHTML=element.locality;
                address.innerHTML=element.address;
                if(element.Cuisine.length>1){
                    for (let j = 0; j < element.Cuisine.length; j++) {
                        cuisines.innerHTML=element.Cuisine[j].name;
                    }
                }
                else{
                    cuisines.innerHTML=element.Cuisine[i].name;
                }
                cost.innerHTML="₹"+element.cost;
            }
            i++;
        }
        
}