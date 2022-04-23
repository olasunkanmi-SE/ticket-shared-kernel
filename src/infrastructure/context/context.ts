import { SecurityContext } from "./security-context";
import { ISecurityContext } from "./security-token";

/**
 * Context retrieves information about the current actions of a user within the application
 * @export
 * @Class Context
 */
export class Context {
  private readonly _userEmail: string;
  private readonly _securedAuthToken?: ISecurityContext;
  constructor(
    userEmail: string,
    private readonly _correlationID: string,
    authToken?: string
  ) {
    this._securedAuthToken = new SecurityContext(authToken);
    this._userEmail = userEmail;
    if (
      this._securedAuthToken.securedTokenInfo &&
      this._securedAuthToken.securedTokenInfo.email
    ) {
      this._userEmail = this._securedAuthToken.securedTokenInfo.email;
    }
  }

  /**
   * get the user email.
   * @readonly
   * @type {(string)}
   * @memberof Context
   */
  get userEmail(): string {
    return this._userEmail;
  }

  /**
   * retrieve the correlationId generated via API header to tracing and auditing purposes.
   * @readonly
   * @type {(string)}
   * @memberof Context
   */
  get correlationId(): string {
    return this._correlationID;
  }

  /**
   * retrieves the secure auth token information.
   * @readonly
   * @type {(ISecuredTokenInformation)}
   * @memberof Context
   */
  get securedAuthToken() {
    return this._securedAuthToken.securedTokenInfo;
  }

  /**
   * retrieves the accessToken.
   * @readonly
   * @type {(string)}
   * @memberof Context
   */
  get accessToken(): string {
    return this._securedAuthToken.accessToken;
  }
}
