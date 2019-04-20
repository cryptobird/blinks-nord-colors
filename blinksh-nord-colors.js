//Polar Night
nord0  = '#2E3440';
nord1  = '#3b4252';
nord2  = '#434C5E';
nord3  = '#4C566A';

//Snow Storm
nord4  = '#D8DEE9';
nord5  = '#E5E9F0';
nord6  = '#ECEFF4';

//Frost
nord7  = '#8FBCBB';
nord8  = '#88C0D0';
nord9  = '#81A1C1';
nord10 = '#5E81AC';

//Aurora
nord11 = '#BF616A';
nord12 = '#D08770';
nord13 = '#EBCB8B';
nord14 = '#A3BE8C';
nord15 = '#B48EAD';

colorsInOrder = [
	nord1, nord11, nord14, nord13, 
	nord9, nord15, nord8, nord5, 
	nord3, nord11, nord14, nord13,
	nord9, nord15, nord7, nord6,
];
t.prefs_.set('color-palette-overrides', colorsInOrder);
t.prefs_.set('cursor-color', nord4);
t.prefs_.set('foreground-color', nord4);
t.prefs_.set('background-color', nord0);
