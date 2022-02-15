
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'users' })
export class PgUser {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column()
  email!: string

  @Column()
  phone!: string
}
