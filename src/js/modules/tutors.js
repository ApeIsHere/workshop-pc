const tutors = function () {

    const teacherItem = document.querySelectorAll('.tutors__item'),
        teacherCards = document.querySelectorAll('.tutors__card'),
        buttons = document.querySelectorAll('.button-bio'),
        bios = document.querySelectorAll('.tutors__bio');
    let position = {},
        removeCallBacks = [];


    const clearCallBacks = () => removeCallBacks.forEach(c => c());

    const changeCssVar = (center = 0, initial = 0) => {
        document.documentElement.style.setProperty('--initial-position', initial);
        document.documentElement.style.setProperty('--center-position', center);
    }

    buttons.forEach((btn, i) => {
        console.log(removeCallBacks);

        const showBio = () => {
            console.log(btn);
            //Getting all cards x-position
            teacherCards.forEach((card, j) => {
                position[`x${j}`] = Math.floor(card.getBoundingClientRect().x);
            });

            // Animating the correct card to the center using CSS variables to control @keyframe animation
            teacherCards.forEach((card, j) => {
                const clickedCardPos = position[`x${j}`],
                    centerCardPos = position.x1;

                if (j !== i) {
                    card.style.opacity = 0.4;
                    card.style.animation = 'getSmaller 1.2s ease-in-out forwards';
                } else {
                    if (clickedCardPos !== centerCardPos) {
                        const distance = centerCardPos - clickedCardPos;

                        changeCssVar(`${distance}px`, `${-distance}px`);

                        // we need to apply 2 diffirent animations to the same object
                        // that's why we use a wrapper teacherItem
                        // we apply 1 animation to the card and the second to the wrapper.
                        card.style.animation = 'flowToCenter 1.2s ease-in-out forwards';
                        teacherItem[1].style.animation = 'flowToSide 1.2s ease-in-out forwards';
                    }
                }
            });

            clearCallBacks();
        }

        btn.addEventListener('click', showBio);
        removeCallBacks.push(() => btn.removeEventListener('click', showBio));
    });
}

tutors();

export default tutors;