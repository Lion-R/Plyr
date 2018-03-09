(function() {
	tinymce.create('tinymce.plugins.plyrButtons', {
		init: function( editor, url ) {
			editor.addButton( 'plyr_button', {
                text: 'PLYR',
				title: 'Plyr',
				icon: false,
				onclick: function() {
					editor.windowManager.open({
						title: 'Plyr播放器',
						body: [
                        {
                            type: 'textbox',
                            name: 'poster',
                            label: '封面图像',
                            value: '',
                            classes: 'plyr_input_image',
                        },
                        {
                            type: 'button',
                            name: 'plyr_upload_button',
                            label: '',
                            text: '上传图像',
                            classes: 'plyr_upload_button',
                        },
                        {
							type: 'textbox',
							name: 'video',
							label: 'MP4地址'
						}
                        ],
						onsubmit: function( e ) {
							editor.insertContent( '[plyr poster="' + e.data.poster + '" ]' + e.data.video + '[/plyr]' );
						}
					});
				}
			});
		},
		createControl: function( n, cm ) {
			return null;
		}
	});
	tinymce.PluginManager.add( 'plyr_button_script', tinymce.plugins.plyrButtons );
})();
//上传按钮调用多媒体
jQuery(document).ready(function($){
    $(document).on('click', '.mce-plyr_upload_button', upload_image_tinymce);
    function upload_image_tinymce(e) {
        e.preventDefault();
        var $input_field = $('.mce-plyr_input_image');
        var custom_uploader = wp.media.frames.file_frame = wp.media({
            title: '添加图像',
            button: {
                text: '添加图像'
            },
            multiple: false
        });
        custom_uploader.on('select', function() {
            var attachment = custom_uploader.state().get('selection').first().toJSON();
            $input_field.val(attachment.url);
        });
        custom_uploader.open();
    }
});
