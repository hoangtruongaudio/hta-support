// =====================================
// DỮ LIỆU BẢO HÀNH
// =====================================

const warrantyData = {

    policy: {

        title: "Chính sách bảo hành",

        content: `

<div class="guide-content-box">

<h3>🛡️ Thời gian bảo hành</h3>

<ul>
<li>• Bảo hành 12 tháng kể từ ngày nhận hàng.</li>
<li>• Hỗ trợ kỹ thuật miễn phí trong suốt thời gian sử dụng.</li>
<li>• Đổi mới nếu xác định lỗi do nhà sản xuất.</li>
</ul>

<h3>📦 Phạm vi bảo hành</h3>

<ul>
<li>• Không kết nối Bluetooth.</li>
<li>• Không sạc được.</li>
<li>• Một bên tai không hoạt động.</li>
<li>• Lỗi phần cứng.</li>
<li>• Lỗi pin bất thường.</li>
</ul>

<div class="guide-note">

<strong>💙 Cam kết</strong>

<p>HOÀNG TRƯỜNG AUDIO luôn ưu tiên hỗ trợ khách hàng nhanh nhất trước khi tiến hành bảo hành.</p>

</div>

</div>

`

    },

    condition: {

        title: "Điều kiện bảo hành",

        content: `

<div class="guide-content-box">

<h3>✅ Điều kiện được bảo hành</h3>

<ul>
<li>• Sản phẩm còn thời hạn bảo hành.</li>
<li>• Lỗi phát sinh trong quá trình sử dụng bình thường.</li>
<li>• Không bị rơi vỡ hoặc vào nước.</li>
<li>• Không tự ý tháo lắp.</li>
<li>• Có thông tin đơn hàng.</li>
</ul>

<div class="guide-note">

<strong>💡 Lưu ý</strong>

<p>Shop luôn hỗ trợ kiểm tra ngay cả khi khách không còn nhớ mã đơn hàng.</p>

</div>

</div>

`

    },

    reject: {

        title: "Trường hợp không bảo hành",

        content: `

<div class="guide-content-box">

<h3>❌ Không thuộc phạm vi bảo hành</h3>

<ul>

<li>• Rơi vỡ, nứt, biến dạng.</li>

<li>• Ngâm nước hoặc vào nước.</li>

<li>• Tự ý tháo sửa.</li>

<li>• Sử dụng sai hướng dẫn.</li>

<li>• Cháy nổ do sạc sai nguồn.</li>

<li>• Mất hộp sạc hoặc mất tai nghe.</li>

</ul>

<div class="guide-note">

<strong>🤝 Hỗ trợ</strong>

<p>Nếu không đủ điều kiện bảo hành, shop vẫn hỗ trợ sửa chữa với chi phí hợp lý.</p>

</div>

</div>

`

    },

    process: {

        title: "Quy trình bảo hành",

        content: `

<div class="guide-content-box">

<h3>📋 Quy trình</h3>

<ol>

<li>Liên hệ kỹ thuật.</li>

<li>Gửi video mô tả lỗi.</li>

<li>Kỹ thuật hướng dẫn kiểm tra.</li>

<li>Nếu cần sẽ gửi sản phẩm về bảo hành.</li>

<li>Kiểm tra và đổi hoặc sửa theo chính sách.</li>

</ol>

<div class="guide-note">

<strong>⏱️ Thời gian</strong>

<p>Thông thường từ 3–7 ngày làm việc.</p>

</div>

</div>

`

    },

    shipping: {

        title: "Chi phí vận chuyển",

        content: `

<div class="guide-content-box">

<h3>🚚 Vận chuyển</h3>

<ul>

<li>• Shop hỗ trợ theo chính sách hiện hành nếu lỗi do nhà sản xuất.</li>

<li>• Trường hợp ngoài bảo hành khách thanh toán phí vận chuyển.</li>

<li>• Mọi chi phí sẽ được báo trước khi xử lý.</li>

</ul>

<div class="guide-note">

<strong>📦 Đóng gói</strong>

<p>Nên gửi đầy đủ hộp sạc và hai tai nghe để kỹ thuật kiểm tra chính xác.</p>

</div>

</div>

`

    },

    support: {

        title: "Hỗ trợ kỹ thuật",

        content: `

<div class="guide-content-box">

<h3>💬 Hỗ trợ trước bảo hành</h3>

<ul>

<li>• Reset tai nghe.</li>

<li>• Kết nối Bluetooth.</li>

<li>• Kiểm tra lỗi từ xa.</li>

<li>• Hướng dẫn sử dụng.</li>

</ul>

<div class="guide-note">

<strong>❤️ Cam kết</strong>

<p>Ưu tiên xử lý từ xa để khách không phải gửi bảo hành nếu không cần thiết.</p>

</div>

</div>

`

    },

    contact: {

        title: "Liên hệ bảo hành",

        content: `

<div class="guide-content-box">

<h3>📞 Khi cần hỗ trợ</h3>

<ul>

<li>• Chat Zalo.</li>

<li>• Gọi Hotline.</li>

<li>• Nhắn Shopee.</li>

<li>• Nhắn TikTok Shop.</li>

</ul>

<div class="guide-note">

<strong>🕘 Thời gian hỗ trợ</strong>

<p>08:00 - 22:00 tất cả các ngày trong tuần.</p>

</div>

</div>

`

    }

};

// =====================================
// LẤY PHẦN TỬ
// =====================================

const warrantyModal = document.getElementById("warrantyModal");
const warrantyTitle = document.getElementById("warrantyTitle");
const warrantyContent = document.getElementById("warrantyContent");
const closeWarranty = document.getElementById("closeWarranty");
const searchWarranty = document.getElementById("searchWarranty");

// =====================================
// CLICK CARD
// =====================================

document.querySelectorAll(".guide-card").forEach(card => {

    card.addEventListener("click", function(){

        const key = this.dataset.warranty;

        const data = warrantyData[key];

        if(!data) return;

        warrantyTitle.textContent = data.title;

        warrantyContent.innerHTML = data.content;

        warrantyModal.style.display = "flex";

        document.body.style.overflow = "hidden";

    });

});

// =====================================
// ĐÓNG POPUP
// =====================================

function closeWarrantyModal(){

    warrantyModal.style.display="none";

    document.body.style.overflow="auto";

}

closeWarranty.addEventListener("click", closeWarrantyModal);

warrantyModal.addEventListener("click",function(e){

    if(e.target===warrantyModal){

        closeWarrantyModal();

    }

});

document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        closeWarrantyModal();

    }

});

// =====================================
// TÌM KIẾM
// =====================================

searchWarranty.addEventListener("input",function(){

    const keyword=this.value.toLowerCase().trim();

    document.querySelectorAll(".guide-card").forEach(card=>{

        if(card.innerText.toLowerCase().includes(keyword)){

            card.style.display="flex";

        }else{

            card.style.display="none";

        }

    });

});