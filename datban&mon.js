
var kq = 0;

function tinhtoan()
{
    kq = s + x;
    var s = parseInt(document.getElementById("1").value);
var x =parseInt(document.getElementById("2").value) ;
document.getElementById("kq").innerHTML= s + x;
}

document.addEventListener('DOMContentLoaded', function() {
  const bookNowBtn = document.getElementById('book-now-btn');
  const bookingForm = document.getElementById('booking-form');
  const confirmationSection = document.getElementById('confirmation');
  const successMessage = document.getElementById('success-message');
  const bookingDetailsForm = document.getElementById('booking-details');
  const confirmationDetails = document.getElementById('confirmation-details');
  const successDetails = document.getElementById('success-details');
  const editBtn = document.getElementById('edit-btn');
  const confirmBtn = document.getElementById('confirm-btn');
  const bookingCode = document.getElementById('booking-code');

  bookNowBtn.addEventListener('click', function() {
      bookingForm.style.display = 'block';
      successMessage.style.display = 'none'; // Ẩn phần thông báo xác nhận nếu nó đang được hiển thị
      clearForm(); // Xóa thông tin trong form khi mở form đặt bàn mới
  });

  bookingDetailsForm.addEventListener('submit', function(event) {
      event.preventDefault();
      updateConfirmationDetails();
      bookingForm.style.display = 'none';
      confirmationSection.style.display = 'block';
  });

  editBtn.addEventListener('click', function() {
      confirmationSection.style.display = 'none';
      bookingForm.style.display = 'block';
  });

  confirmBtn.addEventListener('click', function() {
      const bookingCodeValue = generateBookingCode();
      successDetails.innerHTML = confirmationDetails.innerHTML;
      bookingCode.innerText = bookingCodeValue;
      confirmationSection.style.display = 'none';
      successMessage.style.display = 'block';
      clearForm(); // Xóa thông tin trong form sau khi xác nhận đặt bàn
  });

  function updateConfirmationDetails() 
    {
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const email = document.getElementById('email').value;
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;
      const guests = document.getElementById('guests').value;
      const specialRequests = document.getElementById('special-requests').value;

      confirmationDetails.innerHTML = `
          <p><strong>Tên:</strong> ${name}</p>
          <p><strong>Số điện thoại:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Ngày:</strong> ${date}</p>
          <p><strong>Giờ:</strong> ${time}</p>
          <p><strong>Số lượng người:</strong> ${guests}</p>
          <p><strong>Yêu cầu đặc biệt:</strong> ${specialRequests}</p>
      `;
    }

  function generateBookingCode() 
    {
      return Math.random().toString(36).substr(2, 9);
    }

  function clearForm() 
    {
      bookingDetailsForm.reset();
    }

});

document.addEventListener('DOMContentLoaded', function() {
  // Mảng để lưu trữ lịch sử đặt bàn
  const bookingHistory = [];

  // Lấy các phần tử HTML
  const showHistoryBtn = document.getElementById('show-history-btn');
  const bookingHistorySection = document.getElementById('booking-history');
  const bookingHistoryDetails = document.getElementById('booking-history-details');
  const bookingDetailsForm = document.getElementById('booking-details');

  // Khi người dùng nhấn vào nút "Lịch Sử Đặt Bàn"
  showHistoryBtn.addEventListener('click', function() {
    // Ẩn phần tử booking-form và confirmation (nếu có)
    bookingDetailsForm.style.display = 'none';
    document.getElementById('confirmation').style.display = 'none';

    // Hiển thị phần tử booking-history
    bookingHistorySection.classList.remove('hidden');

    // Hiển thị lịch sử đặt bàn trong phần tử booking-history-details
    showBookingHistory();
  });

  // Hàm hiển thị lịch sử đặt bàn
  function showBookingHistory() {
    // Xóa nội dung cũ
    bookingHistoryDetails.innerHTML = '';

    // Kiểm tra xem có dữ liệu lịch sử đặt bàn không
    if (bookingHistory.length === 0) {
      bookingHistoryDetails.innerHTML = '<p>Chưa có lịch sử đặt bàn.</p>';
    } else {
      // Hiển thị thông tin của mỗi lần đặt bàn trong lịch sử
      bookingHistory.forEach(function(booking, index) {
        const bookingInfo = `
          <div>
            <h3>Đặt Bàn ${index + 1}</h3>
            <p><strong>Tên:</strong> ${booking.name}</p>
            <p><strong>Số điện thoại:</strong> ${booking.phone}</p>
            <p><strong>Email:</strong> ${booking.email}</p>
            <p><strong>Ngày:</strong> ${booking.date}</p>
            <p><strong>Giờ:</strong> ${booking.time}</p>
            <p><strong>Số lượng người:</strong> ${booking.guests}</p>
            <p><strong>Yêu cầu đặc biệt:</strong> ${booking.specialRequests}</p>
          </div>
        `;
        bookingHistoryDetails.innerHTML += bookingInfo;
      });
    }
  }

  // Khi người dùng đặt bàn
  bookingDetailsForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Lưu thông tin đặt bàn vào mảng lịch sử đặt bàn
    const booking = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      date: document.getElementById('date').value,
      time: document.getElementById('time').value,
      guests: document.getElementById('guests').value,
      specialRequests: document.getElementById('special-requests').value
    };
    bookingHistory.push(booking);
    // Hiển thị lịch sử đặt bàn
    showBookingHistory();
    // Reset form
    bookingDetailsForm.reset();
  }); 
});








  
