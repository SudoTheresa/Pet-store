//Reference: got additional help with code from https://www.smashingmagazine.com/2019/08/shopping-cart-html5-web-storage/ and localStorage.pdf from additional resources by Grant

window.load=doShowAll();

function doShowAll() {

        var key = "";
        var list = "<tr><th>Product</th><th>Quantity</th></tr>\n";
        var i = 0;
        for (i = 0; i <= localStorage.length-1; i++) {
            key = localStorage.key(i);
            list += "<tr><td>" + key + "</td>\n<td>"
                    + localStorage.getItem(key) + "</td></tr>\n";
        }
        
        if (list == "<tr><th>Product</th><th>Quantity</th></tr>\n") {
            list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
        }
        document.getElementById('list').innerHTML = list;

}

function ModifyItem() {
    var name1 = document.forms.WishList.name.value;
    var data1 = document.forms.WishList.data.value;

		if (localStorage.getItem(name1) !=null)
		{
		  localStorage.setItem(name1,data1);
		  document.forms.WishList.data.value = localStorage.getItem(name1);
		}

    doShowAll();
}

function SaveItem() {

    var name = document.forms.WishList.name.value;
    var data = document.forms.WishList.data.value;
    localStorage.setItem(name, data);
    doShowAll();

}

function RemoveItem()
{
	var name=document.forms.WishList.name.value;
	document.forms.WishList.data.value=localStorage.removeItem(name);
	doShowAll();
}
function ClearAll() {
    localStorage.clear();    
	window.location.href=window.location.href;
	
}


