<script type="text/javascript">
function submitOrder() {
    var cinnamonRolls = parseInt(document.getElementById("cinnamon-rolls").value);
    var flavoredRolls = parseInt(document.getElementById("flavored-rolls").value);
    var mixedDozens = parseInt(document.getElementById("mixed-dozens").value);
    var miniRollsCinnamon = parseInt(document.getElementById("mini-rolls-cinnamon").value);
    var miniRollsFlavored = parseInt(document.getElementById("mini-rolls-flavored").value);
    var cookieType = document.getElementById("cookies").value;
    var cookieQuantity = parseInt(document.getElementById("cookie-quantity").value);
    var totalCost = 0;
    var errorMessage = "";
    if (cinnamonRolls > 0) {
        if (cinnamonRolls % 12 === 0) {
            totalCost += cinnamonRolls / 12 * 20;
        } else {
            totalCost += cinnamonRolls * 2;
        }
    }

    if (flavoredRolls > 0) {
        if (flavoredRolls % 12 === 0) {
            totalCost += flavoredRolls / 12 * 25;
        } else {
            totalCost += flavoredRolls * 2.5;
        }
    }

    if (mixedDozens > 0) {
        totalCost += mixedDozens * 25;
    }

    if (miniRollsCinnamon > 0) {
        totalCost += miniRollsCinnamon * 20;
    }

    if (miniRollsFlavored > 0) {
        totalCost += miniRollsFlavored * 25;
    }

    if (cookieType !== "" && cookieQuantity > 0) {
        totalCost += cookieQuantity * 10;
    } else if (cookieQuantity > 0) {
        errorMessage += "Please select a cookie type.";
    }

    if (totalCost === 0) {
        errorMessage += "Please select at least one item to order.";
    }

    if (errorMessage !== "") {
        document.getElementById("error-message").innerHTML = "<p class=\"error\">" + errorMessage + "</p>";
        return false;
    }

    alert("Thank you for your order. Your total cost is $" + totalCost.toFixed(2) + ".");
    return true;
}

var checkList = document.getElementById('list1');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
  if (checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
  else
    checkList.classList.add('visible');
}
</script>
