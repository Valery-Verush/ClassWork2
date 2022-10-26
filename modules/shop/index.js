import "./Card.js";
import "./Cart.js";

class App extends HTMLElement {
  constructor() {
    super();
    this.data = [
      {
        id: 1,
        title: "Product #1",
        preview:
          "https://cdn21vek.by/img/galleries/6748/9/preview_b/redmi9c4gb128gbnfc_xiaomi_610b83b066c52.jpeg",
        description: "Смартфон Xiaomi Redmi 9C 4GB/128GB без NFC (серый)",
        price: 200,
      },
      {
        id: 2,
        title: "Product #2",
        preview:
          "https://cdn21vek.by/img/galleries/6270/80/preview_b/iphone1164gbmhda3_apple_5fc5de22abff7.jpeg",
        description: "Смартфон Apple iPhone 11 64GB / MHDA3 (черный)",
        price: 500,
      },
      {
        id: 3,
        title: "Product #3",
        preview:
          "https://cdn21vek.by/img/galleries/6938/334/preview_b/c112021232gbrmx3231lakeblue_realme_61696c0061cfe.jpeg",
        description: "RСмартфон Realme C11 2021 2/32GB / RMX3231 (голубой)",
        price: 230,
      },
      {
        id: 4,
        title: "Product #4",
        preview:
          "https://cdn21vek.by/img/galleries/7434/855/preview_b/x4pro8gb256gb5g_poco_6262bd41b6ea4.jpeg",
        description: "Смартфон POCO X4 Pro 8GB/256GB 5G (лазерный черный)",
        price: 240,
      },
    ];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class='container mt-5 mb-5'>
            <div class='col-12'>
                <it-cart></it-cart>
            </div>
        </div>
        <div class="container">
            <div class="row">
                ${this.data
                  .map((item) => {
                    return `
                        <div class="col mt-5">
                            <it-card data='${JSON.stringify(item)}'></it-card>
                        </div>
                    `;
                  })
                  .join(" ")}
            </div>
        </div>
        `;
  }
}

customElements.define("it-app", App);
