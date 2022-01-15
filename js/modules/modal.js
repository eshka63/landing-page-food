function openModal(modalSelector, modalTimerId) {
    const modalComp = document.querySelector(modalSelector);
    modalComp.classList.add('show');
    modalComp.classList.remove('hide');
    document.body.style.overflow = "hidden";
    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId);
    } else {
        console.log('ModalTimerId not found');
    }
}

function closeModal(modalSelector) {
    const modalComp = document.querySelector(modalSelector);
    modalComp.classList.add('hide');
    modalComp.classList.remove('show');
    document.body.style.overflow = ''
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    // Modal
    const modalTrigger = document.querySelectorAll(triggerSelector),
        modalClosebtn = document.querySelector('[data-close]'),
        modalComp = document.querySelector(modalSelector);

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });

    modalClosebtn.addEventListener('click', () => closeModal(modalSelector));

    modalComp.addEventListener('click', (e) => {
        if (e.target === modalComp) {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modalComp.classList.contains('show')) {
            console.log('Pressed ESC!');
            closeModal(modalSelector);
        }
    });



    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {closeModal};
export {openModal};