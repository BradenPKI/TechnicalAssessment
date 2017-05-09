export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('test01', {
      url: '/test01',
      component: 'test01'
    })
    .state('test02', {
      url: '/test02',
      component: 'test02'
    });

  $translateProvider.translations('en', {
    OPEN_A_CHEQING_ACCOUNT: 'Open a chequing account',
    OPEN_A_SAVINGS_ACCOUNT: 'Open a savings account',
    OPEN_A_US_DOLLAR_ACCOUNT: 'Open a U.S. Dollar account',
    REVIEW_MY_EVERYDAY_BANKING_NEEDS: 'Review my everyday banking needs',
    SWITCH_TO_TD: 'Switch to TD',
    APPLY_FOR_OVERDRAFT_PROTECTION: 'Apply for Overdraft Protection',

  });
  
  $translateProvider.translations('fr', {
    OPEN_A_CHEQING_ACCOUNT: 'lorem ipsum 1',
    OPEN_A_SAVINGS_ACCOUNT: 'lorem ipsum 2',
    OPEN_A_US_DOLLAR_ACCOUNT: 'lorem ipsum 3',
    REVIEW_MY_EVERYDAY_BANKING_NEEDS: 'lorem ipsum 4',
    SWITCH_TO_TD: 'lorem ipsum 5 ',
    APPLY_FOR_OVERDRAFT_PROTECTION: 'lorem ipsum 6',
  });

  $translateProvider.preferredLanguage('en');
}
