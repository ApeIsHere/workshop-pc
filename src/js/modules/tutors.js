const tutors = function () {

        const teacherCards = document.querySelectorAll('.tutors__item'),
            buttons = document.querySelectorAll('.button-bio'),
            bios = document.querySelectorAll('.tutors__bio');

        buttons.forEach((btn, i) => {
            
            function showBio() {
                teacherCards.forEach((card, j) => {

                    if (j != i) {
                        card.classList.add('animate__animated', 'animate__animated', "animate__fadeOut");
                        card.style.zIndex = 1;

                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 1000)
                    } else {
                        setTimeout(() => {
                            // card.classList
                            // card.style.zIndex = 10;
                            card.style.transform = 'translate3d(50%, 0, 0)';
                        }, 2000)
                    }
                });
                
                btn.removeEventListener('click', showBio);
            }

            btn.addEventListener('click', showBio);
        });

}

tutors();

export default tutors;