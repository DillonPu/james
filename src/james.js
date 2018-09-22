//为了防止自己写的库用的时候与其他库引起冲突，所以全部在这个闭包里面写自己的代码
;(function () {
  //创建一个全局变量
  window.James = $J = JAMES = function(selector){
    return new JamesObj(selector)
  };
  //定义一个版本号
  JAMES.version = "0.0.1";
  JAMES.author = "AL-DillonPu";

  //自定义处理字符串库
  JAMES.JString = {};
  /**
   * 去掉字符串两边的空格
   * @param {string} string 待处理的字符串
   * @since 0.0.1
   * @returns {string}
   * @description 去掉字符串两边的空格
   */
  JAMES.JString.trim = function(str){
    return str.replace(/(^\s*)|(\s*$)/g,""); 
  };

  /**
   * 去掉字符串右边的空格
   * @param {string} string 待处理的字符串
   * @since 0.0.1
   * @returns {string}
   * @description 去掉字符串右边的空格
   */
  JAMES.JString.rightTrim = function(str){
    return str.replace(/\s*$/,""); 
  };

  /**
   * 去掉字符串左边的空格
   * @param {string} string 待处理的字符串
   * @since 0.0.1
   * @returns {string}
   * @description 去掉字符串左边的空格
   */
  JAMES.JString.leftTrim = function(str){
    return str.replace(/^\s*/,"");; 
  };

  /**
   * 
   * @param {*} selector 选择器
   */
  var JamesObj = function (selector) {
    // 传入字符串
    if(typeof(selector)=="string"){
      selector = JAMES.JString.trim(selector);
    }else{

    };
  };
})();
