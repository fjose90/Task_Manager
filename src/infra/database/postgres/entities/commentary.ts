
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { PgTask } from './task'

@Entity({ name: 'commentary' })
export class PgCommentary {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  description!: string

  @ManyToOne(() => PgTask, (task) => task.commentaries)
  @JoinColumn()
  task!: PgTask
}
