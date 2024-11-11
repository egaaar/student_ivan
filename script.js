function DropDown(el) {
    this.dd = el;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            event.stopPropagation();
        });
    }
};
// function btn(){
//     let img = document.querySelector(".img");
//     img.style.transform = 'rotate(-90deg)';
//     let btn = document.querySelector(".btn");
//     console.log(btn);
//     // let p = document.querySelector(".text");
//     // p.textContent = "Моя первая статья";
//     console.log(img);    
// }
// $(document).ready(function(){
//     $('.block__title').click(function(event){
//         if($('.block').hasClass('one')){
//            $('.block__title').not($(this)).removeClass('active');
//            $('.block__text').not($(this).next()).slideUp(300);
//         }
//         $(this).toggleClass('active').next().slideToggle(300);
//     });
// });
// document.querySelector(document).ready(function(){
//     document.querySelector('.block__title').click(function(event){
//         if(document.querySelector('.block').classList.contains('one')){
//            document.querySelector('.block__title').not(document.querySelector(this)).removeClass('active');
//            document.querySelector('.block__text').not(document.querySelector(this).nextElementSibling).slideUp(300);
//         }
//         document.querySelector(this).classList.toggle('active').nextElementSibling.slideToggle(300);
//     });
// });
let tat = document.querySelector(".block__title");
console.log(tat);
function move(){
    let txt = document.querySelector(".block__text");
    txt.style.display = 'block';
};
// tit.addEventListener("click", move());
