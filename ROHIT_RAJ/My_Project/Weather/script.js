        const apiKey = "5ded7d423fffa56dc4c8185b797fd105";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
        
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector('.weather_icon');
        const cardImg = document.querySelector('.card');
        
        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}&units=metric`);
            if (response.status === 404) {
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            } else {
                const data = await response.json();
                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
                document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        
                // Update the weather icon and background image based on the weather conditions
                if (data.weather[0].main === "Clouds") {
                    weatherIcon.src = "images/clouds.png";
                    cardImg.style.backgroundImage = 'url("https://media.tenor.com/tQWmGFB9_SYAAAAM/moving-clouds-world-meteorological-day.gif")'; 
                } else if (data.weather[0].main === "Rain") {
                    weatherIcon.src = "images/rain.png";
                    cardImg.style.backgroundImage = 'url("https://cdn.pixabay.com/animation/2023/06/25/21/55/21-55-38-961_256.gif")'; 
                } else if (data.weather[0].main === "Clear") {
                    weatherIcon.src = "images/clear.png";
                    cardImg.style.backgroundImage = 'url("https://i.pinimg.com/originals/9c/ee/a5/9ceea5cc05195c4dd13cdafe00e37230.gif")'; 
                } else if (data.weather[0].main === "Drizzle") {
                    weatherIcon.src = "images/drizzle.png";
                    cardImg.style.backgroundImage = 'url("https://i.pinimg.com/originals/9a/4c/c0/9a4cc0a6c19ba855e100db82e57ed769.gif")'; 
                } else if (data.weather[0].main === "Mist") {
                    weatherIcon.src = "images/mist.png";
                    cardImg.style.backgroundImage = 'url("https://i.pinimg.com/originals/9c/ee/a5/9ceea5cc05195c4dd13cdafe00e37230.gif")'; 
                }
        
                document.querySelector(".error").style.display = "none";
                document.querySelector(".weather").style.display = "block";
            }
        }
        
        searchBtn.addEventListener("click", () => {
            checkWeather(searchBox.value);
        });