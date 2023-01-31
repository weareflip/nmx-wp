<?php

namespace App;

class Assets
{
    private static $manifest;

    public static function style($name)
    {
        if ($file = self::getAsset($name, 'css')) {
            echo '<link rel="stylesheet" type="text/css" href="' . asset_path($file) . '">';
        }

    }

    public static function script($name, $defer = false)
    {
        if ($file = self::getAsset($name, 'js')) {
            echo '<script src="' . asset_path($file) . '"' . ($defer ? ' defer' : '') . '></script>';
        }
    }

    public static function getAsset($name, $extension)
    {
        $manifest = self::getManifest();
        $file = !empty($manifest[$name][$extension]) ? $manifest[$name][$extension] : false;

        if (!$file) {
            return false;
        }
        
        return $file;
    }

    private static function getManifest()
    {
        if(!isset(self::$manifest)) {

            $dir =  dirname(__DIR__) . '/dist/';
            if (file_exists($dir . 'manifest.json')) {
                self::$manifest = json_decode(file_get_contents($dir . 'manifest.json'), true);
            } else {
                self::$manifest = false;
            }
        }

        return self::$manifest;
    }
}
