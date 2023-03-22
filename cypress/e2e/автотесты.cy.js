describe('автотесты', function () {

    it('1.1:правильный логин/пароль', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.contains('Авторизация прошла успешно').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').click();
       })

       it('1.2:восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('Olegvo366bru@gmail.com');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
       })

       it('1.3:негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('HarryPotterIsUseless');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').click();
       })

       it('1.4:негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('Oleg@Gerashchenko.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').click();
       })

       it('1.5:негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('OlegGerashchenko.com');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').click();
       })

       it('1.6:привидение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').click();
       })

       it('2.0:автотест для testqastudio.me', function () {
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').dblclick();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
        cy.get('.post-11337 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.header-right-items > .header-cart > a').click();
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type('Олег');
        cy.get('#billing_last_name').type('Геращенко');
        cy.get('#billing_address_1').type('Ставрополь');
        cy.get('#billing_city').type('Арзгир');
        cy.get('#billing_state').type('Ставропольский край');
        cy.get('#billing_postcode').type('322322');
        cy.get('#billing_phone').type('89008883434');
        cy.get('#billing_email').type('OleG@Gerashchenko.ru');
        cy.get('#place_order').click();
        cy.contains('Оформение заказа').should('be.visible');
        cy.contains('Ваш заказ принят. Благодарим вас.').should('be.visible');
        cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
       })
})