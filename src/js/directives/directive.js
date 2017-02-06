myApp.directive('rnStepper', function () {
    return {
        restrict: 'AE',
        scope: {},
        replace:true,
        template: '<div class="box swiper-container"><ul class="swiper-wrapper"><li class="swiper-slide" ng-repeat="item in Data"><img ng-src="{{item.src}}"/></li></ul><div class="swiper-pagination"></div></div>',
        controller:["$scope","$http",function($scope,$http){
            $scope.Data = [
                { src: "http://17haidai.cn/asd/bigType/354.jpg", desp: "港澳台" },
                { src: "http://17haidai.cn/asd/bigType/288.jpg", desp: "泰国" },
                { src: "http://17haidai.cn/asd/bigType/156.jpg", desp: "美国" },
                { src: "http://17haidai.cn/asd/bigType/175.jpg", desp: "英国" },
                { src: "http://17haidai.cn/asd/bigType/176.jpg", desp: "德国" },
                { src: "http://17haidai.cn/asd/bigType/177.jpg", desp: "意大利" },
                { src: "http://17haidai.cn/asd/bigType/178.jpg", desp: "法国" },
            ];
        }],
        link: function (scope, iElement, iAttrs, ngModelController) {
            var doc=document.getElementById("box")
            var swiper = new Swiper('.swiper-container',{
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop:true,
                autoplay : 5000,
                autoplayDisableOnInteraction : false,
                observer:true,
                observeParents:true,
            });
        }
    };
});