// ==========================================
// DỮ LIỆU THÔNG SỐ
// ==========================================

const specData = {

    bluetooth:{

        title:"Bluetooth",

        content:`

        <div class="guide-content-box">

            <h3>Bluetooth 5.4</h3>

            <ul>

                <li>✔ Kết nối nhanh và ổn định.</li>

                <li>✔ Khoảng cách kết nối khoảng 10 mét.</li>

                <li>✔ Tương thích iPhone, Android, Tablet.</li>

                <li>✔ Tiết kiệm pin hơn thế hệ cũ.</li>

            </ul>

        </div>

        `

    },



    chip:{

        title:"Chip xử lý",

        content:`

        <div class="guide-content-box">

            <h3>Chip JL thế hệ mới</h3>

            <ul>

                <li>✔ Ghép nối nhanh.</li>

                <li>✔ Kết nối ổn định.</li>

                <li>✔ Độ trễ thấp.</li>

                <li>✔ Tiết kiệm điện năng.</li>

            </ul>

        </div>

        `

    },



    driver:{

        title:"Driver loa",

        content:`

        <div class="guide-content-box">

            <h3>13mm Dynamic Driver</h3>

            <ul>

                <li>✔ Âm bass mạnh.</li>

                <li>✔ Giọng hát rõ.</li>

                <li>✔ Treble sáng.</li>

                <li>✔ Phù hợp nhiều thể loại nhạc.</li>

            </ul>

        </div>

        `

    },



    battery:{

        title:"Thời lượng pin",

        content:`

        <div class="guide-content-box">

            <h3>Pin sử dụng</h3>

            <ul>

                <li>✔ Khoảng 6 giờ nghe nhạc.</li>

                <li>✔ Khoảng 5 giờ đàm thoại.</li>

                <li>✔ Lên đến 24 giờ cùng hộp sạc.</li>

                <li>✔ Sạc bằng cổng Type-C.</li>

            </ul>

        </div>

        `

    },



    anc:{

        title:"ANC & Xuyên âm",

        content:`

        <div class="guide-content-box">

            <h3>3 chế độ nghe</h3>

            <ul>

                <li>✔ ANC khử tiếng ồn.</li>

                <li>✔ Xuyên âm.</li>

                <li>✔ Chế độ thường.</li>

                <li>✔ Chuyển bằng cảm ứng.</li>

            </ul>

        </div>

        `

    },



    mic:{

        title:"Micro ENC",

        content:`

        <div class="guide-content-box">

            <h3>Đàm thoại</h3>

            <ul>

                <li>✔ Lọc tiếng ồn môi trường.</li>

                <li>✔ Giọng nói rõ hơn.</li>

                <li>✔ Phù hợp gọi điện.</li>

            </ul>

        </div>

        `

    },



    water:{

        title:"Khả năng chống nước",

        content:`

        <div class="guide-content-box">

            <h3>Chuẩn IPX4</h3>

            <ul>

                <li>✔ Chống mồ hôi.</li>

                <li>✔ Chống nước bắn nhẹ.</li>

                <li>✖ Không ngâm nước.</li>

            </ul>

        </div>

        `

    },



    device:{

        title:"Thiết bị hỗ trợ",

        content:`

        <div class="guide-content-box">

            <h3>Tương thích</h3>

            <ul>

                <li>✔ iPhone</li>

                <li>✔ Android</li>

                <li>✔ iPad</li>

                <li>✔ Laptop có Bluetooth</li>

            </ul>

        </div>

        `

    }

};


// ==========================================
// LẤY PHẦN TỬ
// ==========================================

const modal=document.getElementById("specModal");

const title=document.getElementById("specTitle");

const content=document.getElementById("specContent");

const close=document.getElementById("closeSpec");


// ==========================================
// MỞ POPUP
// ==========================================

document.querySelectorAll("[data-spec]").forEach(card=>{

card.onclick=function(){

const key=this.dataset.spec;

const data=specData[key];

if(!data)return;

title.innerHTML=data.title;

content.innerHTML=data.content;

modal.style.display="flex";

document.body.style.overflow="hidden";

}

});


// ==========================================
// ĐÓNG
// ==========================================

function closeSpec(){

modal.style.display="none";

document.body.style.overflow="auto";

}

close.onclick=closeSpec;

modal.onclick=function(e){

if(e.target===modal){

closeSpec();

}

};

document.onkeydown=function(e){

if(e.key==="Escape"){

closeSpec();

}

};