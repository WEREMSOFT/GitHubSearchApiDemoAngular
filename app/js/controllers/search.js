function SearchCtrl($http) {
  'ngInject';
  // ViewModel
  const vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
  vm.number = 1234;
  vm.query = '';
  vm.result = [];
  var delayedCall = null;
  var delayedCallFollowers = null;
  var callCache = [];
  vm.submit = function(){
      $http({
          method: 'GET',
          url: '/api/search/users?q=' + vm.query
      }).then(function successCallback(response) {
        vm.result = response.data.items;
        clearInterval(delayedCallFollowers);
        delayedCallFollowers = setTimeout(vm.getFollowers, 3000);
        console.log(vm.result);
      }, function errorCallback(response) {
        console.error(response);
      });
  };

  vm.queryChanged = function(){
      if(vm.query.length < 3) return;
      clearInterval(delayedCall);
      delayedCall = setTimeout(vm.submit, 1000);
  };

  vm.getFollowers = function(){
      for(let i in vm.result){
          let user = vm.result[i];
          vm.getFollowersForUSer(user);
      }
  };

  vm.getFollowersForUSer = function(user){
      if(callCache[user.followers_url] != null)
      {
          user.followers = callCache[user.followers_url];
          return;
      }

      $http({
          method: 'GET',
          url: user.followers_url
      }).then(function successCallback(response) {
          callCache[user.followers_url] = response.data;
          user.followers = response.data;
          console.log(response);
      }, function errorCallback(response) {
          console.log(response);
          console.log(user.login);
      });
  };
}

export default {
  name: 'SearchCtrl',
  fn: SearchCtrl
};
