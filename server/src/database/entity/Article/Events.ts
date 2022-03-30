import { Entity, ObjectIdColumn, ObjectID, Column, BaseEntity } from "typeorm";

@Entity()
export class Events extends BaseEntity {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  provider: string;
}
