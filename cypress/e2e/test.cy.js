describe("Online Shop Tests", () => {
    // Run before each test
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com").viewport(1920, 1080);
    });

    it("Normal user", () => {
        // Enter login credentials
        cy.get("#user-name")
            .type("standard_user")
            .get("#password")
            .type("secret_sauce")

            // Click the login button
            .get("#login-button")
            .click()

            // Check if the user has logged in successfully
            .url()
            .should("include", "/inventory.html")
            .get(".title")
            .should("contain", "Products")

            // Browse selected products
            .get("#item_4_title_link")
            .click()
            .get(".inventory_details_name")
            .should("contain", "Sauce Labs Backpack")
            .get('button[id="back-to-products"]')
            .click()

            .get("#item_1_title_link")
            .click()
            .get(".inventory_details_name")
            .should("contain", "Sauce Labs Bolt T-Shirt")
            .get('button[id="back-to-products"]')
            .click()

            // Add a product to the cart
            .get('button[id="add-to-cart-sauce-labs-backpack"]')
            .click()

            // Check if the "Add to cart" button and cart icon have changed
            .get('button[id="remove-sauce-labs-backpack"]')
            .should("contain", "Remove")
            .get(".shopping_cart_link")
            .should("contain", "1")

            // Add more products to the cart
            .get('button[id="add-to-cart-sauce-labs-fleece-jacket"]')
            .click()
            .get('button[id="add-to-cart-sauce-labs-bolt-t-shirt"]')
            .click()

            // Check if the "Add to cart" button and cart icon have changed
            .get('button[id="remove-sauce-labs-fleece-jacket"]')
            .should("contain", "Remove")
            .get('button[id="remove-sauce-labs-bolt-t-shirt"]')
            .should("contain", "Remove")
            .get(".shopping_cart_link")
            .should("contain", "3")

            // Remove one item from the cart
            .get('button[id="remove-sauce-labs-bolt-t-shirt"]')
            .click()

            // Check if the "Add to cart" button and cart icon have changed
            .get('button[id="add-to-cart-sauce-labs-bolt-t-shirt"]')
            .should("contain", "Add to cart")
            .get(".shopping_cart_link")
            .should("contain", "2")

            // Go to the cart
            .get(".shopping_cart_link")
            .click()

            // Check if items are in the cart
            .url()
            .should("include", "/cart.html")
            .get(".cart_item")
            .should("have.length", 2)

            // Remove from the cart
            .get('button[id="remove-sauce-labs-fleece-jacket"]')
            .click()
            .get(".cart_item")
            .should("have.length", 1)
            .get(".shopping_cart_link")
            .should("contain", "1")

            // Complete the order
            .get("#checkout")
            .click()
            .url()
            .should("include", "/checkout-step-one.html")

            .get("#first-name")
            .type("Jan")
            .get("#last-name")
            .type("Kowalski")
            .get("#postal-code")
            .type("12-345")
            .get("#continue")
            .click()
            .url()
            .should("include", "/checkout-step-two.html")

            .get("#finish")
            .click()
            .url()
            .should("include", "/checkout-complete.html")
            .get(".complete-header")
            .should("contain", "Thank you for your order!")
            .get(".shopping_cart_link")
            .should("contain", "")
            .get("#back-to-products")
            .click()

            // Log out the user
            .get(".bm-burger-button")
            .click()
            .get("#logout_sidebar_link")
            .click()
            .url()
            .should("eq", "https://www.saucedemo.com/");
    });

    // It doesn't pass
    it("Problem user", () => {
        // Enter login credentials
        cy.get("#user-name")
            .type("problem_user")
            .get("#password")
            .type("secret_sauce")

            // Click the login button
            .get("#login-button")
            .click()

            // Check if the user has logged in successfully
            .url()
            .should("include", "/inventory.html")
            .get(".title")
            .should("contain", "Products")

            // Browse selected products
            .get("#item_4_title_link")
            .click()
            .get(".inventory_details_name")
            .should("contain", "Sauce Labs Backpack")
            .get('button[id="back-to-products"]')
            .click()

            .get("#item_1_title_link")
            .click()
            .get(".inventory_details_name")
            .should("contain", "Sauce Labs Bolt T-Shirt")
            .get('button[id="back-to-products"]')
            .click()

            // Add a product to the cart
            .get('button[id="add-to-cart-sauce-labs-backpack"]')
            .click()

            // Check if the "Add to cart" button and cart icon have changed
            .get('button[id="remove-sauce-labs-backpack"]')
            .should("contain", "Remove")
            .get(".shopping_cart_link")
            .should("contain", "1")

            // Add more products to the cart
            .get('button[id="add-to-cart-sauce-labs-fleece-jacket"]')
            .click()
            .get('button[id="add-to-cart-sauce-labs-bolt-t-shirt"]')
            .click()

            // Check if the "Add to cart" button and cart icon have changed
            .get('button[id="remove-sauce-labs-fleece-jacket"]')
            .should("contain", "Remove")
            .get('button[id="remove-sauce-labs-bolt-t-shirt"]')
            .should("contain", "Remove")
            .get(".shopping_cart_link")
            .should("contain", "3")

            // Remove one item from the cart
            .get('button[id="remove-sauce-labs-bolt-t-shirt"]')
            .click()

            // Check if the "Add to cart" button and cart icon have changed
            .get('button[id="add-to-cart-sauce-labs-bolt-t-shirt"]')
            .should("contain", "Add to cart")
            .get(".shopping_cart_link")
            .should("contain", "2")

            // Go to the cart
            .get(".shopping_cart_link")
            .click()

            // Check if items are in the cart
            .url()
            .should("include", "/cart.html")
            .get(".cart_item")
            .should("have.length", 2)

            // Remove from the cart
            .get('button[id="remove-sauce-labs-fleece-jacket"]')
            .click()
            .get(".cart_item")
            .should("have.length", 1)
            .get(".shopping_cart_link")
            .should("contain", "1")

            // Complete the order
            .get("#checkout")
            .click()
            .url()
            .should("include", "/checkout-step-one.html")

            .get("#first-name")
            .type("Jan")
            .get("#last-name")
            .type("Kowalski")
            .get("#postal-code")
            .type("12-345")
            .get("#continue")
            .click()
            .url()
            .should("include", "/checkout-step-two.html")

            .get("#finish")
            .click()
            .url()
            .should("include", "/checkout-complete.html")
            .get(".complete-header")
            .should("contain", "Thank you for your order!")
            .get(".shopping_cart_link")
            .should("contain", "")
            .get("#back-to-products")
            .click()

            // Log out the user
            .get(".bm-burger-button")
            .click()
            .get("#logout_sidebar_link")
            .click()
            .url()
            .should("eq", "https://www.saucedemo.com/");
    });

    it("User with normal vs long time loading page", () => {
        // Add variables to measure login time
        let glitch = 0;
        let standard = 0;

        // Enter login credentials for an account with a glitch
        cy.get("#user-name")
            .type("performance_glitch_user")
            .get("#password")
            .type("secret_sauce")

            // Start measuring time
            .then(() => {
                glitch = performance.now();
            })

            // Click the login button
            .get("#login-button")
            .click()

            // Check if the user has logged in successfully and stop measuring time
            .url()
            .should("include", "/inventory.html")
            .get(".title")
            .should("contain", "Products")
            .then(() => {
                cy.log(`duration: ${performance.now() - glitch} ms`);
            })

            // Log out the user
            .get(".bm-burger-button")
            .click()
            .get("#logout_sidebar_link")
            .click()
            .url()
            .should("eq", "https://www.saucedemo.com/")

            // Enter standard user login credentials
            .get("#user-name")
            .type("standard_user")
            .get("#password")
            .type("secret_sauce")

            // Start measuring time
            .then(() => {
                standard = performance.now();
            })

            // Click the login button
            .get("#login-button")
            .click()

            // Check if the user has logged in successfully and stop measuring time
            .url()
            .should("include", "/inventory.html")
            .get(".title")
            .should("contain", "Products")
            .then(() => {
                cy.log(`duration: ${performance.now() - standard} ms`);
            })

            // Log out the user
            .get(".bm-burger-button")
            .click()
            .get("#logout_sidebar_link")
            .click()
            .url()
            .should("eq", "https://www.saucedemo.com/");
    });

    it("Locked out user", () => {
        // Enter login credentials
        cy.get("#user-name")
            .type("locked_out_user")
            .get("#password")
            .type("secret_sauce")

            // Click the login button
            .get("#login-button")
            .click()

            // Check if a message about a locked account appears
            .get(".error-message-container")
            .should("be.visible")
            .get(".error-message-container")
            .should("contain", "Epic sadface: Sorry, this user has been locked out.")

            // Check if error icons appear in the login and password fields
            .get(".error_icon")
            .should("be.visible")

            // Check if the user is not logged in
            .url()
            .should("not.include", "/index.html")
            .get("#user-name")
            .should("be.visible");
    });

    it("Incorrect input data", () => {
        // Login without entering username and password
        cy.get("#login-button")
            .click()

            // Check if a message about the required username appears
            .get(".error-message-container")
            .should("be.visible")
            .get(".error-message-container")
            .should("contain", "Epic sadface: Username is required")
            .url()
            .should("eq", "https://www.saucedemo.com/")

            // Login without entering password
            .get("#user-name")
            .type("standard_user")

            // Click the login button
            .get("#login-button")
            .click()

            // Check if a message about the required login or password appears
            .get(".error-message-container")
            .should("be.visible")
            .get(".error-message-container")
            .should("contain", "Epic sadface: Password is required")
            .url()
            .should("eq", "https://www.saucedemo.com/")

            // Clear input fields
            .get("#user-name")
            .clear()

            // Enter login credentials with an incorrect password
            .get("#user-name")
            .type("standard_user")
            .get("#password")
            .type("Tajne_hasło")

            // Click the login button
            .get("#login-button")
            .click()

            // Check if a message about incorrect username or password appears
            .get(".error-message-container")
            .should("be.visible")
            .get(".error-message-container")
            .should(
                "contain",
                "Epic sadface: Username and password do not match any user in this service"
            )

            // Check if error icons appear in the login and password fields
            .get(".error_icon")
            .should("be.visible")

            // Check if the user is not logged in
            .url()
            .should("not.include", "/index.html")
            .get("#user-name")
            .should("be.visible")

            // Clear input fields
            .get("#user-name")
            .clear()
            .get("#password")
            .clear()

            // Enter login credentials with an incorrect username
            .get("#user-name")
            .type("Pjoter")
            .get("#password")
            .type("secret_sauce")

            // Click the login button
            .get("#login-button")
            .click()

            // Check if a message about incorrect username or password appears
            .get(".error-message-container")
            .should("be.visible")
            .get(".error-message-container")
            .should(
                "contain",
                "Epic sadface: Username and password do not match any user in this service"
            )

            // Check if error icons appear in the login and password fields
            .get(".error_icon")
            .should("be.visible")

            // Check if the user is not logged in
            .url()
            .should("not.include", "/index.html")
            .get("#user-name")
            .should("be.visible")

            // Clear input fields
            .get("#user-name")
            .clear()
            .get("#password")
            .clear()

            // Enter incorrect login credentials
            .get("#user-name")
            .type("Pjoter")
            .get("#password")
            .type("Tajne_hasło")

            // Click the login button
            .get("#login-button")
            .click()

            // Check if a prompt about incorrect username or password appears
            .get(".error-message-container")
            .should("be.visible")
            .get(".error-message-container")
            .should(
                "contain",
                "Epic sadface: Username and password do not match any user in this service"
            )

            // Check if error icons appear in the login and password fields
            .get(".error_icon")
            .should("be.visible")

            // Check if the user is not logged
            .url()
            .should("not.include", "/index.html")
            .get("#user-name")
            .should("be.visible")

            // Clear input fields
            .get("#user-name")
            .clear()
            .get("#password")
            .clear();
    });
});
