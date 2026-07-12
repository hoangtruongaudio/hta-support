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

            <h2>🔧 Cách khắc phục</h2>
<ul>
    <li>✔ Vào phần Bluetooth trên điện thoại, chọn <strong>Quên thiết bị (Forget Device)</strong>.</li>
    <li>✔ Bật lại Bluetooth và tiến hành ghép nối lại từ đầu.</li>
    <li>✔ Đặt cả hai tai nghe vào hộp sạc và đóng nắp khoảng 10 giây.</li>
    <li>✔ Mở nắp hộp sạc, nhấn giữ nút Reset khoảng 10-15 giây đến khi đèn báo nhấp nháy.</li>
    <li>✔ Kết nối lại theo mục hướng dẫn kết nối.</li>
    <li>✔ Đảm bảo cả tai nghe và hộp sạc còn đủ pin.</li>
    <li>✔ Vệ sinh chân sạc của tai nghe và hộp sạc nếu lâu ngày không sử dụng.</li>
    <li>✔ Thử kết nối với một thiết bị khác để kiểm tra lỗi.</li>
</ul>

<h2>💡 Lưu ý</h2>
<ul>
    <li>✔ Không đặt tai nghe quá xa điện thoại khi ghép nối lần đầu.</li>
    <li>✔ Nên sử dụng trong phạm vi kết nối Bluetooth khoảng 10 mét (không có vật cản).</li>
    <li>✔ Nếu sau khi reset vẫn không kết nối được, vui lòng liên hệ shop để được hỗ trợ nhanh nhất.</li>
</ul>

        </div>

        `

    },



    charge: {

        title: "Tai nghe không sạc",

        video: "assets/videos/charge.mp4",

        content: `

        <div class="guide-content-box">

            <h2>⚠️ Dấu hiệu</h2>
<ul>
    <li>✔ Tai nghe không vào pin.</li>
    <li>✔ Hộp sạc không sáng đèn báo.</li>
    <li>✔ Đặt tai nghe vào hộp nhưng không nhận sạc.</li>
    <li>✔ Đèn báo không hiển thị khi cắm sạc.</li>
</ul>

<h2>🔧 Cách khắc phục</h2>
<ul>
    <li>✔ Lau sạch chân tiếp xúc sạc trên tai nghe và hộp sạc.</li>
    <li>✔ Kiểm tra hộp sạc còn pin hay không.</li>
    <li>✔ Đặt tai nghe đúng vị trí trong hộp sạc.</li>
    <li>✔ Thử sử dụng dây sạc hoặc củ sạc khác.</li>
    <li>✔ Cắm sạc liên tục khoảng 30 phút nếu pin đã cạn hoàn toàn.</li>
    <li>✔ Kiểm tra cổng sạc có bám bụi hoặc dị vật hay không.</li>
    <li>✔ Nếu vẫn không nhận sạc, vui lòng liên hệ shop để được hỗ trợ.</li>
</ul>

        `

    },



    one: {

        title: "Chỉ nghe 1 bên tai",

        video: "assets/videos/reset.mp4",

        content: `

        <div class="guide-content-box">

            <h<h2>⚠️ Dấu hiệu</h2>
<ul>
    <li>✔ Chỉ nghe được một bên tai nghe.</li>
    <li>✔ Một bên có âm thanh, bên còn lại không hoạt động.</li>
    <li>✔ Hiển thị 2 tên tai nghe chỉ nghe được từng bên 1.</li>
</ul>

<h2>🔧 Cách khắc phục</h2>
<ul>
    <li>✔ Đặt cả hai tai nghe vào hộp sạc và sạc đầy pin.</li>
    <li>✔ Nếu hiện 2 tên: kết nối cả 2 đổi 2 tên tai nghe thành mặc đinh - Sao cho 2 tên giống đồng bộ - Xóa (Quên thiết bị) 2 tai nghe trong phần Bluetooth điện thoại.</li>
    <li>✔ Reset tai nghe theo hướng dẫn của nhà sản xuất.</li>
    <li>✔ Ghép nối lại tai nghe từ đầu.</li>
    <li>✔ Đảm bảo cả hai tai nghe đều được sạc và nhận kết nối.</li>
    <li>✔ Nếu vẫn chỉ hoạt động một bên, vui lòng liên hệ shop để được hỗ trợ.</li>
