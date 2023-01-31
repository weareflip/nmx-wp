<?php
namespace Theme;
class Options
{
    
    public static function get($fields = [], $prefix = '')
    {
        if(empty($fields)) return [];
        if(!array($fields)) $fields = [$fields];

        $options = [];
        foreach ($fields as $field) {
            $options[$field] = get_field($prefix . $field, 'option');
        }

        return $options;
    }
}
