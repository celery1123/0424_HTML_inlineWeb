const button_1 = document.querySelector("#button_1")
const button_2 = document.querySelector("#button_2")
const button_3 = document.querySelector("#button_3")
const button_4 = document.querySelector("#button_4")
const button_5 = document.querySelector("#button_5")
const button_6 = document.querySelector("#button_6")
const parnet_page1 = document.querySelector(".parnet_page1")
const parnet_page2 = document.querySelector(".parnet_page2")
const parnet_page3 = document.querySelector(".parnet_page3")
const parnet_page4 = document.querySelector(".parnet_page4")
const parnet_page5 = document.querySelector(".parnet_page5")
const parnet_page6 = document.querySelector(".parnet_page6")
const page = document.querySelector(".page")


button_1.addEventListener(("click"), () => {
    parnet_page1.style.display = "block";
    parnet_page2.style.display = "none";
    parnet_page3.style.display = "none";
    parnet_page4.style.display = "none";
    parnet_page5.style.display = "none";
    parnet_page6.style.display = "none";
    button_1.classList.add("button_res_act");
    button_2.classList.remove("button_res_act");
    button_3.classList.remove("button_res_act");
    button_4.classList.remove("button_res_act");
    button_5.classList.remove("button_res_act");
    button_6.classList.remove("button_res_act");
})

button_2.addEventListener(("click"), () => {
    parnet_page2.style.display = "block";
    parnet_page1.style.display = "none";
    parnet_page3.style.display = "none";
    parnet_page4.style.display = "none";
    parnet_page5.style.display = "none";
    parnet_page6.style.display = "none";
    button_2.classList.add("button_res_act");
    button_1.classList.remove("button_res_act");
    button_3.classList.remove("button_res_act");
    button_4.classList.remove("button_res_act");
    button_5.classList.remove("button_res_act");
    button_6.classList.remove("button_res_act");
})

button_3.addEventListener(("click"), () => {
    parnet_page3.style.display = "block";
    parnet_page1.style.display = "none";
    parnet_page2.style.display = "none";
    parnet_page4.style.display = "none";
    parnet_page5.style.display = "none";
    parnet_page6.style.display = "none";
    button_3.classList.add("button_res_act");
    button_1.classList.remove("button_res_act");
    button_2.classList.remove("button_res_act");
    button_4.classList.remove("button_res_act");
    button_5.classList.remove("button_res_act");
    button_6.classList.remove("button_res_act");
})

button_4.addEventListener(("click"), () => {
    parnet_page4.style.display = "block";
    parnet_page1.style.display = "none";
    parnet_page3.style.display = "none";
    parnet_page2.style.display = "none";
    parnet_page5.style.display = "none";
    parnet_page6.style.display = "none";
    button_4.classList.add("button_res_act");
    button_1.classList.remove("button_res_act");
    button_3.classList.remove("button_res_act");
    button_2.classList.remove("button_res_act");
    button_5.classList.remove("button_res_act");
    button_6.classList.remove("button_res_act");
})

button_5.addEventListener(("click"), () => {
    parnet_page5.style.display = "block";
    parnet_page1.style.display = "none";
    parnet_page3.style.display = "none";
    parnet_page4.style.display = "none";
    parnet_page2.style.display = "none";
    parnet_page6.style.display = "none";
    button_5.classList.add("button_res_act");
    button_1.classList.remove("button_res_act");
    button_3.classList.remove("button_res_act");
    button_4.classList.remove("button_res_act");
    button_2.classList.remove("button_res_act");
    button_6.classList.remove("button_res_act");
})

button_6.addEventListener(("click"), () => {
    parnet_page6.style.display = "block";
    parnet_page1.style.display = "none";
    parnet_page3.style.display = "none";
    parnet_page4.style.display = "none";
    parnet_page5.style.display = "none";
    parnet_page2.style.display = "none";
    button_6.classList.add("button_res_act");
    button_1.classList.remove("button_res_act");
    button_3.classList.remove("button_res_act");
    button_4.classList.remove("button_res_act");
    button_5.classList.remove("button_res_act");
    button_2.classList.remove("button_res_act");
})