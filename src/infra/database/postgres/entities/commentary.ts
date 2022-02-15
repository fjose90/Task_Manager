
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { PgTask } from './task'

@Entity({ name: 'commentaries' })
export class PgCommentary {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  description!: string

  @ManyToOne(() => PgTask, (task) => task.commentaries, { onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  @JoinColumn()
  task!: PgTask
}
