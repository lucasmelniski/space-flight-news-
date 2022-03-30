import { Entity, ObjectIdColumn, ObjectID, Column, BaseEntity } from "typeorm";

@Entity()
export class Launches extends BaseEntity {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  provider: string;
}
