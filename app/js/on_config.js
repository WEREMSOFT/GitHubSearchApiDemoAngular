function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
    'ngInject';

    if (process.env.NODE_ENV === 'production') {
        $compileProvider.debugInfoEnabled(false);
    }

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html',
            controller: 'ExampleCtrl as home',
            title: 'Home',
            views: {
                'sidebar': {
                    templateUrl: 'sidebar.html'
                },
                'header': {
                    templateUrl: 'header.html'
                },
                'footer': {
                    templateUrl: 'footer.html'
                },
                'content': {
                    templateUrl: 'home.html',
                    controller: 'SearchCtrl as search'
                },
            }
        });


    $urlRouterProvider.otherwise('/');

}

export default OnConfig;
