import { Prop, Schema } from "@nestjs/mongoose";
import { APIValidationMessages } from "src/application/constants/validation";

@Schema()
export class DocumentBaseModel {
  @Prop()
  createdDateTime: Date;

  @Prop({
    type: String,
    validate: {
      validator: (value: string) => Promise.resolve(value.length < 50),
      message: APIValidationMessages.CREATED_BY_ERROR,
    },
  })
  createdBy: string;

  @Prop()
  modifiedDateTime?: Date;

  @Prop({
    type: String,
    validate: {
      validator: (value: string) => Promise.resolve(value.length < 50),
      message: APIValidationMessages.MODIFIED_BY_ERROR,
    },
  })
  modifiedBy?: string;

  @Prop()
  deletedDateTime?: Date;

  @Prop({
    type: String,
    validate: {
      validator: (value: string) => Promise.resolve(value.length < 50),
      message: APIValidationMessages.DELETED_BY_ERROR,
    },
  })
  deletedBy?: string;
}
