import { Injectable } from "@nestjs/common";
import { BaseModel } from "./../../../infrastructure/sql";
import { Audit } from "./../../../domain/audit/audit";
import { IMapper } from "./../mapper";

/**
 * Mapper for Audit
 *
 * @export
 * @class AuditMapper
 * @implements {IMapper<Audit, BaseModel>}
 */
Injectable();
export class AuditMapper implements IMapper<Audit, BaseModel> {
  /**
   * Map from Audit to BaseModel
   *
   * @param {Audit} entity
   * @return {*}  {BaseModel}
   * @memberof AuditMapper
   */
  toPersistence(entity: Audit): BaseModel {
    const {
      createdBy,
      createdDateTime,
      modifiedBy,
      modifiedDateTime,
      deletedDateTime,
      deletedBy,
    } = entity;
    const model: BaseModel = {
      createdBy,
      createdDateTime,
      modifiedBy,
      modifiedDateTime,
      deletedDateTime,
      deletedBy,
    };
    return model;
  }

  /**
   * Map from BaseModel to Audit
   *
   * @param {BaseModel} model
   * @return {*}  {Audit}
   * @memberof AuditMapper
   */
  toDomain(model: BaseModel): Audit {
    const {
      createdBy,
      createdDateTime,
      modifiedBy,
      modifiedDateTime,
      deletedDateTime,
      deletedBy,
    } = model;
    const entity: Audit = Audit.create(
      createdBy,
      createdDateTime,
      modifiedBy,
      modifiedDateTime,
      deletedBy,
      deletedDateTime
    ).getValue();
    return entity;
  }
}
