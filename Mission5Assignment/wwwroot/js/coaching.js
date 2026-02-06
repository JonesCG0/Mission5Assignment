$(document).ready(function () {
    $("#btnCalculate").on("click", function () {
        $("#hoursError").hide();

        var hoursRaw = $("#hoursInput").val();
        var hours = parseFloat(hoursRaw);

        if (isNaN(hours) || hours <= 0) {
            $("#totalOutput").val("");
            $("#hoursError").show();
            return;
        }

        var rate = parseFloat($("#rateInput").val());
        var total = hours * rate;

        $("#totalOutput").val(total.toFixed(2));
    });
});
