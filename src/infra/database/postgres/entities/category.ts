
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'categories' })
export class PgCategory {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  title!: string

  @Column()
  description!: string

  @Column()
  color!: string
}
