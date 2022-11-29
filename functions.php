<?php

/* ※ 子テーマのfunctions.phpは、親テーマのfunctions.phpより先に読み込まれることに注意してください。 */


/**
 * 親テーマのfunctions.phpのあとで読み込みたいコードはこの中に。
 */
add_filter('after_setup_theme', function(){
    
}, 11);

/**
 * 子テーマでのファイルの読み込み関数
 *   $query : 各ファイルに付与するクエリ文字列。
 */
add_action('wp_enqueue_scripts', function() {
    
    //$query = '1.0';
    $query = date('Ymdgis');  /*子テーマのstyle.cssのブラウザキャッシュを無効にする。 */

    /* 子テーマのstyle.css読み込み */
    wp_enqueue_style( 'child_style', get_stylesheet_directory_uri() .'/style.css', [], $query );

    /* その他の読み込みファイルはこの下に記述 */
    wp_enqueue_script('base64.min', get_stylesheet_directory_uri() . '/js/assets/base64.min.js', array(), '', true);

}, 11);

//bodyタグ直前で読み込む
add_action('wp_footer', function() {
    wp_enqueue_script('runtime.458556a34b891ea32398', get_stylesheet_directory_uri() . '/js/runtime.damage.calculation.js', array(), '', true);
    wp_enqueue_script('polyfills.4816310f28d843d175ae', get_stylesheet_directory_uri() . '/js/polyfills.damage.calculation.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.2.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.2.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.3.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.3.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.4.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.4.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.5.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.5.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.6.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.6.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.7.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.7.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.8.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.8.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.9.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.9.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.10.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.10.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.11.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.11.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.12.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.12.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.13.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.13.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.14.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.14.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.15.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.15.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.16.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.16.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.17.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.17.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.18.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.18.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.19.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.19.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.20.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.20.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.21.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.21.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.22.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.22.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.23.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.23.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.24.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.24.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.25.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.25.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.26.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.26.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.27.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.27.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.28.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.28.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.29.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.29.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.30.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.30.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.31.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.31.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.32.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.32.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.33.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.33.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.34.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.34.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.35.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.35.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.36.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.36.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.37.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.37.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.38.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.38.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.39.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.39.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.40.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.40.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.41.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.41.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.42.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.42.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.43.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.43.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.44.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.44.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.45.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.45.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.46.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.46.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.47.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.47.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.48.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.48.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.49.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.49.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.50.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.50.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.51.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.51.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.52.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.52.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.53.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.53.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.54.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.54.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.55.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.55.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.56.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.56.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.57.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.57.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.58.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.58.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.59.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.59.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.60.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.60.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.61.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.61.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.62.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.62.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.63.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.63.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.64.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.64.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.65.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.65.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.66.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.66.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.67.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.67.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.68.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.68.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.69.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.69.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.70.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.70.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.71.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.71.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.72.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.72.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.73.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.73.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.74.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.74.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.75.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.75.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.76.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.76.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.77.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.77.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.78.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.78.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.79.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.79.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.80.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.80.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.81.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.81.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.82.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.82.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.83.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.83.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.84.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.84.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.85.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.85.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.86.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.86.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.87.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.87.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.88.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.88.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.89.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.89.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.90.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.90.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.91.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.91.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.92.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.92.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.93.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.93.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.94.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.94.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.95.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.95.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.96.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.96.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.97.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.97.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.98.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.98.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.99.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.99.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.100.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.100.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.101.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.101.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.102.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.102.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.103.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.103.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.104.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.104.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.105.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.105.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.106.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.106.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.107.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.107.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.108.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.108.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.109.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.109.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.110.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.110.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.111.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.111.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.112.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.112.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.113.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.113.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.114.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.114.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.115.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.115.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.116.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.116.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.117.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.117.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.118.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.118.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.119.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.119.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.120.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.120.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.121.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.121.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.122.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.122.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.123.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.123.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.124.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.124.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.125.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.125.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.126.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.126.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.127.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.127.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.128.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.128.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.129.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.129.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.130.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.130.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.131.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.131.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.132.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.132.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.133.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.133.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.134.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.134.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.135.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.135.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.136.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.136.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.137.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.137.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.138.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.138.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.139.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.139.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.140.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.140.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.141.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.141.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.142.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.142.js', array(), '', true);
    wp_enqueue_script('main.damage.calculation.143.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.143.js', array(), '', true);
    //wp_enqueue_script('main.damage.calculation.1.js', get_stylesheet_directory_uri() . '/js/main.damage.calculation.1.js', array(), '', true);
    wp_enqueue_style('styles.346889c75a86a9ece3cc', get_stylesheet_directory_uri() . '/css/styles.damage.calculation.css');
}, 11);

function meta_headcustomtags() {
$headcustomtag = <<<EOM

<base href="C:\\xampp\htdocs\Appdate\wp-content\\themes\swell_child">

EOM;
echo $headcustomtag;
}
add_action( 'wp_head', 'meta_headcustomtags', 99);
