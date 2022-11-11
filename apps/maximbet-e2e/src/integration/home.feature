Feature: Home page

  Background:
    Given I navigate to the Website

  Scenario: I want to verify content in Home Page
    Then Validate the menus in home page
      | menu_name |
      | Home |
      | Blogs |
      | Contact Us |

  Scenario: I want to validate title of home page
    Then Validate the title after login
      | title |
      | About Us - QAAutomationLabs |

