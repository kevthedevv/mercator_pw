class MyReporter {
    onBegin(config, suite) {
      // for (const key in suite.allTests()) {
      //   console.log(`${key}: ${suite.allTests()[key]}`);
      // }
     // console.log(suite.allTests().parent);
     console.log('Descript title:',suite.suites[0].suites[0].suites[0].title)
      console.log(`Starting the run with ${suite.allTests().length} tests`);
      console.log('******')
    }
  
    onTestEnd(test, result) {
      console.log(suite.allTests().parent);
      console.log(`Finished test ${test.title} | Status: ${result.status}`);
    }
  
    onEnd(result) {
      console.log(`Finished the run: ${result.status}`);
    }
  }
  
  module.exports = MyReporter;