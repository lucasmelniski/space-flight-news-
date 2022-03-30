import { Entity, ObjectIdColumn, ObjectID, Column, BaseEntity, OneToOne } from "typeorm";
import { Events } from "./Events";
import { Launches } from "./Launches";

@Entity()
export class Article extends BaseEntity {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  id: number;

  @Column()
  featured: boolean;

  @Column()
  title: string;

  @Column()
  url: string;

  @Column()
  imageUrl: string;

  @Column()
  newsSite: string;

  @Column()
  summary: string;

  @Column()
  publishedAt: string;

  @OneToOne(() => Launches, { onDelete: "CASCADE", cascade: true })
  @Column(() => Launches)
  launches: Launches[];

  @OneToOne(() => Events, { onDelete: "CASCADE", cascade: true })
  @Column(() => Events, { array: true, prefix: true })
  events: Events[];
}
