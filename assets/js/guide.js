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
                    <li>Mở nắp hộp sạc.</li>
                    <li>Lấy cả hai tai nghe ra.</li>
                    <li>Nếu chưa kết nối được, nhấn giữ nút Reset khoảng 10 giây.</li>
                    <li>Bật Bluetooth trên điện thoại.</li>
                    <li>Chọn tên thiết bị <b>HTA AP2</b>.</li>
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
                    <li>Đặt cả hai tai nghe vào hộp sạc.</li>
                    <li>Mở nắp hộp.</li>
                    <li>Nhấn giữ nút Reset khoảng 10 giây.</li>
                    <li>Đợi đèn LED nhấp nháy.</li>
                    <li>Kết nối Bluetooth lại.</li>
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

                    <li>• Chạm 1 lần: Phát / Tạm dừng.</li>

                    <li>• Chạm 2 lần: Chuyển bài.</li>

                    <li>• Nhấn giữ: Chuyển chế độ ANC.</li>

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

                    <li>• ANC: Khử tiếng ồn.</li>

                    <li>• Transparency: Nghe âm thanh bên ngoài.</li>

                    <li>• Normal: Chế độ thường.</li>

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