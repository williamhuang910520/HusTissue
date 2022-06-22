// import React from 'react'
// import ReactDOM from 'react-dom'

// function accountBar(){
//     return (
//         <div>
//             <H1>HAHAHA</H1>
//         </div>
//     )
// }

// const aaaa=(
//     <div>
//         <H1>HAHAHA</H1>
//     </div>
// )

// ReactDOM.render(
//     <H1>HAHAHA</H1>,
//     document.getElementById('root')
// )

fetch("data-test.json")
    .then(response => {
        return response.json();
    })
    .then(jsondata => {
        $("#root").append(htmlOrder(jsondata));
        // htmlOrder(jsondata);
        return console.log(jsondata);
    });


function htmlOrder(raw) {
    console.log(raw["Orders"]);
    let htmlItem = "";
    for (let i in raw["Orders"]) {
        let dataOrder = raw["Orders"][i];
        console.log(htmlOrderDetial(dataOrder["OrderDetail"]));

        let orderID = dataOrder["orderID"];
        let orderdate = dataOrder["orderdate"];
        let inshipped = dataOrder["inshipped"];
        let totalprice = dataOrder["totalprice"];

        htmlItem +=
            '<div class="order-item">' +
            '<div class="d-flex justify-content-between align-items-center header">' +
            '<h2>訂單編號' + orderID + '123AD3</h2>' +
            '<div class="btn-coolest-">' + (inshipped?'已送達':'未送達') + '</div>' +
            '</div>' +
            htmlOrderDetial(dataOrder["OrderDetail"]) +
            '<div class="d-flex justify-content-between align-items-center bottom">' +
            '<span>訂單時間：' + orderdate + '</span>' +
            '<div class="d-flex align-items-center">' +
            '<span>訂單金額</span>' +
            '<label>$' + totalprice + '</label>' +
            '</div>' +
            '</div>' +
            '</div>';
        // console.log(dataOrder["OrderDetail"][0]["color"]);
    }
    htmlItem = '<div class="list-group order">' + htmlItem + '</div>';
    return htmlItem;
}


function htmlOrderDetial(dataOrder) {

    var htmlItem = "";
    for (let i in dataOrder) {
        let dataOrderDetial = dataOrder[i];
        let color = dataOrderDetial["color"];
        let name = dataOrderDetial["productname"];
        let value = dataOrderDetial["value"];
        let price = dataOrderDetial["price"];
        let imgSrc = color2ImgSrc(color);
        htmlItem +=
            '<div class="order-detial-item list-group-item d-flex align-items-center flex-row">' +
            '<img src = "' + imgSrc + '" width = "130px" alt = "" >' +
            '<div class="text">' +
            '<h4>' + name + '</h4>' +
            '<small>x' + value + '</small>' +
            '</div>' +
            '<span>$' + price * value + '</span>' +
            '</div> ';
    }
    return htmlItem;
}

function color2ImgSrc(color) {
    let img = '';
    switch (color) {
        case "red":
            img = "/src/image/_2.png";
            break;
        case "org":
            img = "/src/image/_1.png";
            break;
        case "pink":
            img = "/src/image/_6.png";
            break;
        case "cyan":
            img = "/src/image/_3.png";
            break;
        case "green":
            img = "/src/image/_5.png";
            break;
        case "blue":
            img = "/src/image/_4.png";
            break;
        case "black":
            img = "/src/image/_8.png";
            break;
        case "white":
            img = "/src/image/_7.png";
            break;
        default:
            img = "/src/image/_2.png";
    };
    return img;
}