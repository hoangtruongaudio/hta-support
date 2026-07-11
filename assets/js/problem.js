// ==========================================
// DỮ LIỆU VẤN ĐỀ
// ==========================================

const problemData = {

    bluetooth: {

        title: "Không kết nối Bluetooth",

        video: "assets/videos/bluetooth.mp4",

        content: `

        <div class="guide-content-box">

            <h3>⚠️ Dấu hiệu</h3>

            <ul>
                <li>Không tìm thấy tên tai nghe.</li>
                <li>Không ghép nối được.</li>
            </ul>

            <h3>🔧 Cách khắc phục</h3>

            <ol>
                <li>Đặt cả hai tai nghe vào hộp sạc.</li>
                <li>Reset tai nghe khoảng 10 giây.</li>
                <li>Xóa Bluetooth cũ trên điện thoại.</li>
                <li>Kết nối lại.</li>
            </ol>

        </div>

        `

    },



    charge: {

        title: "Tai nghe không sạc",

        video: "assets/videos/charge.mp4",

        content: `

        <div class="guide-content-box">

            <h3>⚠️ Dấu hiệu</h3>

            <ul>
                <li>Tai nghe không vào pin.</li>
                <li>Không sáng đèn.</li>
            </ul>

            <h3>🔧 Cách khắc phục</h3>

            <ol>
                <li>Lau sạch chân sạc.</li>
                <li>Kiểm tra hộp còn pin.</li>
                <li>Đặt đúng vị trí.</li>
                <li>Đổi dây sạc khác.</li>
            </ol>

        </div>

        `

    },



    one: {

        title: "Chỉ nghe 1 bên tai",

        video: "assets/videos/reset.mp4",

        content: `

        <div class="guide-content-box">

            <h3>🔧 Cách khắc phục</h3>

            <ol>
                <li>Sạc cả hai tai nghe.</li>
                <li>Reset tai nghe.</li>
                <li>Kết nối Bluetooth lại.</li>
            </ol>

        </div>

        `

    },



    nosound: {

        title: "Đã kết nối nhưng không có âm thanh",

        video: "assets/videos/nosound.mp4",

        content: `

        <div class="guide-content-box">

            <h3>🔧 Cách khắc phục</h3>

            <ol>
                <li>Kiểm tra đầu ra âm thanh.</li>
                <li>Tăng âm lượng điện thoại.</li>
                <li>Tắt và bật Bluetooth.</li>
                <li>Reset nếu cần.</li>
            </ol>

        </div>

        `

    },



    disconnect: {

        title: "Kết nối được nhưng tự ngắt",

        video: "assets/videos/disconnect.mp4",

        content: `

        <div class="guide-content-box">

            <h3>🔧 Cách khắc phục</h3>

            <ol>
                <li>Sạc đầy pin.</li>
                <li>Để điện thoại gần tai nghe.</li>
                <li>Reset tai nghe.</li>
            </ol>

        </div>

        `

    },



    anc: {

        title: "ANC / Xuyên âm không hoạt động",

        video: "assets/videos/anc.mp4",

        content: `

        <div class="guide-content-box">

            <h3>🔧 Cách khắc phục</h3>

            <ol>
                <li>Nhấn giữ 2 giây.</li>
                <li>Đeo kín tai.</li>
                <li>Chuyển lại chế độ ANC.</li>
                <li>Reset nếu cần.</li>
            </ol>

        </div>

        `

    },



    volume: {

        title: "Âm lượng nhỏ",

        video: "assets/videos/volume.mp4",

        content: `

        <div class="guide-content-box">

            <h3>🔧 Cách khắc phục</h3>

            <ol>
                <li>Vệ sinh lưới loa.</li>
                <li>Tăng âm lượng điện thoại.</li>
                <li>Kiểm tra giới hạn âm lượng.</li>
            </ol>

        </div>

        `

    }

};


// ==========================================
// LẤY PHẦN TỬ
// ==========================================

const modal = document.getElementById("problemModal");
const title = document.getElementById("problemTitle");
const video = document.getElementById("problemVideo");
const content = document.getElementById("problemContent");
const closeBtn = document.getElementById("closeProblem");
const search = document.getElementById("searchProblem");


// ==========================================
// MỞ POPUP
// ==========================================

document.querySelectorAll(".guide-card").forEach(card => {

    card.addEventListener("click", () => {

        const key = card.dataset.problem;

        const data = problemData[key];

        if (!data) return;

        title.textContent = data.title;

        video.src = data.video;

        content.innerHTML = data.content;

        modal.style.display = "flex";

        document.body.style.overflow = "hidden";

    });

});


// ==========================================
// ĐÓNG POPUP
// ==========================================

function closeModal() {

    modal.style.display = "none";

    video.pause();

    video.currentTime = 0;

    video.removeAttribute("src");

    video.load();

    document.body.style.overflow = "auto";

}

closeBtn.onclick = closeModal;

modal.onclick = function(e){

    if(e.target===modal){

        closeModal();

    }

};

document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        closeModal();

    }

});


// ==========================================
// TÌM KIẾM
// ==========================================

search.addEventListener("keyup",function(){

    const keyword=this.value.toLowerCase();

    document.querySelectorAll(".guide-card").forEach(card=>{

        const text=card.innerText.toLowerCase();

        card.style.display=text.includes(keyword) ? "flex":"none";

    });

});