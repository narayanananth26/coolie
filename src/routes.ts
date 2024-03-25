/**
 * Array of public routes.
 * @type {string[]}
 */
export const publicRoutes: string[] = ["/"];

/**
 * Array of routes that require authentication.
 * @type {string[]}
 */
export const authRoutes: string[] = ["/auth/login", "/auth/register"];

/**
 * Prefix for API authentication routes.
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * The default login redirect route.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/settings";
