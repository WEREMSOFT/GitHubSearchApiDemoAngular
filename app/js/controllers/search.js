function SearchCtrl($scope, $http) {
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
  var CACHE_TIMEOUT = 60000; //cache expires after 1 minute
  vm.submit = function(){
      vm.loading = true;
      $http({
          method: 'GET',
          url: '/api/search/users?q=' + vm.query
      }).then(function successCallback(response) {
        vm.result = response.data.items;
        clearInterval(delayedCallFollowers);
        vm.loading = false;
        delayedCallFollowers = setTimeout(vm.getFollowers, 1000);
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
  // Get followers implents both. Cache in the frontend and in the backend
  vm.getFollowersForUSer = function(user){
      if(callCache[user.followers_url] != null
          && (callCache[user.followers_url].timeStamp - Date.now()) < CACHE_TIMEOUT
      )
      {
          console.log('cached');
          user.followers = callCache[user.followers_url].data;
          // Needed because angular can't tell if a variable was updated. We trigger the digest loop mannually.
          $scope.$apply();
          return;
      }

      $http({
          method: 'GET',
          url: '/api/users/' + user.login + '/followers'
      }).then(function successCallback(response) {
          console.log('not cached');
          callCache[user.followers_url] = {timeStamp: Date.now(), data: response.data};
          user.followers = response.data;
      }, function errorCallback(response) {
          console.error(response);
      });
  };
}

export default {
  name: 'SearchCtrl',
  fn: SearchCtrl
};
