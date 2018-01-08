$(function(){
	var $body=$('body');
	
	utils.search();
	
	$body.on('click','#addBtn',function(){
		utils.update();
	})
	
	$body.on('click','#updateBtn',function(){
		utils.update();
	})
	
	$body.on('click','#delBtn',function(){
		utils.del();
	})
	
	$body.on('click','#allChoose',function(){
		var $this=this;
		$('.choose').each(function(){
			if($this.checked){
				this.checked=true;
			}else{
				this.checked=false;
			}
		})
	})
	
})
