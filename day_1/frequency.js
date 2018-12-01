const reader = new FileReader();
readText = (that) => {

    if(that.files && that.files[0]){
        const reader = new FileReader();
        reader.onload = (e) => {  
            let output = e.target.result;

            //process text to show only lines with "@":				
            output = output.split("\n");

            const frequencyTotal = output.reduce((total, val) => total + parseInt(val), 0);
            document.getElementById('total').innerHTML = frequencyTotal;

            console.log(frequencyTotal);
        };//end onload()
        reader.readAsText(that.files[0]);
    }//end if html5 filelist support
} 