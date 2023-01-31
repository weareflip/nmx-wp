<?php
namespace App;

class AdminMenu
{
	public static function remove($names = [])
	{
		if (empty($names)) return;
		if (!is_array($names)) $names = [$names];

		global $menu;

		foreach ($names as $key => $name) {
			$names[$key] = __($name);
		}

		foreach ($menu as $menuKey => $menuItem) {
			if(empty($menuItem[0])) continue;

			foreach ($names as $nameKey => $name) {
				if(strpos($menuItem[0], $name) === false) continue;
				unset($menu[$menuKey]);
				unset($names[$nameKey]);
			}
		}
	}

	public static function removeSubPages($names = [])
	{
		if (empty($names)) return;

		global $submenu;

		foreach ($names as $set) {

			if (!is_array($set) || empty($set[0]) || empty($set[1])) {
				throw new \Exception('Reference to sub page must be an array');
			}

			$menuSlug = static::getMenuSlug(__($set[0]));
			$subMenu = __($set[1]);

			if (!$menuSlug || !isset($submenu[$menuSlug])) continue;

			foreach ($submenu[$menuSlug] as $i => $item) {
				if(strpos($item[0], $subMenu) === false) continue;
				unset($submenu[$menuSlug][$i]);
			}
		}
	}

	private static function getMenuSlug($name) {
		global $menu;

		foreach ($menu as $menuItem) {
			if($menuItem[0] !== $name) continue;
			return $menuItem[2];
		}

		return null;
	}
}