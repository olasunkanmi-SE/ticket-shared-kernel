/**
 * Entity audit interface
 * @export
 * @interface IAuditProps
 */

export interface IAuditProps {
  createdBy: string;
  modifiedBy?: string;
  deletedBy?: string;
  createdDateTime: Date;
  modifiedDateTime?: Date;
  deletedDateTime?: Date;
}
