(function () {
  'use strict';

  angular.module('quizzer')
    .controller('AboutController', AboutController);

  function AboutController() {
    var vm = this;

    vm.message = "Boy it is hot!";

  }

  console.log("Hello About");
}());