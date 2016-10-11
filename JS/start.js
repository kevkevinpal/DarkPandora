var link = document.createElement('link');
link.href =  chrome.extension.getURL('darkpandora.css');
link.rel = 'stylesheet';
head = document.getElementsByTagName ("head")[0] || document.documentElement;
head.insertBefore(link, head.firstChild);


//This will disable the chrome popup for me dont mind :)
ChromeOptions options = new ChromeOptions();
options.addArguments("chrome.switches","--disable-extensions");
System.setProperty("webdriver.chrome.driver",(System.getProperty("user.dir") + "//src//test//resources//chromedriver_new.exe"));
driver = new ChromeDriver(options);