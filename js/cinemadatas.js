var url = decodeURI(window.location.href);
var backToPreUrl = url.split("?");
getcinema()
getmovies()

function getcinema() {
    ajax({
        url: '/cinema/getcinema',
        type: 'get',
        data: backToPreUrl[1],
        success: function(msg) {
            if (msg.isable) {
                let [arr] = [...msg.data];
                document.getElementById('cinemaimg').src = arr.url;
                document.getElementById('cinemaname').innerText = arr.name;
                document.getElementById('adress').innerText = arr.adress;
                document.getElementById('phonenum').innerText = arr.phonenum;
            } else {
                alert('获取信息失败');
            }
        }
    })
}

function getmovies() {
    ajax({
        url: '/moviescinema/getmoviescinema',
        type: 'get',
        data: backToPreUrl[2],
        success: function(msg) {
            if (msg.isable) {
                let [arr] = [...msg.data];
                document.getElementById('movieimg').src = arr.url;
                document.getElementById('moviename').innerText = arr.name;
                document.getElementById('moviekind').innerText = arr.kind;
                document.getElementById('movienum').innerText = arr.num;
                document.getElementById('moviestar').innerText = arr.start;
            } else {
                alert('获取信息失败');
            }
        }
    })
}

function jump() {
    location.href = `selectionSeat.html?${backToPreUrl[1]}?${backToPreUrl[2]}`
}