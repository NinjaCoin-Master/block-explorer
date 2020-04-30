var api = 'https://api.ninjanode.net';
var donationAddress = "";
var blockTargetInterval = 30; // enter the block interval in seconds
var coinUnits = 100;  // enter in the amount of atomic units in 1 coin, eg. 100 shells = 1 ninja
var totalSupply =  100000000000000; // enter the total supply in atomic units
var symbol = 'ninja'; // enter the coin's ticker
var refreshDelay = 30000;

// pools stats by MainCoins
var networkStat = {
 "ninja": [
           ["fastpool.xyz/ninja", "https://fastpool.xyz/api-ninja"],
           ["dyngepeng.zapto.org/ninja", "https://dyngepeng.zapto.org:3120"]
 ]
};

var networkStat2 = {
    "ninja": [
	[""]
 ]
};
