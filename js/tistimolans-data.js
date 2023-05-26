(async function getData() {
  let data = await fetch("../assets/content/customers.json");
  data = await data.json()
    data.forEach(card => {
      document.getElementById("tistimolans-data").innerHTML += `
      <div class="col-md-4">
      <div class="mainCard mainCard--second" >
        <div class="d-flex mb-3" >
          <img src="${card.img}" class="img-fluid customer-img" alt="customer">
          <div class="ms-3" >
            <h4 class="mb-0" >${card.name}</h4>
            <ul class="custom-list gap-1">
              <li><i class="${card.star1}"></i></li>
              <li><i class="${card.star2}"></i></li>
              <li><i class="${card.star3}"></i></li>
              <li><i class="${card.star4}"></i></li>
              <li><i class="${card.star5}"></i></li>
            </ul>
          </div>
        </div>
        <p class="mb-0" >Best Cleaning Service Provider Ipsum dolor sit consectetur kengan</p>
      </div>
    </div>
      `
    });
})()