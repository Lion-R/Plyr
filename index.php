<?php
/*
Plugin Name: LCG Plyr
Plugin URI: https://www.github.com/lion-r/plyr
Description: LCG Plyr是一款简单、轻便的HTML5媒体播放器，支持主流浏览器。
Version: 1.6.2
Author: LCG
Author URI: https://www.lion-r.com
License: A "Slug" license name e.g. GPL2
*/

// 定义插件路径
 if( ! defined( 'PLYR_URL' ) )define( 'PLYR_URL', plugin_dir_url( __FILE__ ) );

// 调用插件文件
function themtuts_plyr_css_and_js_files() {
    echo "<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/plyr@3.6.8/dist/plyr.css?ver=3.6.8'>";
    echo "<script type='text/javascript' src='https://cdn.jsdelivr.net/npm/plyr@3.6.8/dist/plyr.js?ver=3.6.8'></script>";
    echo "<script> const player = new Plyr('#player');</script> ";
}

add_action( 'wp_footer', 'themtuts_plyr_css_and_js_files' );

//短代码
function themetuts_plyr_player($atts, $content=null) {
    extract(shortcode_atts(array("poster" => ''), $atts));
    $return = '<div class="plyr">';
    $return .= '<video width="100%" height="100%" poster="'.$poster.'" id="player" playsinline controls>';
    $return .= '<source src="'.$content.'" type="video/mp4">';
    $return .= '</video>';
    $return .= '<img src="" alt="" onerror="const player = new Plyr(\'#player\')">';
    $return .= '</div> ';
    return $return;
}

add_shortcode('plyr' , 'themetuts_plyr_player' );

//添加按钮功能
function plyr_tinymce_button() {
	if ( current_user_can( 'edit_posts' ) && current_user_can( 'edit_pages' ) ) {
		add_filter( 'mce_buttons', 'plyr_register_tinymce_button' );
		add_filter( 'mce_external_plugins', 'plyr_tinymce_button_script' );
	}
}

add_action( 'admin_init', 'plyr_tinymce_button' );

function plyr_register_tinymce_button( $buttons ) {
	array_push( $buttons, 'plyr_button' );
	return $buttons;
}

function plyr_tinymce_button_script( $plugin_array ) {
	$plugin_array['plyr_button_script'] =PLYR_URL. '/src/button.js';  // Change this to reflect the path/filename to your js file
	return $plugin_array;
}

//短代码使用示例
//[plyr poster="封面地址"]视频地址[/plyr]
?>
