package com.google.utils
{


   public class KeyValuePair extends Object
   {
      public function KeyValuePair(param1:Object, param2:Object) {
         super();
         this.key=param1;
         this.value=param2;
         return;
      }

      public var value:Object;

      public function toString() : String {
         return "{" + key + ": " + value + "}";
      }

      public var key:Object;
   }

}