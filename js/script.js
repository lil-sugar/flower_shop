// Flowers slider code
const wrapper_flow = document.querySelector(".wrapper_flow");
const carousel_flow = document.querySelector(".carousel_flow");
const firstCard_flowWidth = carousel_flow.querySelector(".card_flow").offsetWidth;
const arrowBtns_flow = document.querySelectorAll(".wrapper_flow i");
const carousel_flow_Childrens = [...carousel_flow.children];
let isDragging_flow = false, isAutoPlay_flow = true, startX_flow, startScrollLeft_flow, timeoutId_flow;
let card_flowPerView = Math.round(carousel_flow.clientWidth / firstCard_flowWidth);
carousel_flow_Childrens.slice(-card_flowPerView).reverse().forEach(card_flow => {
    carousel_flow.insertAdjacentHTML("afterbegin", card_flow.outerHTML);
});
carousel_flow_Childrens.slice(0, card_flowPerView).forEach(card_flow => {
    carousel_flow.insertAdjacentHTML("beforeend", card_flow.outerHTML);
});
carousel_flow.classList.add("no-transition");
carousel_flow.scrollLeft = carousel_flow.offsetWidth;
carousel_flow.classList.remove("no-transition");
arrowBtns_flow.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel_flow.scrollLeft += btn.id == "left_flow" ? -firstCard_flowWidth : firstCard_flowWidth;
    });
});
const dragStart_flow = (e) => {
    isDragging_flow = true;
    carousel_flow.classList.add("dragging");
    startX_flow = e.pageX;
    startScrollLeft_flow = carousel_flow.scrollLeft;
}
const dragging_flow = (e) => {
    if(!isDragging_flow) return;
    carousel_flow.scrollLeft = startScrollLeft_flow - (e.pageX - startX_flow);
}
const dragStop_flow = () => {
    isDragging_flow = false;
    carousel_flow.classList.remove("dragging");
}
const infiniteScroll_flow = () => {
    if (carousel_flow.scrollLeft === 0) {
        carousel_flow.classList.add("no-transition");
        carousel_flow.scrollLeft = carousel_flow.scrollWidth - carousel_flow.offsetWidth;
        carousel_flow.classList.remove("no-transition");
    }
    else if (Math.ceil(carousel_flow.scrollLeft) === carousel_flow.scrollWidth - carousel_flow.offsetWidth) {
        carousel_flow.classList.add("no-transition");
        carousel_flow.scrollLeft = carousel_flow.offsetWidth;
        carousel_flow.classList.remove("no-transition");
    }
    clearTimeout(timeoutId_flow);
    if(!wrapper_flow.matches(":hover")) autoPlay_flow();
}
const autoPlay_flow = () => {
    if(window.innerWidth < 800 || !isAutoPlay_flow) return;
    timeoutId_flow = window.setTimeout(() => carousel_flow.scrollLeft += firstCard_flowWidth, 2500);
}
autoPlay_flow();
carousel_flow.addEventListener("mousedown", dragStart_flow);
carousel_flow.addEventListener("mousemove", dragging_flow);
document.addEventListener("mouseup", dragStop_flow);
carousel_flow.addEventListener("scroll", infiniteScroll_flow);
wrapper_flow.addEventListener("mouseenter", () => clearTimeout(timeoutId_flow));
wrapper_flow.addEventListener("mouseleave", autoPlay_flow);









