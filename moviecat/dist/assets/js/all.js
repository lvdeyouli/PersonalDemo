!function(o){var e=o.module("moviecat",["moviecat.home","moviecat.detail","movie_list","ngRoute"]);e.config(["$locationProvider",function(o){o.hashPrefix("")}]),e.controller("searchCtrl",["$scope","$window",function(o,e){o.query=function(){alert(0),e.location.hash="#/search?q="+o.keyWords}}])}(angular);
angular.module("moviecat.home",["ngRoute"]).config(["$routeProvider",function(e){e.when("/home",{templateUrl:"./home/home.html"}).when("/",{redirectTo:"/in_theaters"})}]);
!function(o){var t=o.module("moviecat.detail",["ngRoute","hm"]);t.config(["$routeProvider",function(o){o.when("/detail/:id",{templateUrl:"./detail/detail.html",controller:"detailCtrl"})}]),t.controller("detailCtrl",["$scope","$routeParams","hmjsonp",function(o,t,a){o.isShow=!0;var e=t.id;a.jsonp({url:"http://api.douban.com/v2/movie/subject/"+e,params:{},callback:function(t){o.movie=t,o.isShow=!1,o.$apply()}})}])}(angular);
!function(e){var o=e.module("movie_list",["hm","ngRoute"]);o.config(["$routeProvider",function(e){e.when("/:movieType/:page?",{templateUrl:"./movie_list/movie_list.html",controller:"movie_listCtrl"})}]),o.controller("movie_listCtrl",["$scope","$http","$routeParams","$route","$window","hmjsonp",function(e,o,t,a,i,n){e.isShow=!0,e.pageIndex=(t.page||"1")-0,e.pageSize=10,n.jsonp({url:"http://api.douban.com/v2/movie/"+t.movieType,params:{count:e.pageSize,start:(e.pageIndex-1)*e.pageSize,q:t.q},callback:function(o){console.log(o),e.movies=o,e.pageCount=i.Math.ceil(o.total/e.pageSize),e.isShow=!1,e.$apply()}}),e.getPage=function(o){o<1||o>e.pageCount||a.updateParams({page:o})}}])}(angular);
!function(n){var a=n.module("hm",[]);a.service("hmjsonp",["$window",function(n){this.jsonp=function(a){var c=a.url+"?";for(var r in a.params)c+=r+"="+a.params[r]+"&";var i="jsonp_"+Math.random().toString().slice(2);n[i]=a.callback;var t=n.document.createElement("script");t.src=c+"callback="+i,n.document.body.appendChild(t)}}]),a.directive("myActive",function(){return{restrict:"A",link:function(n,a,c){a.on("click",function(){a.parent().children().removeClass("active"),a.addClass("active")})}}})}(angular);