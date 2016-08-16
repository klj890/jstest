$(function() {
        // 定义模型类
        window.Test = Backbone.Model.extend({
                defaults: {
                        content: ""
                }
        });
        // 创建集合模型类
        window.TestList = Backbone.Collection.extend({
                model: Test
        });
        // 向模型添加数据
        var data = new TestList({
                content: "hello,backbone!"
        });
        // 创建View对象
        window.TestView = Backbone.View.extend({
                el: $("body"),
                initialize: function() {
                        $("#divTip").html(data.models[0].get("content"));
                }
        });
        //实例化View对象
       window.App = new TestView;
});
