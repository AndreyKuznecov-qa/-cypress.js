describe('Тестирование для формы логина и пароля', function () {
   it(' Проверка на позитивный кейс авторизации', function () {
        cy.visit('https://pokemonbattle.me');
        cy.get(':nth-child(1) > .auth__input').type('inoevcovcheg@yandex.ru'); // вводим логин
        cy.get('#password').type('FiFacomrus2011'); // вводим пароль
        cy.get('.auth__button').click();         // кликаем на вход
        cy.get('.header__btns > [href="/shop"]').click(); // кликаем на магазин
        cy.get(':nth-child(1) > .shop__button').click();  // кликаем купить аватар
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111'); // вводим номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/24'); // вводим дату карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // вводим код карты
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('GERMAN DOLNIKOV'); // вводим имя и фамилию 
        cy.get('.pay-btn').click(); // кликаем оплатить
        cy.get('#cardnumber').type('56456'); // вводим смс код
        cy.get('.payment__submit-button').click(); // кликаем отправить
        cy.contains('Покупка прошла успешно').should('be.visible');
        cy.get('.payment__adv').click(); // кликаем вернуться в магазин
        



})
})