// bouquet slider code
const wrapper_bouq = document.querySelector(".wrapper_bouq");
const carousel_bouq = document.querySelector(".carousel_bouq");
const firstCard_bouqWidth = carousel_bouq.querySelector(".card_bouq").offsetWidth;
const arrowBtns_bouq = document.querySelectorAll(".wrapper_bouq i");
const carousel_bouq_Childrens = [...carousel_bouq.children];
let isDragging_bouq = false, isAutoPlay_bouq = true, startX_bouq, startScrollLeft_bouq, timeoutId_bouq;
let card_bouqPerView = Math.round(carousel_bouq.clientWidth / firstCard_bouqWidth);
carousel_bouq_Childrens.slice(-card_bouqPerView).reverse().forEach(card_bouq => {
    carousel_bouq.insertAdjacentHTML("afterbegin", card_bouq.outerHTML);
});
carousel_bouq_Childrens.slice(0, card_bouqPerView).forEach(card_bouq => {
    carousel_bouq.insertAdjacentHTML("beforeend", card_bouq.outerHTML);
});
carousel_bouq.classList.add("no-transition");
carousel_bouq.scrollLeft = carousel_bouq.offsetWidth;
carousel_bouq.classList.remove("no-transition");
arrowBtns_bouq.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel_bouq.scrollLeft += btn.id == "left_bouq" ? -firstCard_bouqWidth : firstCard_bouqWidth;
    });
});
const dragStart_bouq = (e) => {
    isDragging_bouq = true;
    carousel_bouq.classList.add("dragging");
    startX_bouq = e.pageX;
    startScrollLeft_bouq = carousel_bouq.scrollLeft;
}
const dragging_bouq = (e) => {
    if(!isDragging_bouq) return;
    carousel_bouq.scrollLeft = startScrollLeft_bouq - (e.pageX - startX_bouq);
}
const dragStop_bouq = () => {
    isDragging_bouq = false;
    carousel_bouq.classList.remove("dragging");
}
const infiniteScroll_bouq = () => {
    if (carousel_bouq.scrollLeft === 0) {
        carousel_bouq.classList.add("no-transition");
        carousel_bouq.scrollLeft = carousel_bouq.scrollWidth - carousel_bouq.offsetWidth;
        carousel_bouq.classList.remove("no-transition");
    }
    else if (Math.ceil(carousel_bouq.scrollLeft) === carousel_bouq.scrollWidth - carousel_bouq.offsetWidth) {
        carousel_bouq.classList.add("no-transition");
        carousel_bouq.scrollLeft = carousel_bouq.offsetWidth;
        carousel_bouq.classList.remove("no-transition");
    }
    clearTimeout(timeoutId_bouq);
    if(!wrapper_bouq.matches(":hover")) autoPlay_bouq();
}
const autoPlay_bouq = () => {
    if(window.innerWidth < 800 || !isAutoPlay_bouq) return;
    timeoutId_bouq = window.setTimeout(() => carousel_bouq.scrollLeft += firstCard_bouqWidth, 2500);
}
autoPlay_bouq();
carousel_bouq.addEventListener("mousedown", dragStart_bouq);
carousel_bouq.addEventListener("mousemove", dragging_bouq);
document.addEventListener("mouseup", dragStop_bouq);
carousel_bouq.addEventListener("scroll", infiniteScroll_bouq);
wrapper_bouq.addEventListener("mouseenter", () => clearTimeout(timeoutId_bouq));
wrapper_bouq.addEventListener("mouseleave", autoPlay_bouq);







// Form code
let popupBg = document.querySelector('.popup__bg'); 
let popup = document.querySelector('.popup'); 
let openPopupButtons = document.querySelectorAll('.claim_btn'); 
let closePopupButton = document.querySelector('.close-popup');
openPopupButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        popupBg.classList.add('active'); 
        popup.classList.add('active'); 
    })
});
closePopupButton.addEventListener('click',() => { 
    popupBg.classList.remove('active'); 
    popup.classList.remove('active'); 
});
document.addEventListener('click', (e) => { 
    if(e.target === popupBg) { 
        popupBg.classList.remove('active'); 
        popup.classList.remove('active'); 
    }
});






// Back to top arrow
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    });
    scrollProgress.style.background = `conic-gradient(#b8807e ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;






// Cart work
var noti = document.querySelector('.shop_cart');
let closeCartButton = document.querySelector('.close-cart');
var select = document.querySelector('.select');
var buttons = document.querySelectorAll('.order_btn');

noti.addEventListener('click', () => { 
    select.classList.add('active'); 
});
closeCartButton.addEventListener('click',() => { 
    select.classList.remove('active'); 
});
document.addEventListener('click', (e) => { 
    if(e.target === select) { 
        select.classList.remove('active'); 
    }
});

for(var but of buttons){
    but.addEventListener('click', (e)=>{
        var add = Number(noti.getAttribute('data-count') || 0);
        noti.setAttribute('data-count', add +1);
        noti.classList.add('zero')
        var parent = e.target.parentNode;
        var clone = parent.cloneNode(true);
        clone.id = parent.id;
        var lastChild = clone.lastElementChild;
        clone.removeChild(lastChild);
        var removeButton = document.createElement('button');
        removeButton.classList.add('dismiss_btn');
        removeButton.innerText = 'Remove';
        clone.appendChild(removeButton);
        select.appendChild(clone);
        removeButton.addEventListener('click', function(e) {
            e.preventDefault();
            var parentDiv = e.target.parentNode;
            parentDiv.remove();
            var currentCount = Number(noti.getAttribute('data-count'));
            if (currentCount === 1) {
                noti.setAttribute('data-count', 0);
                noti.classList.remove('zero');
            } else {
                noti.setAttribute('data-count', currentCount - 1);
            }
        });
    })
}


// Extra order button
function send_data() {
    var name = document.getElementById('name').value;
    var ph_num = document.getElementById('phone_nb').value;
    if (name === '' || ph_num === ''){
        alert('Будь ласка, заповніть поля');
    } else{
        document.getElementById('name').value = '' ;
        document.getElementById('phone_nb').value = '';
        setTimeout(function() {
            alert('Ваші данні успішно надіслано');
        }, 500);
    }
}
