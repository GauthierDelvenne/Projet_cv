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


