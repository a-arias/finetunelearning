FINETUNELEARNING AUTOMATION TESTS


In wdio.conf.js file configure the host of the Selenium Server `hostname` (default: localhost).  

If you don't want to start a Selenium Server, you can use Selenium Standalone from wdio (if you have JDK installed).  
So, you should uncomment the line 58 on `wdio.conf.js`.  
Then the tests run on your machine without a docker selenium.

Run e2e tests:

```bash
wdio wdio.conf.js
```