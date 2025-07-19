Feature: Login

  Scenario: Login exitoso
    Given que el usuario visita la página de login
    When ingresa el usuario "standard_user" y contraseña "secret_sauce"
    And hace clic en el botón de login
    Then debería ver la página de productos

    Scenario: Login error
    Given que el usuario visita la página de login
    When ingresa el usuario "standard_user" y contraseña "error"
    And hace clic en el botón de login
    Then debería ver error
