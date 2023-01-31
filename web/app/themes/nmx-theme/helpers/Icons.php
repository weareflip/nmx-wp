<?php
namespace App;

use DirectoryIterator;

class Icons
{
    static $icons;

    public static function get()
    {
        if(self::$icons) return self::$icons;

        $iconsDirectory = get_template_directory().'/assets/icons';
        $icons = [];
        foreach (new DirectoryIterator($iconsDirectory) as $fileInfo) {
            if ($fileInfo->isDot()) { continue; }
            if ($fileInfo->getExtension() != 'svg') { continue; }

            $iconClass = str_replace('.svg', '', $fileInfo->getFilename());
            $iconName = ucwords(str_replace('-', ' ', $iconClass));
            $icons[$iconClass] = $iconName;
        }

        self::$icons = $icons;
        return $icons;
    }

}