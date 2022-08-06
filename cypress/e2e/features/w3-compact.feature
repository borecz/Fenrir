Feature: Testing of a selection of w3c.org pages

    Scenario Outline: [2] Checking for response codes from the page (without actual navigation)
        Given I request <page> page
        Then the response code is one within the range
            | min | max |
            | 200 | 300 |

        Given I navigate to <page> page
        Then there are no console errors on page load
        * all links on the page go to another live page
        * all anchor links work as expected

        Examples:
            | page                                |
            | "standards/badpage"                 |
            | "standards/webofdevices/multimodal" |
            | "standards/webdesign/htmlcss"       |