
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { PgCommentary } from '@/infra/database/postgres/entities'

@Entity({ name: 'tasks' })
export class PgTask {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  title!: string

  @Column()
  description!: string

  @Column({ type: 'boolean' })
  isFavorite!: boolean

  @Column({ type: 'boolean' })
  isComplete!: boolean

  @OneToMany(() => PgCommentary, (commentary) => commentary.task)
  commentaries!: PgCommentary[]
}
