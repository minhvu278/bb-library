import { History } from 'src/history/entities/history.entity';
import { Review } from 'src/reviews/entities/review.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  full_name: string;

  @Column()
  address: string;

  @Column()
  role: string;

  @OneToMany(() => History, (history) => history.user)
  history: History[];

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];
}
