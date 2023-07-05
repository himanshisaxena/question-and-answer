//using selectors inside the element
// traversing the dom

// const buttonsIcons = document.querySelectorAll('.question-btn');

// buttonsIcons.forEach(function(btn) {
//     btn.addEventListener('click', function(event){
//         const question = event.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// });

const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    const buttonIcon = question.querySelector('.question-btn');
    //console.log(buttonIcon);
    buttonIcon.addEventListener('click', function(){
        questions.forEach(function(item){
            if (item !== question) {
                item.classList.remove('show-text')
            }
        })

        question.classList.toggle('show-text');
    })
});