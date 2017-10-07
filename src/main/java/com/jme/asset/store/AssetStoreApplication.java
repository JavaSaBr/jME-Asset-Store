package com.jme.asset.store;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.Map;
import java.util.Set;

@Controller
@EnableAutoConfiguration
public class AssetStoreApplication {



    @RequestMapping("/")
    @ResponseBody
    String home() {
        return "Hello World!";
    }


    @RequestMapping(value = "/math/add", method = RequestMethod.GET )
    @ResponseBody
    String add(HttpServletRequest request){
        Enumeration<String> e =  request.getParameterNames();
        int size = request.getParameterMap().size();
        if(size == 1) return "add 1 more param" ;
        if(size == 0) return "add 2 more params";
        if(size == 3) return "1 extra param is present";
        if(size > 3)  return (size-2) + " extra params are present";
        String f = request.getParameter(e.nextElement());
        String s = request.getParameter(e.nextElement());
        int first = Integer.valueOf(f);
        int second = Integer.valueOf(s);
        return  first +  " + " + second + " = "  + (first + second);
    }

    @RequestMapping(value = "/math/sub", method = RequestMethod.GET )
    @ResponseBody
    String sub(HttpServletRequest request){
        Enumeration<String> e =  request.getParameterNames();
        int size = request.getParameterMap().size();
        if(size == 1) return "add 1 more param" ;
        if(size == 0) return "add 2 more params";
        if(size == 3) return "1 extra param is present";
        if(size > 3)  return (size-2) + " extra params are present";
        String f = request.getParameter(e.nextElement());
        String s = request.getParameter(e.nextElement());
        int first = Integer.valueOf(f);
        int second = Integer.valueOf(s);
        return first +  " - " + second + " = "  + (first - second);
    }

    @RequestMapping(value = "/math/mult", method = RequestMethod.GET )
    @ResponseBody
    String multiply(HttpServletRequest request){
        Enumeration<String> e =  request.getParameterNames();
        int size = request.getParameterMap().size();
        if(size == 1) return "add 1 more param" ;
        if(size == 0) return "add 2 more params";
        if(size == 3) return "1 extra param is present";
        if(size > 3)  return (size-2) + " extra params are present";
        String f = request.getParameter(e.nextElement());
        String s = request.getParameter(e.nextElement());
        int first = Integer.valueOf(f);
        int second = Integer.valueOf(s);
        return first +  " x " + second + " = "  + (first * second);
    }

    @RequestMapping(value = "/math/division", method = RequestMethod.GET )
    @ResponseBody
    String division(HttpServletRequest request){
        Enumeration<String> e =  request.getParameterNames();
        int size = request.getParameterMap().size();
        if(size == 1) return "add 1 more param" ;
        if(size == 0) return "add 2 more params";
        if(size == 3) return "1 extra param is present";
        if(size > 3)  return (size-2) + " extra params are present";
        String f = request.getParameter(e.nextElement());
        String s = request.getParameter(e.nextElement());
        int first = Integer.valueOf(f);
        int second = Integer.valueOf(s);
        if(second==0) return "Division by zero is impossible!!!";
        return first +  " / " + second + " = "  + ((double)first / (double)second);
    }

    @RequestMapping(value = "/math/pow", method = RequestMethod.GET )
    @ResponseBody
    String pow(HttpServletRequest request){
        Enumeration<String> e =  request.getParameterNames();
        int size = request.getParameterMap().size();
        if(size == 1) return "add 1 more param" ;
        if(size == 0) return "add 2 more params";
        if(size == 3) return "1 extra param is present";
        if(size > 3)  return (size-2) + " extra params are present";
        String f = request.getParameter(e.nextElement());
        String s = request.getParameter(e.nextElement());
        int first = Integer.valueOf(f);
        int second = Integer.valueOf(s);
        return first +  " ^ " + second + " = "  + (int)Math.pow((double)first, (double)second);
    }




    public static void main(String[] args) throws Exception {
        SpringApplication.run(AssetStoreApplication.class, args);
    }


}
