const wrapper = document.querySelector('.wrapper');
const subImages = document.querySelector('.sub-images');
const contentWrapper = document.querySelector('.content-wrapper');
const imageWrapper = document.querySelector('.image-wrapper');
const contentButtons = document.querySelectorAll(".content-button");
const contentTabs = document.querySelectorAll(".content-tab");
const blackButton = document.getElementById('black');
const beigeButton = document.getElementById('beige');
console.log(blackButton);
console.log(beigeButton);
const mainImages = document.querySelectorAll(".image-wrapper img");
const indicatorImages = document.querySelectorAll(".sub-images img");
var wrapperHeight = wrapper.offsetHeight;
const blackImgUrls = ["https://cdn.shopify.com/s/files/1/0438/4574/6842/products/AW20-KNITWEAR-02-SWEATER-BLACK-PATTERN-01_1024x1442_crop_center.jpg",
                      "https://cdn.shopify.com/s/files/1/0438/4574/6842/products/AW20-KNITWEAR-02-SWEATER-BLACK-PATTERN-02_1024x1442_crop_center.jpg",
                      "https://cdn.shopify.com/s/files/1/0438/4574/6842/products/AW20-KNITWEAR-02-SWEATER-BLACK-PATTERN-04_1024x1442_crop_center.jpg",
                      "https://cdn.shopify.com/s/files/1/0438/4574/6842/products/AW20-KNITWEAR-02-SWEATER-BLACK-PATTERN-03_c4a286f3-367e-4ef3-a1b0-50d660937d71_1024x1442_crop_center.jpg",
                      "https://cdn.shopify.com/s/files/1/0438/4574/6842/products/AW20-KNITWEAR-02-SWEATER-BLACK-PATTERN-05_92ccc55f-b085-458d-adc5-7fb86e2b64ff_1024x1442_crop_center.jpg"];
const beigeImgUrls = ["https://cdn.shopify.com/s/files/1/0438/4574/6842/products/AW20-KNITWEAR-02-SWEATER-BEIGE-01_1024x1442_crop_center.jpg",
                      "https://cdn.shopify.com/s/files/1/0438/4574/6842/products/AW20-KNITWEAR-02-SWEATER-BEIGE-02_1024x1442_crop_center.jpg",
                      "https://cdn.shopify.com/s/files/1/0438/4574/6842/products/AW20-KNITWEAR-02-SWEATER-BEIGE-03_db43f4ee-32f5-40b7-b05e-3b20d3387740_1024x1442_crop_center.jpg",
                      "https://cdn.shopify.com/s/files/1/0438/4574/6842/products/AW20-KNITWEAR-02-SWEATER-BEIGE-04_099b5a23-8efd-42c0-9c0a-bc98517e39dd_1024x1442_crop_center.jpg",
                      "https://cdn.shopify.com/s/files/1/0438/4574/6842/products/AW20-KNITWEAR-02-SWEATER-BEIGE-05_e0eb51c9-76a5-4159-a735-e20b6198d69f_1024x1442_crop_center.jpg"]
const windowHeight = window.innerHeight;
var subImagesHeight = subImages.offsetHeight;
const bottomDist = (windowHeight-subImagesHeight)/2;
function changeImages(){
  console.log("inside the function changeImages");
  if(blackButton.checked){
    mainImages.forEach((item, i) => {
      item.src = blackImgUrls[i];
      indicatorImages[i].src = blackImgUrls[i];
    });
  }
  else if(beigeButton.checked){
    mainImages.forEach((item, i) => {
      item.src = beigeImgUrls[i];
      indicatorImages[i].src = beigeImgUrls[i];
    });
  }
}
beigeButton.addEventListener('click',changeImages);
blackButton.addEventListener('click',changeImages);
imageWrapper.addEventListener('mouseover',()=>{
  subImages.style.opacity = "1";
});
imageWrapper.addEventListener('mouseout',()=>{
  subImages.style.opacity = "0";
});
subImages.addEventListener('mouseover',()=>{
  subImages.style.opacity = "1";
});
contentButtons.forEach((item, i) => {
  item.addEventListener("click",()=>{
    contentTabs.forEach((item, i) => {
      item.classList.remove("active");
    });
    contentButtons.forEach((item, i) => {
      item.classList.remove("active");
    });
    contentTabs[i].classList.add("active");
    item.classList.add("active");
  });
});

window.addEventListener('resize',()=>{
  wrapperHeight = wrapper.offsetHeight;
  subImagesHeight = subImages.offsetHeight;
});
window.addEventListener('scroll',()=>{
  wrapperHeight = wrapper.offsetHeight;
  subImagesHeight = subImages.offsetHeight;
  var top = window.pageYOffset;
  var posBottom = wrapperHeight - (subImagesHeight + top );
  if(top+windowHeight >= wrapperHeight)
  {
    subImages.classList.add("stick-bottom");
    contentWrapper.classList.add("stick-bottom");
    subImages.style.bottom = (bottomDist)+"px";
  }
  else{
    subImages.classList.remove("stick-bottom");
    contentWrapper.classList.remove("stick-bottom");
    subImages.style.bottom = "auto";
  }
});
