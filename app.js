new Vue({
    el: '#chart',
    data: {
        Items: []
    },
    mounted: function () {
        var self = this;
        // $.get("http://temper-onboarding-tool.dev/admin", function(data) {
        //     var json = $.parseJSON(data);
        // });

        $.getJSON("http://temper-onboarding-tool.dev/admin", {
            format: "json"
        }).done(function( data ) {
            var chart = new Highcharts.Chart(data);
        });
    }
});