</ul>

        `

    },



    nosound: {

        title: "Đã kết nối nhưng không có âm thanh",

        video: "assets/videos/nosound.mp4",

        content: `

        <div class="guide-content-box">

<h2>⚠️ Dấu hiệu</h2>
<ul>
    <li>✔ Tai nghe đã kết nối Bluetooth nhưng không có âm thanh.</li>
    <li>✔ Nhạc vẫn phát qua loa ngoài của iPhone.</li>
    <li>✔ Tai nghe hiển thị đã kết nối nhưng không nghe được.</li>
</ul>

<h2>🔧 Cách khắc phục</h2>
<ul>
    <li>✔ Mở <strong>Trung tâm điều khiển (Control Center)</strong> trên iPhone.</li>
    <li>✔ Nhấn vào biểu tượng <strong>AirPlay/Đầu ra âm thanh</strong> ở góc trên bên phải trình phát nhạc.</li>
    <li>✔ Chọn đúng tên tai nghe thay vì <strong>iPhone</strong> hoặc <strong>Loa ngoài</strong>.</li>
    <li>✔ Tăng âm lượng trên iPhone và tai nghe nếu đang ở mức thấp.</li>
    <li>✔ Nếu vẫn chưa có âm thanh, tắt và bật lại Bluetooth rồi kết nối lại.</li>
    <li>✔ Khởi động lại điện thoại nếu sự cố vẫn tiếp diễn.</li>
</ul>

        `

    },



    disconnect: {

        title: "Kết nối được nhưng tự ngắt",

        video: "assets/videos/disconnect.mp4",

        content: `

        <div class="guide-content-box">

            <h2>⚠️ Dấu hiệu</h2>
<ul>
    <li>✔ Tai nghe kết nối được nhưng tự ngắt nhạc.</li>
    <li>✔ Đeo tai nghe nhưng âm thanh lúc có lúc không.</li>
    <li>✔ Tai nghe tự động tạm dừng khi đang nghe.</li>
</ul>

<h2>💡 Nguyên nhân</h2>
<ul>
    <li>✔ Tính năng <strong>Tự động phát hiện tai (Automatic Ear Detection)</strong> đang được bật.</li>
    <li>✔ Cảm biến nhận diện có thể hoạt động không ổn định khi đeo chưa đúng hoặc trong quá trình di chuyển.</li>
</ul>

<h2>🔧 Cách tắt tính năng</h2>
<ul>
    <li>✔ Kết nối tai nghe với iPhone.</li>
    <li>✔ Vào <strong>Cài đặt (Settings) → Bluetooth</strong>.</li>
    <li>✔ Nhấn biểu tượng <strong>(i)</strong> bên cạnh tên tai nghe.</li>
    <li>✔ Tắt mục <strong>Tự động phát hiện tai (Automatic Ear Detection)</strong>.</li>
    <li>✔ Thử phát nhạc lại để kiểm tra.</li>
</ul>

<h2>📌 Lưu ý</h2>
<ul>
    <li>✔ Sau khi tắt tính năng này, nhạc sẽ không tự dừng khi tháo tai nghe.</li>
    <li>✔ Nếu vẫn bị ngắt kết nối, hãy reset tai nghe và ghép nối lại.</li>
</ul>
        `

    },



    anc: {

        title: "ANC / Xuyên âm không hoạt động",

        video: "assets/videos/anc.mp4",

        content: `

        <div class="guide-content-box">

            <h2>⚠️ Dấu hiệu</h2>
<ul>
    <li>✔ Chế độ <strong>Chống ồn (ANC)</strong> hoặc <strong>Xuyên âm</strong> không hoạt động.</li>
    <li>✔ Nhấn giữ cảm ứng nhưng không chuyển đổi chế độ.</li>
    <li>✔ Âm thanh bên ngoài vẫn nghe rõ khi bật chống ồn.</li>
    <li>✔ Tai nghe bị lỏng, không kín tai nên hiệu quả chống ồn giảm.</li>
</ul>

