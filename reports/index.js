    var reporter =  require('cucumber-html-report')



    var options ={

        theme: 'bootstrap',
        jsonfile: 'reports/cucumber-html-report.json',
        output: 'reports/cucumber-html-report.json' ,
        reportSuiteAsScenarios: true,
        launchReport: false
    };

    reporter.generate(options);
    