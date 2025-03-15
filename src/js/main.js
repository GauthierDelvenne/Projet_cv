document.documentElement.classList.add('js-enabled');
(
    function () {
        const experienceArticleSwitch = {
            firstButtonElement: document.getElementById('button__first'),
            secondButtonElement: document.getElementById('button__second'),
            articleElements: document.querySelectorAll('div .div__exp'),

            init() {
                this.firstButtonElement.addEventListener('click', () => this.toggleClass(0, 2));
                this.secondButtonElement.addEventListener('click', () => this.toggleClass(2, 0));
            },
            toggleClass(activeIndex, inactiveIndex) {
                this.firstButtonElement.classList.toggle('actif');
                this.secondButtonElement.classList.toggle('actif');
                this.articleElements[activeIndex].classList.add('exp__active');
                this.articleElements[activeIndex].classList.remove('exp__noActive');

                this.articleElements[inactiveIndex].classList.add('exp__noActive');
                this.articleElements[inactiveIndex].classList.remove('exp__active');
            }
        };
        experienceArticleSwitch.init();
    })();

(
    function () {
        const competenceArticleSwitch = {
            articleElements: document.querySelectorAll('.competence_article'),
            liElements: document.querySelectorAll('#competence ul li'),
            actifElement: document.querySelector('.actif__li'),

            init() {
                for (const liElement of this.liElements) {
                    liElement.addEventListener('click', () => {
                        this.next(liElement);
                        this.showArticle(liElement);
                    });
                }
            },
            next(clickedElement) {
                if (this.actifElement) {
                    this.actifElement.classList.remove('actif__li');
                }
                clickedElement.classList.add('actif__li');
                this.actifElement = clickedElement;
            },
            showArticle(clickedElement) {
                const index = Array.from(this.liElements).indexOf(clickedElement);
                this.articleElements.forEach(article => article.classList.add('hidden'));
                this.articleElements[index].classList.remove('hidden');
            }
        };
        competenceArticleSwitch.init();
    })();
(
    function () {
        const hobbiesArticleSwitch = {
            firstButtonElement: document.getElementById('button__hobbies1'),
            secondButtonElement: document.getElementById('button__hobbies2'),
            articleElements: document.querySelectorAll('.hobbies_article'),

            init() {
                this.firstButtonElement.addEventListener('click', () => this.changeArticle(-1));
                this.secondButtonElement.addEventListener('click', () => this.changeArticle(1));
            },

            changeArticle(direction) {
                const currentIndex = [...this.articleElements].findIndex(el => el.classList.contains('show'));
                const nextIndex = (currentIndex + direction + this.articleElements.length) % this.articleElements.length;

                this.articleElements[currentIndex].classList.remove('show');
                this.articleElements[currentIndex].classList.add('hidden');

                this.articleElements[nextIndex].classList.add('show');
                this.articleElements[nextIndex].classList.remove('hidden');
            }
        };

        hobbiesArticleSwitch.init();
    })();
(
    function () {
        const gifLoader = {
            init() {
                document.addEventListener("DOMContentLoaded", () => {
                    this.gifToggle = document.getElementById("gifPlaceholder");
                    this.playButton = document.getElementById("playButton");
                    this.playButton.addEventListener("click", () => this.applies());
                });
            },
            applies() {
                const currentSrc = this.gifToggle.getAttribute("src");
                const gifSrc = this.gifToggle.getAttribute("data-gif");
                const staticSrc = this.gifToggle.getAttribute("data-static");

                this.gifToggle.setAttribute("src", currentSrc === staticSrc ? gifSrc : staticSrc);
            }
        };
        gifLoader.init();
    })();
(
    function (){
        const swapEdition = {
             editionElements : document.querySelectorAll('.art-edition'),
             buttonEditionElements : document.querySelectorAll('.button__edition'),
            init(){
                this.addEventListener();
                this.resize();
            },
            addEventListener(){
                this.buttonEditionElements[0].addEventListener('click', () => {
                    if (window.innerWidth <= 767) {
                        this.editionElements[1].classList.add('second');
                        this.editionElements[2].classList.add('third');
                        this.editionElements[0].classList.remove('hidden');
                    } else {
                        this.editionElements[0].classList.remove('hidden');
                        this.editionElements[2].classList.add('third');
                        this.editionElements[1].style.gridColumn = "4 / 6";
                    }
                });

                this.buttonEditionElements[1].addEventListener('click', () => {
                    if (window.innerWidth <= 767) {
                        this.editionElements[0].classList.add('hidden');
                        this.editionElements[2].classList.add('third');
                        this.editionElements[1].classList.remove('second');
                        this.editionElements[1].style.gridColumn = "3 / 5";
                    } else {
                        this.editionElements[0].classList.add('hidden');
                        this.editionElements[2].classList.remove('third');
                        this.editionElements[1].style.gridColumn = "2 / 4";
                        this.editionElements[2].style.gridColumn = "4 / 6";
                    }
                });

                this.buttonEditionElements[2].addEventListener('click', () => {
                    this.editionElements[1].classList.add('second');
                    this.editionElements[0].classList.add('hidden');
                    this.editionElements[2].classList.remove('third');
                    this.editionElements[2].style.gridColumn = "3 / 5";
                });
            },
            resize(){
                window.addEventListener('resize', ()=>{
                    if (window.innerWidth >= 1279){
                        this.editionElements[2].removeAttribute('style');
                        this.editionElements[1].removeAttribute('style');
                    } else if(window.innerWidth > 766 && window.innerWidth < 830) {
                        this.editionElements[2].classList.add('third');
                        this.editionElements[0].classList.remove('hidden');
                        this.editionElements[2].removeAttribute('style');
                        this.editionElements[1].removeAttribute('style');
                    } else if(window.innerWidth <= 767){
                        this.editionElements[2].classList.add('third');
                        this.editionElements[1].classList.add('second');
                        this.editionElements[0].classList.remove('hidden');
                    }
                })
            }
        }
        swapEdition.init();
    }
)();







