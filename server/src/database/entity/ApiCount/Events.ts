import { Entity, ObjectIdColumn, ObjectID, Column, BaseEntity } from "typeorm";

@Entity()
export class ApiCount extends BaseEntity {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  id: number;

  @Column()
  count: string;
}
