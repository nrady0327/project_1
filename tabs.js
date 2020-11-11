$(document).ready(function ()
{
//jquery and calculations
	$("form").submit(calculateButton);
	function calculateButton(event) {
event.preventDefault();

//make a subtotal variable
		var subtotal = 0;
//make a veggie name variable
		var veggieName = "";
		//make a meat name variable
		var meatName = "";
		var name = "";
		var address = "";
		var phone = "";
		var size = "";
		var crust = "";
		// ask jquery for all selected size checkboxes
		var selectedBox = $("input[name=size]:checked");
		// ask jquery for all selected soap checkboxes
		var selectedBox = $("input[name=crust]:checked");
		// ask jquery for all selected veggie checkboxes
		var selectedBox = $("input[name=veggie]:checked");
		// ask jquery for all selected meat checkboxes
		var selectedBox = $("input[name=meat]:checked");

		selectedBox.each(function ()
		{
			subtotal += $(this).data("price");
			veggieName += $(this).val();
			meatName += $(this).val();
			veggieName +=" ";
			meatName += " ";

		});
		//calculations
		var calcVeggie = $("#veggieGroup:checked")*1.00;
		var calcMeat = $("#meatGroup:checked")*1.50;
		var tax = subtotal *0.051
		var taxAndSub = tax+subtotal
		var deliveryFee = 2;
		var grandTotal = subtotal+calcMeat+calcVeggie+taxAndSub+deliveryFee;

		//output name
		$("#nameTextOutput").text(name);

		//output address
		$("#addressTextOutput").text(address);

		//output phone
		$("#phoneOuput").text(phone);

		//output size
		$("#sizeOutput").text(size);

		//output crust
		$("#crustOutput").text(crust);

		//output veggie toppings
		$("#veggieOutput").text(veggieName);

		//output meat toppings
		$("#meatOutput").text(meatName);

		//output subtotal
		$("#subTotalOutput").text(subtotal.toFixed(2));

		//output tax
		$("#taxOutput").text(tax.toFixed(1));

		//output grand total
		$("#grandTotalOutput").text(grandTotal.toFixed(2));


	}

// Run the init function when page finishes loading
$(init);

function init()
{
	// Get all of the divs that contain the tab contents
	var tabContainers = $(".divTab");

	// Hide them all
	tabContainers.hide();
	
	// Get rid of everything except the first div, then show it
	tabContainers.first().show();

	// Get all anchors that are the clickable tabs
	var tabAnchors = $(".navTab");
	
	// Tell all tabs to run doTabClick when they are clicked
	tabAnchors.click(doTabClick);
	
	// Programmatically perform a "click" on the first tab
	tabAnchors.first().click();
}

function doTabClick()
{
	// Get all of the divs that contain the tabs' contents
	var tabContainers = $(".divTab");
	
	// Hide them all
	tabContainers.hide();
	
	// The hash is the part after the # in the href attribute
	tabContainers.filter(this.hash).show();
	
	// Get all anchors that are the clickable tabs
	var tabAnchors = $(".navTab");
	
	// Remove the "selected" class from all tabs
	tabAnchors.removeClass("selected");
	
	// Add the "selected" class to just the tab that was clicked on
	$(this).addClass("selected");
	
	// Don't try to follow the link (because we're using <a> tags)
	return false;	
}
});


