
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

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
}
