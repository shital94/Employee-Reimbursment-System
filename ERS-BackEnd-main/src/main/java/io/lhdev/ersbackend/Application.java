package io.lhdev.ersbackend;

import io.javalin.Javalin;
import io.lhdev.ersbackend.controller.Controller;
import io.lhdev.ersbackend.controller.LoginController;

import io.lhdev.ersbackend.controller.ReimbursementController;
import io.lhdev.ersbackend.exception.ExceptionMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class Application {

    private static Javalin app;

    private static Logger logger = LoggerFactory.getLogger(Application.class);

    public static void main(String[] args) {

        Javalin app = Javalin.create((config) -> {
            config.addStaticFiles("static");
            config.enableCorsForAllOrigins();
        });

        app.before((ctx) -> {
            String URI = ctx.req.getRequestURI();
            String httpMethod = ctx.req.getMethod();
            logger.info(httpMethod + " request to endpoint " + URI + " received");
        });

        mapControllers(app, new LoginController(), new ExceptionMapper(), new ReimbursementController());

        app.start(5432);
    }

    public static void mapControllers(Javalin app, Controller...controllers){
        for (Controller c: controllers){
            c.mapEndpoints(app);
        }
    }
}
