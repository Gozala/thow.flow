/* @flow */

/**
 * Just throws given `error`. Function is also generic and has a `output` type
 * parameter so that it's return type can be treated as anything you want.
 * 
 * ```js
 * import crash from "throw.flow"
 * crash(new Error("Boom")) // => Error: Boom
 * ```
 */
export default <reason, output>(error: reason): output => {
  throw error
}
