package googledata.translate.twsfe.js.element
{
   import flash.display.Sprite;
   import flash.net.URLLoader;
   import flash.net.URLRequest;
   import flash.events.Event;
   import flash.system.Capabilities;
   import flash.external.ExternalInterface;
   import flash.events.IOErrorEvent;
   import flash.events.SecurityErrorEvent;
   import flash.net.URLRequestHeader;
   import com.google.utils.Url;
   import flash.system.Security;


   public class HttpRequestService extends Sprite
   {
      public function HttpRequestService() {
         super();
         Security.allowDomain("*");
         Security.allowInsecureDomain("*");
         apiBaseUrl=getApiBaseUrl();
         maxId=0;
         requests={};
         available=false;
         if((apiBaseUrl) && (!(apiBaseUrl == "")) && (ExternalInterface.available))
         {
            try
            {
               hostPageUrl=ExternalInterface.call("window.location.href.toString");
               ExternalInterface.addCallback("isAvailable",isAvailable);
               ExternalInterface.addCallback("send",send);
               ExternalInterface.addCallback("cancel",cancel);
               available=true;
            }
            catch(error:Error)
            {
            }
         }
         return;
      }

      private var available:Boolean;

      private var apiBaseUrl:String;

      public function isAvailable() : Boolean {
         return available;
      }

      private const API_PATHS:Object = {"translate":"translate_a/t"};

      private var requests:Object;

      public const SEND_ERROR:int = -1;

      public function send(param1:String, param2:String, param3:String, param4:String) : int {
         var id:int = 0;
         var req:URLRequest = null;
         var apiName:String = param1;
         var callback:String = param2;
         var urlParams:String = param3;
         var postData:String = param4;
         if(!available || !apiBaseUrl || !API_PATHS[apiName] || !callback)
         {
            return SEND_ERROR;
         }
         var loader:URLLoader = new URLLoader();
         id=maxId++;
         requests[id]=
            {
               "loader":loader,
               "callback":callback
            }
         ;
         try
         {
            loader.addEventListener(Event.COMPLETE,new function(param1:Event):void
            {
               var _loc2_:String = Capabilities.playerType == "ActiveX"?param1.target.data:param1.target.data.replace(new RegExp("\\\\","g"),"\\\\");
               ExternalInterface.call(requests[id].callback,_loc2_);
               requests[id].loader.close();
               delete requests[[id]];
               return;
               });
               loader.addEventListener(IOErrorEvent.IO_ERROR,new function(param1:IOErrorEvent):void
               {
                  ExternalInterface.call(requests[id].callback,null,"IO_ERROR");
                  requests[id].loader.close();
                  delete requests[[id]];
                  return;
                  });
                  loader.addEventListener(SecurityErrorEvent.SECURITY_ERROR,new function(param1:SecurityErrorEvent):void
                  {
                     ExternalInterface.call(requests[id].callback,null,"SECURITY_ERROR");
                     requests[id].loader.close();
                     delete requests[[id]];
                     return;
                     });
                     req=new URLRequest(apiBaseUrl + API_PATHS[apiName] + (urlParams?"?" + urlParams:""));
                     req.requestHeaders=[new URLRequestHeader("Google-Translate-Referer",(hostPageUrl) || "")];
                     if(postData)
                     {
                        req.method="POST";
                        req.data=postData;
                        req.contentType="application/x-www-form-urlencoded";
                     }
                     else
                     {
                        req.method="GET";
                     }
                     loader.load(req);
                  }
                  catch(error:Error)
                  {
                     delete requests[[id]];
                     return SEND_ERROR;
                  }
                  return id;
      }

      private var hostPageUrl:String;

      public function cancel(param1:int) : void {
         if(requests[param1])
         {
            requests[param1].loader.close();
            delete requests[[param1]];
         }
         return;
      }

      private function getApiBaseUrl() : String {
         var _loc1_:Url = new Url(loaderInfo.url);
         var _loc2_:Array = "translate.googleapis.com".split("|");
         var _loc3_:* = false;
         var _loc4_:* = 0;
         while(_loc4_ < _loc2_.length)
         {
            _loc3_=_loc1_.matchesHostname(_loc2_[_loc4_]);
            if(_loc3_)
            {
               break;
            }
            _loc4_++;
         }
         if(!_loc3_ || !(_loc1_.protocol == "http") && !(_loc1_.protocol == "https"))
         {
            return "";
         }
         return _loc1_.protocol + "://" + _loc1_.hostname + "/";
      }

      private var maxId:Number;
   }

}