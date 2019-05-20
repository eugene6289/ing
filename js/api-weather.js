$(document).ready(function () {
    $("#city").change(function () {
        $(".api-weather").empty(); //進行切換之前,先讓container 清空
        var city = $("#city").val(); //取得id 的 值

        $.ajax({
            // url: "https://api.openweathermap.org/data/2.5/forecast?q=taipei&appid=6e07d93e97d7d19dd29fe24074d32da6&units=metric",
            url: "https://api.openweathermap.org/data/2.5/forecast",
            data: {
                q: city, //q: "taipei"
                appid: "6e07d93e97d7d19dd29fe24074d32da6",
                units: "metric",
                lang: "zh_EN"
            },
            success: function (e) { //資料會存放到function 裡面
                e.list.forEach(function (data) {
                    var myDate = new Date(data.dt * 1000);

                        // console.log($(".api-weather .box").css("background" , "red"))
                        var box = $(".api-weather .box")
                        var img = $(".api-weather .box ul li img")

                        
                        
                        
                        
                        switch (data.weather[0].main){
                            case "Clouds":
                                    data.weather[0].main = "Cloudy"
                                    break;
                            case "Clear":
                                    data.weather[0].main = "Sunny"
                                    break;
                            case "Rain":
                                    data.weather[0].main = "Rainy"
                                    break;
                        }
                        console.log(data.weather[0].main)
                    

                    var c =
                        ` <div class="box">
                            <div class="card">
                                <ul class="list-inline">
                                    <li>${data.weather[0].main}</li>
                                </ul>
                                <h1>${Math.round(data.main.temp)}<span> °C </span></h1>

                                <div class="date">
                                    <p>${data.dt_txt}</p>
                                </div>
                                <p class="city">Wind Speed : ${data.wind.speed}</p>
                            </div>
                        </div> `


                    $(".api-weather").append(c);
                })



                // $(e.list).each(function(){
                //     console.log(this.weather[0].description);
                //     console.log(this.wind)
                //     console.log("溫度 : "+ this.main.temp)
                // })

            },
            error: function () {

            }
        })
    })
});