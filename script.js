/**
 * Created by thabo.ngubane on 20.06.2017.
 */

var documentState = document.readyState;
if( documentState === "complete") {
	alert('Loaded script');
	console.log(myF(12));
}
function myF(par) {
    if(par < 25 ) {
        console.log("A young man");
    } else {
        console.log("A true man");
    }
}