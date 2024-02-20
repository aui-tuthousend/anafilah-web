const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    }));
});


const hiddentxt = document.querySelectorAll('.hidden');
hiddentxt.forEach((el) => observer.observe(el));

//  <----------------------------         --------------------------------------------------------->

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show2');
        } else {
            entry.target.classList.remove('show2');
        }
    }));
});


const hiddentxt2 = document.querySelectorAll('.hidden2');
hiddentxt2.forEach((el) => observer2.observe(el));