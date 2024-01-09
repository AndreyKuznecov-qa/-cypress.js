describe('Тестирование для формы логина и пароля', function () {
   it(' Проверка на позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru'); // ищу инпут имейл и ввожу логин
        cy.get('#pass').type('iLoveqastudio1');  // ищу инпут пароля и ввожу пароль
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
})
    it(' Автотест на проверку логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru'); 
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');     

 })
    it(' Проверка на негативный кейс авторизации не правельного пароля', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqa'); // проверка неправельного пароля
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})
    it(' Проверку на негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('germandolnikov.ru'); // проверка валидации
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
        cy.get('#exitMessageButton').should('be.visible');
})
    it(' Проверка на негативный кейс авторизации не правельного логина', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('qwerty@dolnikov.ru'); // проверка не правельного логина
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
 })
    it(' Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ищу инпут имейл и ввожу логин
        cy.get('#pass').type('iLoveqastudio1');  // ищу инпут пароля и ввожу пароль
        cy.get('#loginButton').click();
        cy.contains('Авторизация успешна').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
 })
 })
