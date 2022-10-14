const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
const message= document.querySelector('.message');
const intro= document.querySelectorAll('.intro');
menuToggle.onclick= () => {
    navigation.classList.toggle('open');
    message.classList.toggle('open');
    for (let i=0;i<intro.length; i++){
        intro[i].classList.toggle('open');
        }
}
const listItems = document.querySelectorAll('.list-item');
listItems.forEach(item => {
    item.onmouseover = () => {
        listItems.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
    }
})