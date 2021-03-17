package com.sencrop.capacitor.firebase.dynamiclinks;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "CapacitorFirebaseDynamicLinks")
public class CapacitorFirebaseDynamicLinksPlugin extends Plugin {

    private CapacitorFirebaseDynamicLinks implementation = new CapacitorFirebaseDynamicLinks();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }
}
