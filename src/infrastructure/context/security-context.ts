import { ISecuredTokenInformation, ISecurityContext } from "./security-token";

/**
 * Security Context will retrieve, evaluate and store JWT webtoken
 * @export
 * @Class SecurityContext
 */
export class SecurityContext implements ISecurityContext {
  private readonly _securedTokenInfo: ISecuredTokenInformation;
  private readonly _accessToken?: string;

  constructor(token?: string) {
    this._accessToken = token;
    this._securedTokenInfo = this.getTokenInformation();
  }

  /**
   * SecuredTokenInfo contains security context information such as the user email, name and roles where applicable.
   * @readonly
   * @type {(ISecuredTokenInformation)}
   * @memberof SecurityContext
   */
  get securedTokenInfo(): ISecuredTokenInformation {
    return this._securedTokenInfo;
  }

  /**
   * Retrieves JWT access token.
   * @readonly
   * @type {(string | undefined)}
   * @memberof SecurityContext
   */
  get accessToken(): string | undefined {
    return this._accessToken;
  }

  getTokenInformation(): ISecuredTokenInformation {
    return;
  }
}
