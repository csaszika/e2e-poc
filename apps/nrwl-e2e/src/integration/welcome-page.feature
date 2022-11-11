Feature: Home page

  Background:
    Given I navigate to the Website

  Scenario: I want to verify content in Home Page
    Then Validate the menus in home page
      | menu_name  |
      | Enterprise |
      | Community  |
      | Nx Conf    |

  Scenario: I want to validate title of home page
    Then Validate the title after login
      | title |
      | Nx: Smart, Fast and Extensible Build System |

