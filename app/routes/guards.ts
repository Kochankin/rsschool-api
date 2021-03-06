import { UNAUTHORIZED } from 'http-status-codes';
import { Middleware } from 'koa';
import * as Router from 'koa-router';
import { config } from '../config';

export const guard: Middleware = async (ctx: Router.IRouterContext, next) => {
    if (ctx.state.user != null && (ctx.isAuthenticated() || config.isDevMode)) {
        await next();
    } else {
        ctx.status = UNAUTHORIZED;
    }
};

export const adminGuard: Middleware = async (ctx: Router.IRouterContext, next) => {
    if (ctx.state.user != null && ctx.state.user.isAdmin) {
        await next();
    } else {
        ctx.status = UNAUTHORIZED;
    }
};
