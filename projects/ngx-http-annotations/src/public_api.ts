export * from './lib/ngx-http-annotations.module';
export * from './lib/ngx-http-annotations.utils';
import {HttpRestUtils, path, body, query, headers, produces, observe, response} from "./lib/ngx-http-annotations.utils";

export let Path = path;
export let PathParam = path;
export let Body = body(null);
export let ResponseObservable = response(null);
export let Query = query(null);
export let QueryParam = query;
export let QueryParams = query;
export let Observe = observe;

// Headers
export let Headers = headers;

// Produces
export let Produces = produces;

// Request methods
export let GET = HttpRestUtils.requestMethod('Get');
export let POST = HttpRestUtils.requestMethod('Post');
export let PUT = HttpRestUtils.requestMethod('Put');
export let DELETE = HttpRestUtils.requestMethod('Delete');
export let OPTIONS = HttpRestUtils.requestMethod('Options');
export let HEAD = HttpRestUtils.requestMethod('Head');
export let PATCH = HttpRestUtils.requestMethod('Patch');