<h2>💡 Nguyên nhân</h2>
<ul>
    <li>✔ Tai nghe chưa được đeo đúng vị trí hoặc bị lỏng, làm giảm khả năng cách âm.</li>
    <li>✔ Chưa cài đặt thao tác nhấn giữ cảm ứng để chuyển chế độ.</li>
    <li>✔ Điện thoại chưa cấp quyền hoặc chưa nhận đúng tính năng điều khiển tai nghe.</li>
</ul>

<h2>🔧 Cách khắc phục</h2>
<ul>
    <li>✔ Đeo tai nghe đúng vị trí, điều chỉnh để tai nghe ôm sát tai hơn.</li>
    <li>✔ Kiểm tra và thử các kích thước nút tai khác nhau (nếu có).</li>
    <li>✔ Vào <strong>Cài đặt Bluetooth → chọn (i) bên cạnh tên tai nghe</strong> để kiểm tra cài đặt.</li>
    <li>✔ Thiết lập thao tác <strong>Nhấn giữ cảm ứng</strong> để chuyển đổi giữa Chống ồn và Xuyên âm.</li>
    <li>✔ Đảm bảo tai nghe đã kết nối ổn định trước khi sử dụng.</li>
    <li>✔ Reset tai nghe và kết nối lại nếu tính năng vẫn không hoạt động.</li>
</ul>

<h2>📌 Lưu ý</h2>
<ul>
    <li>✔ Với một số phiên bản tai nghe giá rẻ, tính năng ANC/Xuyên âm có thể được mô phỏng bằng phần mềm và hiệu quả phụ thuộc vào phiên bản sản phẩm.</li>
    <li>✔ Đeo kín tai là yếu tố quan trọng để tăng hiệu quả giảm tiếng ồn.</li>
</ul>

        `

    },



    volume: {

        title: "Âm lượng nhỏ",

        video: "assets/videos/volume.mp4",

        content: `

        <div class="guide-content-box">

            <h2>⚠️ Dấu hiệu</h2>
<ul>
    <li>✔ Âm lượng tai nghe nhỏ hơn bình thường.</li>
    <li>✔ Một bên tai nghe nghe nhỏ hơn bên còn lại.</li>
    <li>✔ Âm thanh bị nhỏ, thiếu bass hoặc không rõ tiếng.</li>
</ul>

<h2>💡 Nguyên nhân thường gặp</h2>
<ul>
    <li>✔ Màng loa bị bám bụi bẩn sau thời gian sử dụng.</li>
    <li>✔ Lưới loa bị che bởi ráy tai hoặc bụi làm giảm âm lượng.</li>
    <li>✔ Tính năng <strong>An toàn tai nghe (Headphone Safety)</strong> trên iPhone đang giới hạn âm lượng.</li>
    <li>✔ Cài đặt âm thanh trên điện thoại chưa phù hợp.</li>
</ul>

<h2>🔧 Cách khắc phục</h2>
<ul>
    <li>✔ Vệ sinh nhẹ nhàng phần lưới loa bằng bàn chải mềm hoặc cọ nhỏ.</li>
    <li>✔ Không dùng vật nhọn chọc vào màng loa để tránh làm hỏng tai nghe.</li>
    <li>✔ Kiểm tra và vệ sinh cả hai bên tai nghe để đảm bảo âm lượng cân bằng.</li>
    <li>✔ Trên iPhone vào <strong>Cài đặt → Âm thanh & Cảm ứng → An toàn tai nghe</strong>.</li>
    <li>✔ Tắt hoặc điều chỉnh mục <strong>Giảm âm thanh lớn (Reduce Loud Sounds)</strong> nếu đang giới hạn âm lượng.</li>
    <li>✔ Kiểm tra mức âm lượng trên điện thoại và ứng dụng đang sử dụng.</li>
    <li>✔ Reset và kết nối lại tai nghe nếu âm lượng vẫn chưa cải thiện.</li>
</ul>

<h2>📌 Lưu ý</h2>
<ul>
    <li>✔ Vệ sinh định kỳ giúp loa hoạt động ổn định và duy trì chất lượng âm thanh.</li>
    <li>✔ Không vệ sinh bằng nước hoặc dung dịch trực tiếp lên màng loa.</li>
</ul>
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