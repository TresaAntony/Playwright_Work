function launchBrowser(bName) {
    const browserName = bName.toLowerCase();
    console.log(browserName)
    if (browserName === "chrome") {
        console.log("It is a", browserName, "browser")
    } else if (browserName === "firefox") {
        console.log("It is a", browserName, "browser")
    } else if (browserName === "safari") {
        console.log("It is a", browserName, "browser")
    } else {
        console.log("Browser is Undefined")
    }
}


function runTests(testType) {
    switch (testType) {
        case 'smoke':
            console.log("Smoke testing")
            break;
        case 'sanity':
            console.log("Sanity testing")
            break;

        case 'Regression':
            console.log("Regression testing")
            break;

        default:
            console.log("Regression testing")
            break;

    }
}

launchBrowser("FireFox")
runTests('Regression')