	
	 function check(){
    	if(check1()&&check2()){
			return true;
		}else{
			return false;
		}
    }
	function check1() {
    	var doc1=document.form.text1.value;
        if(doc1!="徐志达"){
    	alert("请输入：徐志达");
		return false;	
    	}else{
    		return true;
    	}
    }
	function check2() {
    	var doc2=document.form.text2.value;
    	if(doc2!="123"){
    	alert("请输入ID：123");
		return false;	
    	}else{
    		return true;
    	}
    }