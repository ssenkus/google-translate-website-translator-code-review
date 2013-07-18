package com.google.utils
{


   public class Url extends Object
   {
      public function Url(param1:String="") {
         var _loc2_:String = null;
         var _loc3_:Array = null;
         var _loc4_:RegExp = null;
         var _loc5_:String = null;
         var _loc6_:String = null;
         var _loc7_:RegExp = null;
         var _loc8_:String = null;
         var _loc9_:String = null;
         parameterVars=[];
         queryVars={};
         super();
         originalUrl=param1;
         _loc3_=new RegExp("^(?#protocol) (([a-zA-Z0-9\\+\\.\\-]+):)? (?#rest) (.*)$","ix").exec(originalUrl)  as  Array;
         protocol=(_loc3_[2]) || "";
         _loc2_=(_loc3_[3]) || "";
         protocol=protocol.toLowerCase();
         _loc3_=new RegExp("^(?#rest) ([^\\?\\#]*) (?#query) (\\?([^\\#]*))? (?#frag) (\\#(.*))?$","ix").exec(_loc2_)  as  Array;
         _loc2_=(_loc3_[1]) || "";
         query=(_loc3_[3]) || "";
         fragment=(_loc3_[5]) || "";
         _loc3_=new RegExp("^(\\/\\/)? (?#authority) ([^\\/]*) (?#rest) (.*)$","ix").exec(_loc2_)  as  Array;
         isResource=_loc3_[1] == "//";
         authority=(_loc3_[2]) || "";
         _loc2_=(_loc3_[3]) || "";
         _loc3_=new RegExp("^(?#fullPath) (\\/[^;]*) (?#parameters) (;(.*))?$","ix").exec(_loc2_)  as  Array;
         if(_loc3_)
         {
            fullPath=(_loc3_[1]) || "";
            parameters=(_loc3_[3]) || "";
         }
         _loc3_=new RegExp("^(?#uspa) (([^:@]*)(:([^@]*))?@)? (?#host) ([^:]*) (?#port) (:(.*))?","ix").exec(authority)  as  Array;
         username=(_loc3_[2]) || "";
         password=(_loc3_[4]) || "";
         hostname=(_loc3_[5]) || "";
         port=(_loc3_[7]) || "";
         hostname=hostname.toLowerCase();
         if(parameters)
         {
            _loc4_=new RegExp("(?#id)([^=;]+) (=?) (?#value)([^;]*) [;|$]?","ixg");
            while(_loc3_=_loc4_.exec(parameters)  as  Array)
            {
               _loc5_=_loc3_[1];
               _loc6_=_loc3_[2]?_loc3_[3]:null;
               parameterVars.push(new KeyValuePair(_loc5_,_loc6_));
            }
         }
         if(query)
         {
            _loc7_=new RegExp("(?#id)([^=&]+) (=?) (?#value)([^&]*) [&|$]?","ixg");
            while(_loc3_=_loc7_.exec(query)  as  Array)
            {
               _loc8_=_loc3_[1];
               _loc9_=_loc3_[2]?_loc3_[3]:null;
               queryVars[unescape(_loc8_)]=_loc9_?unescape(_loc9_):_loc9_;
            }
         }
         return;
      }

      public static function getUrlParameter(param1:String, param2:String) : String {
         var _loc3_:Object = findUrlParameter(param1,param2);
         if(!_loc3_.found)
         {
            return null;
         }
         return param1.slice(_loc3_.valueStart,_loc3_.valueEnd);
      }

      public static function isWhiteListedUrl(param1:String, param2:Array) : Boolean {
         var _loc4_:* = 0;
         var _loc5_:String = null;
         var _loc6_:String = null;
         var _loc3_:Url = new Url(param1);
         if(_loc3_.protocol == "http" || _loc3_.protocol == "https" || _loc3_.protocol == "ftp")
         {
            _loc4_=0;
            while(_loc4_ < param2.length)
            {
               _loc5_=param2[_loc4_];
               if(_loc3_.matchesHostname(_loc5_))
               {
                  return true;
               }
               _loc6_="*." + _loc5_;
               if(_loc3_.matchesHostname(_loc6_))
               {
                  return true;
               }
               _loc4_++;
            }
         }
         return false;
      }

      private static function setProperty(param1:Array, param2:String, param3:String) : void {
         var _loc4_:KeyValuePair = getProperty(param1,param2);
         if(_loc4_)
         {
            _loc4_.value=param3;
         }
         else
         {
            param1.push(new KeyValuePair(param2,param3));
         }
         return;
      }

      private static function findUrlParameter(param1:String, param2:String) : Object {
         var _loc5_:* = NaN;
         var _loc3_:Object = new Object();
         _loc3_.found=false;
         _loc3_.hasQuestionMark=false;
         var _loc4_:int = param1.indexOf("?");
         if(_loc4_ > 0)
         {
            _loc3_.hasQuestionMark=true;
         }
         while(_loc4_ > 0 && _loc4_ < param1.length)
         {
            _loc4_=param1.indexOf(param2,_loc4_ + 1);
            if(_loc4_ > 0 && (param1.charAt(_loc4_-1) == "?" || param1.charAt(_loc4_-1) == "&") && param1.charAt(_loc4_ + param2.length) == "=")
            {
               _loc5_=param1.indexOf("&",_loc4_);
               if(_loc5_ < 0)
               {
                  _loc5_=param1.length;
               }
               _loc3_.found=true;
               _loc3_.nameStart=_loc4_;
               _loc3_.nameEnd=_loc4_ + param2.length;
               _loc3_.valueStart=_loc4_ + param2.length + 1;
               _loc3_.valueEnd=_loc5_;
               break;
            }
         }
         return _loc3_;
      }

      private static function getProperty(param1:Array, param2:String) : KeyValuePair {
         var _loc3_:KeyValuePair = null;
         var _loc4_:String = null;
         for each (_loc3_ in param1)
         {
            _loc4_=String(_loc3_.key);
            if(_loc3_.key == param2)
            {
               return _loc3_;
            }
         }
         return null;
      }

      public static function setUrlParameter(param1:String, param2:String, param3:String) : String {
         var _loc5_:String = null;
         var _loc6_:String = null;
         var _loc4_:Object = findUrlParameter(param1,param2);
         if(_loc4_.found)
         {
            _loc5_=param1.slice(0,_loc4_.valueStart);
            _loc6_=param1.slice(_loc4_.valueEnd);
            return _loc5_ + param3 + _loc6_;
         }
         if(_loc4_.hasQuestionMark)
         {
            return param1 + "&" + param2 + "=" + param3;
         }
         return param1 + "?" + param2 + "=" + param3;
      }

      public static function equals(param1:String, param2:String) : Boolean {
         var _loc3_:Url = new Url(param1);
         var _loc4_:Url = new Url(param2);
         return _loc3_.equals(_loc4_);
      }

      public var port:String = "";

      public var authority:String = "";

      private function diffValues(param1:Object, param2:Object) : String {
         if(param1 != param2)
         {
            return "Expected ".concat(param1,", but found ",param2,".");
         }
         return "";
      }

      public var query:String = "";

      public function getExtension() : String {
         var _loc1_:* = 0;
         if(fullPath)
         {
            _loc1_=fullPath.lastIndexOf(".");
            if(_loc1_ != -1)
            {
               return fullPath.substring(_loc1_ + 1);
            }
         }
         return null;
      }

      public function setParam(param1:String, param2:String) : void {
         setProperty(parameterVars,param1,param2);
         return;
      }

      public function diffUrl(param1:Url) : String {
         var _loc2_:String = null;
         var _loc3_:String = null;
         _loc2_="".concat(calculateDiffPartToAppend(_loc2_,diffValues(this.protocol,param1.protocol),"protocol"));
         _loc2_=_loc2_.concat(calculateDiffPartToAppend(_loc2_,diffValues(this.isResource,param1.isResource),"isResource"));
         _loc2_=_loc2_.concat(calculateDiffPartToAppend(_loc2_,diffValues(this.hostname,param1.hostname),"hostname"));
         _loc2_=_loc2_.concat(calculateDiffPartToAppend(_loc2_,diffValues(this.username,param1.username),"username"));
         _loc2_=_loc2_.concat(calculateDiffPartToAppend(_loc2_,diffValues(this.password,param1.password),"password"));
         _loc2_=_loc2_.concat(calculateDiffPartToAppend(_loc2_,diffValues(this.port,param1.port),"port"));
         _loc2_=_loc2_.concat(calculateDiffPartToAppend(_loc2_,diffValues(this.fullPath,param1.fullPath),"fullPath"));
         _loc2_=_loc2_.concat(calculateDiffPartToAppend(_loc2_,diffValues(this.fragment,param1.fragment),"fragment"));
         _loc2_=_loc2_.concat(calculateDiffPartToAppend(_loc2_,diffProperties(this.parameterVars,param1.parameterVars),"parameterVars"));
         var _loc4_:Array = [];
         var _loc5_:Array = [];
         for (_loc3_ in this.queryVars)
         {
            _loc4_.push(new KeyValuePair(_loc3_,this.queryVars[_loc3_]));
         }
         for (_loc3_ in param1.queryVars)
         {
            _loc5_.push(new KeyValuePair(_loc3_,param1.queryVars[_loc3_]));
         }
         _loc2_=_loc2_.concat(calculateDiffPartToAppend(_loc2_,diffProperties(_loc4_,_loc5_),"queryVars"));
         return _loc2_;
      }

      public function matchesHostname(param1:String) : Boolean {
         var param1:String = param1.toLowerCase();
         if(param1.substr(0,2) == "*.")
         {
            param1=param1.slice(2);
            if(param1.length > hostname.length)
            {
               return false;
            }
            return hostname.slice(-param1.length) == param1 && (hostname.length == param1.length || hostname.charAt(hostname.length - param1.length-1) == ".");
         }
         return param1 == hostname;
      }

      public var queryVars:Object;

      private function calculateDiffPartToAppend(param1:String, param2:String, param3:String) : String {
         if(param2)
         {
            return (param1?"\n":"").concat(param3,": ",param2);
         }
         return "";
      }

      public var username:String = "";

      public var fragment:String = "";

      public var protocol:String = "";

      public var fullPath:String = "";

      public var originalUrl:String = "";

      public var isResource:Boolean;

      public var password:String = "";

      private function diffProperties(param1:Array, param2:Array) : String {
         var _loc4_:KeyValuePair = null;
         var _loc5_:KeyValuePair = null;
         var _loc3_:* = "";
         for each (_loc4_ in param2)
         {
            _loc5_=Url.getProperty(param1,_loc4_.key  as  String);
            if(!_loc5_)
            {
               _loc3_=_loc3_.concat(_loc3_?"\n\t":"","Extra ",_loc4_," found.");
            }
         }
         for each (_loc5_ in param1)
         {
            _loc4_=Url.getProperty(param2,_loc5_.key  as  String);
            if(!_loc4_)
            {
               _loc3_=_loc3_.concat(_loc3_?"\n\t":"",_loc5_," not found.");
            }
            else
            {
               if(_loc5_.value != _loc4_.value)
               {
                  _loc3_=_loc3_.concat("","Expected ",_loc5_,", ","but found ",_loc4_,".");
               }
            }
         }
         return _loc3_;
      }

      public var parameters:String = "";

      public function recombineUrl(param1:Boolean=false, param2:Object=null) : String {
         var _loc4_:KeyValuePair = null;
         var _loc7_:Object = null;
         var _loc8_:String = null;
         var _loc3_:String = "".concat(protocol?protocol + ":":"",isResource?"//":"");
         if(param1)
         {
            _loc3_=_loc3_ + authority;
         }
         else
         {
            if((username) || (password))
            {
               _loc3_=_loc3_.concat(username?username:"",password?":" + password:"","@");
            }
            _loc3_=_loc3_.concat(hostname,port?":" + port:"");
         }
         _loc3_=_loc3_ + fullPath;
         var _loc5_:String = parameters;
         if(!param1)
         {
            _loc5_="";
            for each (_loc4_ in parameterVars)
            {
               _loc5_=_loc5_ + ((_loc5_?";":"") + _loc4_.key);
               if(_loc4_.value != null)
               {
                  _loc5_=_loc5_ + ("=" + _loc4_.value);
               }
            }
         }
         _loc3_=_loc3_ + (_loc5_?";" + _loc5_:"");
         var _loc6_:String = query;
         if(!param1)
         {
            _loc6_="";
            _loc7_=param2?param2:this.queryVars;
            for (_loc8_ in _loc7_)
            {
               _loc6_=_loc6_ + ((_loc6_?"&":"") + escape(_loc8_));
               if(_loc7_[_loc8_] != null)
               {
                  _loc6_=_loc6_ + ("=" + escape(String(_loc7_[_loc8_])));
               }
            }
         }
         _loc3_=_loc3_ + (_loc6_?"?" + _loc6_:"");
         _loc3_=_loc3_ + (fragment?"#" + fragment:"");
         return _loc3_;
      }

      public var hostname:String = "";

      public var parameterVars:Array;

      public function getParam(param1:String) : String {
         var _loc2_:KeyValuePair = getProperty(parameterVars,param1);
         if(_loc2_ != null)
         {
            return _loc2_.value  as  String;
         }
         return null;
      }

      public function toString() : String {
         return "[Url url=".concat(recombineUrl()," originalUrl=",originalUrl,"]");
      }

      public function equals(param1:Url) : Boolean {
         return !diffUrl(param1);
      }
   }

}