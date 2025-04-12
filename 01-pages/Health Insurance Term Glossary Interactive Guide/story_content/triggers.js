function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5zsoz99dfZ2":
        Script1();
        break;
      case "6bjLJPutsEC":
        Script2();
        break;
      case "6gfzbnPQXwK":
        Script3();
        break;
      case "67KdnhbVUR1":
        Script4();
        break;
      case "5ZpmQrxHp9Q":
        Script5();
        break;
      case "6ekuDn2z3gX":
        Script6();
        break;
      case "5Wo3jImgihD":
        Script7();
        break;
      case "6lMBTMeTviq":
        Script8();
        break;
      case "5xSKsueOdHO":
        Script9();
        break;
      case "5iptxxUvVsE":
        Script10();
        break;
      case "5dZM1Us9npU":
        Script11();
        break;
      case "5vnURFgojQk":
        Script12();
        break;
      case "69ZyODOp0M4":
        Script13();
        break;
      case "69rUULiKT14":
        Script14();
        break;
      case "6LbZWNuZRTc":
        Script15();
        break;
      case "5zxiRibahzt":
        Script16();
        break;
      case "6ijZZPLwCgM":
        Script17();
        break;
      case "6lOLhGoT1vo":
        Script18();
        break;
      case "5zLrsK6PGXQ":
        Script19();
        break;
      case "6angBkScEEt":
        Script20();
        break;
      case "6T1KVyJpBYP":
        Script21();
        break;
      case "5VdXS6wKye1":
        Script22();
        break;
      case "5qft1TQvUxi":
        Script23();
        break;
      case "67IYbFvGcK4":
        Script24();
        break;
      case "601CoBLqgKP":
        Script25();
        break;
      case "6csY2LIUfVO":
        Script26();
        break;
      case "6KhNrSOtCK9":
        Script27();
        break;
      case "5gVp8e5kwE9":
        Script28();
        break;
      case "6AwLqOzJFxn":
        Script29();
        break;
      case "5o4G0MoHFOz":
        Script30();
        break;
      case "6RmcduGVC7d":
        Script31();
        break;
      case "5gzB9FfqFQo":
        Script32();
        break;
      case "5WphW5VLfQv":
        Script33();
        break;
      case "5wNRljf0sXh":
        Script34();
        break;
      case "6BEaF6dPhxR":
        Script35();
        break;
      case "6oj0NrWPziu":
        Script36();
        break;
      case "6Mut7T2JpQM":
        Script37();
        break;
      case "5tVOepch1Nc":
        Script38();
        break;
      case "5dJ4mgo7r1O":
        Script39();
        break;
      case "6dQ8yPFgoZt":
        Script40();
        break;
      case "6C9BnM78IEa":
        Script41();
        break;
      case "5o6DURFoiOo":
        Script42();
        break;
      case "6QphxWlHUMe":
        Script43();
        break;
      case "5fUbM387JB6":
        Script44();
        break;
      case "6V92Xmt9fKp":
        Script45();
        break;
      case "5dxowN2Xvoo":
        Script46();
        break;
      case "5cFRnTy2Dgz":
        Script47();
        break;
      case "6r3w5TQt6JU":
        Script48();
        break;
      case "5Xb0pF4IRCM":
        Script49();
        break;
      case "6kXKESf46BC":
        Script50();
        break;
      case "6ZRHkWhzy1T":
        Script51();
        break;
      case "5hIXF5tBC2f":
        Script52();
        break;
      case "6jZIC63FaNE":
        Script53();
        break;
      case "6hOqx6zDznT":
        Script54();
        break;
      case "6YBVm1vm7uI":
        Script55();
        break;
      case "5v87hUyrtQ2":
        Script56();
        break;
      case "6g9kZlJezQO":
        Script57();
        break;
      case "6quzLOTAI2J":
        Script58();
        break;
      case "61ZGzTOSRTs":
        Script59();
        break;
      case "5iFzSTnHUvs":
        Script60();
        break;
      case "6O92yLKrEDT":
        Script61();
        break;
      case "5Yz6dstMTJB":
        Script62();
        break;
      case "6KN9Qw3Qi92":
        Script63();
        break;
      case "60Rd73ofv2t":
        Script64();
        break;
      case "6a0xCAkCokD":
        Script65();
        break;
      case "5YPkGq6AT3i":
        Script66();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('6SXceAWyL96');
const duration = 750;
const easing = 'ease-out';
const id = '5ixeQHIGPdh';
const pulseAmount = 0.07;
const delay = 250;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
