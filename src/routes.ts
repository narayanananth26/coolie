/**
 * Array of public routes.
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * Array of routes that require authentication.
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * Prefix for API authentication routes.
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default login redirect route.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/";
