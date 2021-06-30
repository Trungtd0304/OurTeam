import NguoiDungServices from "./../services/NguoiDungServices.js";

const nguoiDung = new NguoiDungServices();
// Tạo hàm dom toi id
const getEle = (id) => document.getElementById(id);

// đưa data ra UI
const renderTable = (list) => {
  return list.reduce((contentHTML, item) => {
    // chỗ này nó đang render lỗi => có thể là do hàm reduce
    return (contentHTML += `
        <div class="col-xl-3 col-sm-6 col-12 px-4 pb-5">
            <div class="card cardPhone">
              <img
                class="card-img-top"
                src="./../../assets/img/${item.hinhAnh}"
                alt="Card image"
              />
              <div class="card-body text-center">
                <h4 class="card-title card__title">${item.ngonNgu}</h4>
                <p class="card-text card__content">${item.hoTen}</p>
                <span class="card__span">${item.moTa}</span>
              </div>
            </div>
        </div>
    `);
  }, ""); // a quên thám số thứ 2 cảu hàm reduce nè a
};

// hàm lấy data từ API
const fetchData = () => {
  nguoiDung
    .callApi("QLND", "GET", null)
    .then((result) => {
      let mang = result.data.filter((item) => item.loaiND === "GV"); //mảng lấy đúng

      console.log(renderTable(mang));
      getEle("productsList").innerHTML = renderTable(mang);
    })
    .catch((err) => {
      console.log(err);
    });
};
fetchData();
