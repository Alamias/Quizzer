(function () {
  'use strict';

  angular.module('hello2')
    .controller('AboutController', AboutController);

  function AboutController() {
    var vm = this;

    vm.message = "Boy it is hot!";

  }

  console.log("Hello About");
}());