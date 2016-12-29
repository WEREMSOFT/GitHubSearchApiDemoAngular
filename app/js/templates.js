angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('footer.html','<footer class="main-footer">\n    <!-- To the right -->\n    <div class="pull-right hidden-xs">\n        Anything you want\n    </div>\n    <!-- Default to the left -->\n    <strong>Copyright &copy; 2016 <a href="#">WeremSoft</a>.</strong> All rights reserved.\n</footer>');
$templateCache.put('header.html','<header class="main-header">\n\n    <!-- Logo -->\n    <a href="#" class="logo">\n        <!-- mini logo for sidebar mini 50x50 pixels -->\n        <span class="logo-mini"><b>T</b>gfy</span>\n        <!-- logo for regular state and mobile devices -->\n        <span class="logo-lg"><b>Tagg</b>ify</span>\n    </a>\n\n    <!-- Header Navbar -->\n    <nav class="navbar navbar-static-top" role="navigation">\n        <!-- Sidebar toggle button-->\n        <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">\n            <span class="sr-only">Toggle navigation</span>\n        </a>\n    </nav>\n</header>');
$templateCache.put('home.html','<div class="error-page">\n        <form class="search-form" ng-submit="search.submit()">\n            <div class="input-group">\n                <input type="text" name="search" class="form-control" ng-change="search.queryChanged()" ng-model="search.query" placeholder="Search">\n\n                <div class="input-group-btn">\n                    <button type="submit" name="submit" class="btn btn-warning btn-flat"><i class="fa fa-search"></i>\n                    </button>\n                </div>\n            </div>\n        </form>\n    <div class="box">\n        <div class="box-header">\n            <h3 class="box-title">Simple Full Width Table</h3>\n        </div>\n        <!-- /.box-header -->\n        <div class="box-body no-padding">\n            <table class="table">\n                <tbody>\n                <tr>\n                    <th>User</th>\n                    <th>Followers</th>\n                </tr>\n                <tr ng-repeat="item in search.result">\n                    <td><div class="pull-left image"><img src="{{item.avatar_url}}" class="img-circle table-image" alt="User Image"><br>{{item.login}}</div>\n                        </td>\n                    <td>\n                        <ul ng-show="item.followers != null && item.followers.length > 0">\n                            <li ng-repeat="follower in item.followers">{{follower.login}}</li>\n                        </ul>\n                        <div ng-hide="item.followers != null && item.followers.length > 0">No Followers</div>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n        <!-- /.box-body -->\n    </div>\n</div>\n');
$templateCache.put('sidebar.html','<aside class="main-sidebar">\n\n    <!-- sidebar: style can be found in sidebar.less -->\n    <section class="sidebar">\n\n        <!-- Sidebar user panel (optional) -->\n        <div class="user-panel">\n            <div class="pull-left image">\n                <img src="misc/dist/img/WSoft.jpeg" class="img-circle" alt="User Image">\n            </div>\n            <div class="pull-left info">\n                <p>Pablo Weremczuk</p>\n                <!-- Status -->\n                <a href="#"><i class="fa fa-circle text-success"></i> Available</a>\n            </div>\n        </div>\n\n        <!-- Sidebar Menu -->\n        <ul class="sidebar-menu">\n            <li class="header">HEADER</li>\n            <!-- Optionally, you can add icons to the links -->\n            <li class="active"><a href="#"><i class="fa fa-link"></i> <span>Link</span></a></li>\n            <li><a href="#"><i class="fa fa-link"></i> <span>Another Link</span></a></li>\n            <li class="treeview">\n                <a href="#"><i class="fa fa-link"></i> <span>Multilevel</span>\n                    <span class="pull-right-container">\n              <i class="fa fa-angle-left pull-right"></i>\n            </span>\n                </a>\n                <ul class="treeview-menu">\n                    <li><a href="#">Link in level 2</a></li>\n                    <li><a href="#">Link in level 2</a></li>\n                </ul>\n            </li>\n        </ul>\n        <!-- /.sidebar-menu -->\n    </section>\n    <!-- /.sidebar -->\n</aside>');
$templateCache.put('directives/example.html','<div class="example-directive">\n  <h1>Directive title: {{title}}</h1>\n  <p>This is an example of a directive, click me!</p>\n</div>\n');}]);