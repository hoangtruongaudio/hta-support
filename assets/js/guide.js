// ===============================
// DỮ LIỆU HƯỚNG DẪN
// ===============================

const guideData = {

    bluetooth: {

        title: "Kết nối Bluetooth",

        video: "assets/videos/bluetooth.mp4",

        content: `
            <div class="guide-content-box">

                <h3>📋 Các bước thực hiện</h3>

                <ol>
                    <li>Mở Bluetoth trên điện thoại.</li>
                    <li>Mở nắp tai nghe lên.</li>
                    <li>Màn hình iphone sẽ hiển thị kết nối, sau đó nhấn giữ nút sau lưng hộp tai nghe đến khi hết hiển thị chữ kết nối.</li>
                    <li>Máy báo kết nối thành công thì lấy tai nghe ra khỏi hộp và sử dụng.</li>
                    <li>Lưu ý <b>máy Androi</b>.</li> : Chỉ cần mở nắp tai nghe vào cài đặt bluetooth. nhấn vào tên tai nghe " VD: Airpods " để kết nối.
                </ol>

                <div class="guide-note">

                    <strong>💡 Lưu ý</strong>

                    <p>Nếu điện thoại không tìm thấy Bluetooth, hãy Reset tai nghe rồi thử lại.</p>

                </div>

            </div>
        `

    },



    reset: {

        title: "Reset tai nghe",

        video: "assets/videos/reset.mp4",

        content: `
            <div class="guide-content-box">

                <h3>📋 Các bước Reset</h3>

                <ol>
                    <li>Vào cài đặt bluetooth trên điện thoại chọn quên tên thiết bị</li>
                    <li>Đặt cả hai tai nghe vào hộp sạc và để mở nắp hộp.</li>
                    <li>Nhấn giữ nút sau lưng hộp Reset khoảng 10 giây.</li>
                    <li>Đợi đèn LED nhấp nháy rồi đóng nắp.</li>
                    <li>Kết nối Bluetooth lại theo hướng dẫn kết nối bluetooth.</li>
                </ol>

            </div>
        `

    },



    touch: {

        title: "Điều khiển cảm ứng",

        video: "assets/videos/touch.mp4",

        content: `
            <div class="guide-content-box">

                <h3>📋 Thao tác</h3>

                <ul>

                    <li> Chạm 1 lần: Phát / Tạm dừng - Nhận / Tắt Cuộc Gọi.</li>

                    <li> Chạm 2 lần: Chuyển bài.</li>

                    <li> Chạm 3 lần quay lại bài cũ.</li>

                    <li> Vuốt lên xuống để tăng giảm âm lượng [ Chỉ Riêng Với Pro 2 ].</li>

                    <li> Nhấn giữ: Chuyển chế độ ANC [ Chỉ Riêng Với Pro 2 ANC ].</li>
                    
                </ul>

            </div>
        `

    },



    anc: {

        title: "ANC & Xuyên âm",

        video: "assets/videos/anc.mp4",

        content: `
            <div class="guide-content-box">

                <h3>📋 Các chế độ</h3>

                <ul>

                    <li>ANC: Khử ồn chủ động – Giảm tiếng ồn xung quanh, tập trung hơn.</li>

                    <li>Transparency: Chế độ Xuyên âm – Nghe nhạc đồng thời vẫn nghe được âm thanh bên ngoài.</li>

                    <li>Normal: Chế độ Thường – Âm thanh cân bằng, nghe nhạc rõ nét</li>

                </ul>

            </div>
        `

    }

};
// ===============================
// LẤY CÁC PHẦN TỬ
// ===============================

const modal = document.getElementById("guideModal");
const modalTitle = document.getElementById("modalTitle");
const modalVideo = document.getElementById("modalVideo");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

// ===============================
// CLICK CARD
// ===============================

document.querySelectorAll(".guide-card").forEach(card => {

    card.addEventListener("click", function () {

        const key = this.dataset.guide;

        const data = guideData[key];

        if (!data) return;

        modalTitle.textContent = data.title;

        modalVideo.src = data.video;

        modalContent.innerHTML = data.content;

        modal.style.display = "flex";

        document.body.style.overflow = "hidden";

    });

});

// ===============================
// ĐÓNG POPUP
// ===============================

closeModal.addEventListener("click", closeGuide);

modal.addEventListener("click", function(e){

    if(e.target === modal){

        closeGuide();

    }

});

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        closeGuide();

    }

});

function closeGuide(){

    modal.style.display = "none";

    modalVideo.pause();

    modalVideo.currentTime = 0;

    document.body.style.overflow = "auto";

}