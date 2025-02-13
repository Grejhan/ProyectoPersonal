(function () {
    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    
    buttonNext.addEventListener('click', () => {
        changePosition(1);
    });

    buttonBefore.addEventListener('click', () => {
        changePosition(-1);
    });

    const changePosition = (add) => {
        const currentTestimony = document.querySelector('.testimony__body--show');
        if (!currentTestimony) return;

        let currentIndex = sliders.findIndex(slider => slider === currentTestimony);
        currentTestimony.classList.remove('testimony__body--show');

        // Calcula el nuevo índice, asegurando el ciclo infinito
        let newIndex = (currentIndex + add + sliders.length) % sliders.length;
        
        sliders[newIndex].classList.add('testimony__body--show');

        console.log(sliders[newIndex]);
    };
})();

