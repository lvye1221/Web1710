var box={
	init:function(opts){
		var self=this,
			$cover=$('<div class="cover"></div>').appendTo('body'),
			$box=$('<div class="box"><div class="box-hd"><span>'+opts.title+'</span></div><div class="box-bd"></div></div>').appendTo('body'),
			$close=$('<span class="close">X</span>').appendTo($box.find('.box-hd'));
		if(opts.del){
			$box.find('.box-bd').append('<p class="content">'+opts.content+'</p><div class="item item-btn clearfix"></div>');
			var $yes=$('<button class="btn okBtn" type="button">确认</button>').appendTo($box.find('.item-btn')),
				$no=$('<button class="btn canelBtn" type="button">取消</button>').appendTo($box.find('.item-btn'));
			self.del({box:$box,cover:$cover,yes:$yes,no:$no,callback:opts.callback})
		}else{
			$box.find('.box-bd').append(opts.content);
			if(opts.callback && typeof(opts.callback)==='function'){
				opts.callback($box,$cover);
			}
		}
		$box.css('margin-left',-($box.width()/2)+'px');
		$box.css('margin-top',-($box.height()/2)+'px');
		self.close({close:$close,box:$box,cover:$cover});
		return $box;
	},
	close:function(opts){
		opts.close.click(function(){
			opts.cover.remove();
			opts.box.remove();
		})
		opts.cover.click(function(){
			opts.cover.remove();
			opts.box.remove();
		})
	},
	del:function(opts){
		var self=this;
		opts.yes.click(function(){
			if(opts.callback && typeof(opts.callback)==='function'){
				opts.callback();
			}
			opts.cover.remove();
			opts.box.remove();
		});
		opts.no.click(function(){
			opts.cover.remove();
			opts.box.remove();
		})
	}
}
